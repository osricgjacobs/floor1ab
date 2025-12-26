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
        setUser({ role: "member", Username: session.email.split("@")[0] }); // Fallback logic
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
      // ✅ Queries the 'members' table using the indexes you created
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("Username", username), Query.equal("Password", password)]
      );

      if (response.documents.length > 0) {
        // Success: Set user to member role
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
    setUser({ role: "guest" });
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
      case "members":
        return <Members />;
      case "blog":
        return <Blog />;
      case "awards":
        return user.role === "member" ? <Awards /> : <Home />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="w-full p-4 bg-red-800 shadow-xl flex justify-between items-center text-white border-b-4 border-amber-600">
        <div
          className="text-2xl font-black cursor-pointer"
          onClick={() => setCurrentView("home")}
        >
          FLOOR 1AB <span className="text-amber-500">PORTAL</span>
        </div>
        <nav className="space-x-4 font-bold">
          <button onClick={() => setCurrentView("home")}>Home</button>
          <button onClick={() => setCurrentView("members")}>Members</button>
          <button onClick={() => setCurrentView("blog")}>Blog</button>
          {user.role === "member" && (
            <button
              onClick={() => setCurrentView("awards")}
              className="text-amber-400"
            >
              Awards
            </button>
          )}
          <button
            onClick={() => setUser(null)}
            className="ml-4 border border-white px-2 py-1 rounded text-xs"
          >
            Logout
          </button>
        </nav>
      </header>
      <main className="flex-1 flex justify-center items-start p-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
