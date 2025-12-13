// src/components/Home.jsx
import React from "react";

const Home = () => (
  <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-2xl text-center">
    <h2 className="text-3xl font-extrabold text-cyan-950 mb-4">
      Home of the Thunder Pride
    </h2>
    <p className="text-gray-700 leading-relaxed mb-6">
      1AB is still notorious for its brainrot. We say some wild things on the
      daily and somehow make it sound profound. Fun fact: we produced both an HC
      member and the Vice Prim for the 2026 term, proving once again that 1AB
      breeds leaders. We're also the only floor with an entire TV show named
      after us. Go search “The Thundercats” and see for yourself.
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
      <p className="text-lg font-semibold text-cyan-700">Thundercats</p>
    </div>
  </div>
);

export default Home;
