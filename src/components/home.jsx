// src/components/Home.jsx
import React from "react";

const Home = () => (
  <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-2xl text-center">
    <h2 className="text-3xl font-extrabold text-cyan-950 mb-4">
      Welcome to the Floor! 🏛️
    </h2>
    <p className="text-gray-700 leading-relaxed mb-6">
      This is the central hub for our floor community. We promote teamwork,
      academic excellence, and a vibrant social life. Here you can find
      information about our activities, facilities, and upcoming events.
    </p>

    {/* Placeholder for pictures */}
    <div className="flex justify-center space-x-4 mb-6">
      <img
        src="./images/floor_common_room.jpg"
        alt="A Section"
        className="w-32 h-32 object-cover rounded-lg shadow-md"
      />
      <img
        src="./images/floor_study_area.jpg"
        alt="B section"
        className="w-32 h-32 object-cover rounded-lg shadow-md"
      />
      <img
        src="./images/floor_braai_area.jpg"
        alt="Kitchen"
        className="w-32 h-32 object-cover rounded-lg shadow-md"
      />
    </div>

    <div className="mt-6">
      <p className="text-lg font-semibold text-cyan-700">
        Explore the camaraderie!
      </p>
    </div>
  </div>
);

export default Home;
