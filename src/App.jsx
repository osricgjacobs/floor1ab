// src/App.jsx
import React, { useState, useEffect } from "react";
import { account, databases, DATABASE_ID, COLLECTION_ID } from "./lib/appwrite";
import { Query } from "appwrite";

// Import Pages
import Home from "./components/Home";
import Members from "./components/Members";
import Blog from "./components/blog";
import Awards from "./components/awards";
import Login from "./components/login";

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState("home");
  const [loading, setLoading] = useState(true);

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
      console.error("Login Error:", error);
      alert("Appwrite Query Failed. Check attributes and indexes.");
    }
  };

  const handleGuestLogin = () => {
    setUser({ role: "guest", Username: "Guest" });
    setCurrentView("home");
  };

  if (loading) return <div className="min-h-screen bg-gray-900" />;
  if (!user)
    return (
      <Login
        onLoginSuccess={handleMemberLogin}
        onGuestLogin={handleGuestLogin}
      />
    );

  const renderContent = () => {
    switch (currentView) {
      case "members": return <Members />;
      case "blog": return <Blog />;
      case "awards": return user.role === "member" ? <Awards /> : <Home />;
      case "home":
      default: return <Home />;
    }
  };

  // 💡 Helper for reusable button styling
  const navBtnClass = (view) => `
    px-4 py-2 rounded-md transition-all duration-200 font-bold cursor-pointer
    ${currentView === view 
      ? "bg-amber-500 text-gray-900 shadow-inner" 
      : "hover:bg-red-700 hover:text-amber-400 text-white"}
  `;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="w-full p-4 bg-red-800 shadow-xl flex justify-between items-center text-white border-b-4 border-amber-600">
        <div
          className="text-2xl font-black cursor-pointer select-none flex items-center gap-2"
          onClick={() => setCurrentView("home")}
        >
          FLOOR 1AB <span className="text-amber-500">PORTAL</span>
        </div>

        <nav className="flex items-center space-x-2">
          <button onClick={() => setCurrentView("home")} className={navBtnClass("home")}>
            Home
          </button>
          <button onClick={() => setCurrentView("members")} className={navBtnClass("members")}>
            Members
          </button>
          <button onClick={() => setCurrentView("blog")} className={navBtnClass("blog")}>
            Blog
          </button>
          
          {user.role === "member" && (
            <button
              onClick={() => setCurrentView("awards")}
              className={`px-4 py-2 rounded-md transition-all duration-200 font-bold cursor-pointer border-2
                ${currentView === "awards" 
                  ? "bg-amber-500 border-amber-500 text-gray-900" 
                  : "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900"}`}
            >
              Awards
            </button>
          )}

          <div className="h-8 w-[2px] bg-red-900 mx-2 hidden sm:block"></div>

          <button
            onClick={() => setUser(null)}
            className="px-4 py-2 border-2 border-white rounded-md text-xs font-black uppercase tracking-tighter hover:bg-white hover:text-red-800 transition-all cursor-pointer"
          >
            Logout
          </button>
        </nav>
      </header>

      {/* 🎯 Content centered horizontally and vertically start */}
      <main className="flex-1 flex flex-col items-center justify-start p-6 sm:p-12 overflow-x-hidden">
        <div className="w-full max-w-4xl flex justify-center">
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderContent()}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 p-6 text-center border-t border-gray-700">
        <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em]">
          Floor 1AB © 2025 | WarPride Den
        </p>
      </footer>
    </div>
  );
}

export default App;