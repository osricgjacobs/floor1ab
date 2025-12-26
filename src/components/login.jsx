// src/components/Login.jsx
import React, { useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID } from "../lib/appwrite";
import { Query } from "appwrite";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleMemberLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 🔍 Search the 'members' table for matching Username and Password
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("Username", username), Query.equal("Password", password)]
      );

      if (response.documents.length > 0) {
        // Success: Pass the member's data back to App.jsx
        onLoginSuccess({ role: "member", ...response.documents[0] });
      } else {
        setError("Invalid Username or Password. Are you a true Thundercat?");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Connection failed. Check your Appwrite settings.");
    }
  };

  const handleGuestLogin = () => {
    // Guests get limited access (Home, Members, Blog) but no Awards
    onLoginSuccess({ role: "guest", name: "Guest" });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border-t-8 border-red-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ThunderPride
          </h2>
          <p className="text-red-700 font-bold uppercase tracking-widest text-sm">
            Floor 1AB Entrance
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleMemberLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Thundercat Name"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white font-bold py-3 rounded shadow-lg hover:bg-red-600 transition duration-300"
          >
            Login as Thundercat
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={handleGuestLogin}
            className="w-full bg-amber-500 text-gray-900 font-bold py-3 rounded shadow-md hover:bg-amber-400 transition duration-300"
          >
            Enter as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
