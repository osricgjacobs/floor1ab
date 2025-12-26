// src/App.jsx
import React, { useState, useEffect } from "react";
import { account, databases, DATABASE_ID, COLLECTION_ID } from "./lib/appwrite";
import { Query } from "appwrite";

// Import Page Components
import Home from "./components/Home";
import Members from "./components/Members";
import Blog from "./components/Blog";
import Awards from "./components/Awards";
import Login from "./components/Login";

function App() {
  // State to manage user session and navigation
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("home");

  // 🛡️ Effect to check if a session exists on load
  useEffect(() => {
    const initSession = async () => {
      try {
        // This triggers a 404 in the console if no session exists (standard Appwrite behavior)
        const session = await account.get();
        setUser({ role: "member", ...session });
      } catch (error) {
        // Gracefully handle 404 - it just means we show the Login screen
        console.log("No active session. Please login or enter as guest.");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initSession();
  }, []);

  // 🔑 Handle Thundercat (Member) Login via manual database table
  const handleMemberLogin = async (username, password) => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("Username", username), Query.equal("Password", password)]
      );

      if (response.documents.length > 0) {
        // Success: Map user data
        setUser({ role: "member", ...response.documents[0] });
        setCurrentView("home");
      } else {
        alert("Invalid credentials. Only true Thundercats may enter.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Connection failed. Check Appwrite permissions.");
    }
  };

  // 🐣 Handle Guest Entry
  const handleGuestLogin = () => {
    setUser({ role: "guest", name: "Guest User" });
    setCurrentView("home");
  };

  // 🚪 Handle Logout
  const handleLogout = async () => {
    try {
      // Try to delete Appwrite session if it exists
      await account.deleteSession("current");
    } catch (e) {
      // Ignore errors if it was a local-only guest session
    }
    setUser(null);
    setCurrentView("home");
  };

  // 🗺️ Navigation Logic
  const renderContent = () => {
    switch (currentView) {
      case "members":
        return <Members />;
      case "blog":
        return <Blog />;
      case "awards":
        // 🔒 Security Guard: Guests cannot see Awards
        return user?.role === "member" ? <Awards /> : <Home />;
      case "home":
      default:
        return <Home />;
    }
  };

  const getButtonClass = (view) =>
    `text-gray-900 font-semibold transition duration-300 py-2 px-4 rounded-lg ${
      currentView === view ? "bg-amber-400" : "bg-amber-600 hover:bg-amber-500"
    }`;

  if (loading) return <div className="min-h-screen bg-gray-900" />;

  // Show Login Screen if no user/guest session is active
  if (!user) {
    return (
      <Login
        onLoginSuccess={handleMemberLogin}
        onGuestLogin={handleGuestLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-sans">
      {/* 🦁 Header: Strong Red (ThunderCats Logo Red) */}
      <header className="w-full p-4 bg-red-800 shadow-xl flex justify-between items-center text-white border-b-4 border-amber-600">
        <div
          className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => setCurrentView("home")}
        >
          <span>FLOOR 1AB</span>
          <span className="text-amber-500">PORTAL</span>
        </div>

        <nav className="hidden md:flex space-x-4">
          <button
            onClick={() => setCurrentView("home")}
            className="hover:text-amber-400 font-bold"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView("members")}
            className="hover:text-amber-400 font-bold"
          >
            Members
          </button>
          <button
            onClick={() => setCurrentView("blog")}
            className="hover:text-amber-400 font-bold"
          >
            Blog
          </button>

          {/* Only Members see the Awards tab */}
          {user.role === "member" && (
            <button
              onClick={() => setCurrentView("awards")}
              className="text-amber-400 hover:text-amber-300 font-bold border-b-2 border-amber-400"
            >
              Awards
            </button>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-xs italic text-amber-200 hidden sm:inline">
            Logged in as: {user.Username || "Guest"}
          </span>
          <button
            onClick={handleLogout}
            className="bg-gray-900 text-amber-500 px-4 py-1 rounded border border-amber-500 font-bold hover:bg-amber-500 hover:text-gray-900 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex justify-center items-start p-4 sm:p-8">
        {renderContent()}
      </main>

      {/* Footer detailing the year/floor */}
      <footer className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
        <p>© 2025 Floor 1AB Residents. Akith LKRUGER. Hagar.</p>
      </footer>
    </div>
  );
}

export default App;
