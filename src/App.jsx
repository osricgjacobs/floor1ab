import React, { useState, useEffect } from "react";
import { account, databases, DATABASE_ID, COLLECTION_ID } from "./lib/appwrite";
import { Query } from "appwrite";

import Home from "./components/Home";
import Members from "./components/Members";
import Blog from "./components/blog";
import Awards from "./components/awards";
import Login from "./components/login";

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState("home");
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 📱 Mobile menu state

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.get();
        setUser({ role: "member", Username: session.email.split("@")[0] });
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const handleMemberLogin = async (username, password) => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("Username", username), Query.equal("Password", password)]
      );
      if (response.documents.length > 0) {
        setUser({ role: "member", ...response.documents[0] });
        setCurrentView("home");
      } else {
        alert("Invalid Thundercat credentials!");
      }
    } catch (error) {
      alert("Login Error: Check attributes and indexes.");
    }
  };

  const handleGuestLogin = () => {
    setUser({ role: "guest", Username: "Guest" });
    setCurrentView("home");
  };

  const navBtnClass = (view) => `
    px-4 py-2 rounded-md transition-all duration-200 font-bold cursor-pointer w-full md:w-auto text-center
    ${
      currentView === view
        ? "bg-amber-500 text-gray-900 shadow-inner"
        : "hover:bg-red-700 hover:text-amber-400 text-white"
    }
  `;

  if (loading) return <div className="min-h-screen bg-gray-900" />;
  if (!user)
    return (
      <Login
        onLoginSuccess={handleMemberLogin}
        onGuestLogin={handleGuestLogin}
      />
    );

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col relative">
      <header className="w-full p-4 bg-red-800 shadow-xl flex justify-between items-center text-white border-b-4 border-amber-600 sticky top-0 z-50">
        <div
          className="text-xl sm:text-2xl font-black cursor-pointer select-none"
          onClick={() => setCurrentView("home")}
        >
          1AB <span className="text-amber-500">PORTAL</span>
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* 💻 Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => setCurrentView("home")}
            className={navBtnClass("home")}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView("members")}
            className={navBtnClass("members")}
          >
            Members
          </button>
          <button
            onClick={() => setCurrentView("blog")}
            className={navBtnClass("blog")}
          >
            Blog
          </button>
          {user.role === "member" && (
            <button
              onClick={() => setCurrentView("awards")}
              className={`px-4 py-2 rounded-md font-bold cursor-pointer border-2 transition-all 
              ${
                currentView === "awards"
                  ? "bg-amber-500 border-amber-500 text-gray-900"
                  : "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900"
              }`}
            >
              Awards
            </button>
          )}
          <button
            onClick={() => setUser(null)}
            className="px-4 py-2 border-2 border-white rounded-md text-xs font-black uppercase hover:bg-white hover:text-red-800 cursor-pointer"
          >
            Logout
          </button>
        </nav>
      </header>

      {/* 📱 Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-900 border-b-4 border-amber-600 flex flex-col p-4 space-y-2 absolute top-16 left-0 w-full z-40 animate-in slide-in-from-top duration-300">
          <button
            onClick={() => {
              setCurrentView("home");
              setIsMenuOpen(false);
            }}
            className={navBtnClass("home")}
          >
            Home
          </button>
          <button
            onClick={() => {
              setCurrentView("members");
              setIsMenuOpen(false);
            }}
            className={navBtnClass("members")}
          >
            Members
          </button>
          <button
            onClick={() => {
              setCurrentView("blog");
              setIsMenuOpen(false);
            }}
            className={navBtnClass("blog")}
          >
            Blog
          </button>
          {user.role === "member" && (
            <button
              onClick={() => {
                setCurrentView("awards");
                setIsMenuOpen(false);
              }}
              className={navBtnClass("awards")}
            >
              Awards
            </button>
          )}
          <button
            onClick={() => setUser(null)}
            className="w-full py-3 bg-gray-900 text-white font-bold rounded"
          >
            Logout
          </button>
        </div>
      )}

      <main className="flex-1 flex flex-col items-center justify-start p-4 sm:p-12">
        <div className="w-full max-w-4xl flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentView === "home" && <Home />}
          {currentView === "members" && <Members />}
          {currentView === "blog" && <Blog />}
          {currentView === "awards" &&
            (user.role === "member" ? <Awards /> : <Home />)}
        </div>
      </main>
    </div>
  );
}

export default App;
