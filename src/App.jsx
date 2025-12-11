// src/App.jsx - Applying ThunderCats Color Scheme
import React, { useState } from "react";

// Import components
import Home from "./components/home";
import Members from "./components/members";
import Awards from "./components/awards";

function App() {
  // State to manage the current visible section
  const [currentView, setCurrentView] = useState("home");

  // Helper function to dynamically apply active button styling
  const getButtonClass = (view) =>
    `text-gray-900 font-semibold transition duration-300 py-2 px-4 rounded-lg ${
      currentView === view
        ? // Active style: Gold/Yellow (amber-500)
          "bg-amber-500 hover:bg-amber-400"
        : // Inactive style: Slightly darker Gold/Yellow (amber-600)
          "bg-amber-600 hover:bg-amber-500"
    }`;

  // Function to render the correct component based on state
  const renderContent = () => {
    switch (currentView) {
      case "members":
        return <Members />;
      case "awards":
        return <Awards />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    // Outer Container: Dark Grey/Black background
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header/Navigation Bar: Strong Red background */}
      <header className="w-full p-4 bg-red-800 shadow-md flex justify-between items-center">
        {/* Name/Logo on Top Left: Silver/White text */}
        <div
          className="text-2xl font-bold text-white tracking-wider cursor-pointer hover:text-amber-400 transition"
          onClick={() => setCurrentView("home")}
        >
          Floor 1AB
        </div>

        {/* Navigation Buttons Container */}
        <div className="space-x-4">
          <button
            className={getButtonClass("home")}
            onClick={() => setCurrentView("home")}
          >
            Home
          </button>
          <button
            className={getButtonClass("members")}
            onClick={() => setCurrentView("members")}
          >
            Members
          </button>
          <button
            className={getButtonClass("awards")}
            onClick={() => setCurrentView("awards")}
          >
            Floor Awards
          </button>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-center p-4">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
