// src/components/Home.jsx
import React from "react";

const Home = () => (
  // mx-auto ensures the card stays centered. max-w-2xl keeps it readable on desktop.
  <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-2xl mx-auto text-center border-t-8 border-red-700">
    {/* 🏠 Main Heading: Scales text size for mobile */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-950 mb-2 uppercase tracking-tight">
      Home of the Thunder Pride
    </h2>

    {/* 🦁 Slogan Section: Responsive text size */}
    <div className="mb-6 sm:mb-8">
      <p className="text-lg sm:text-xl font-black text-gray-900 leading-tight italic">
        "WE ARE ALL FOR ONE, AND
        <br />
        ONE FOR ALL.
        <br />
        <span className="text-amber-500">WE ARE 1AB."</span>
      </p>
    </div>

    {/* Prose Section */}
    <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
      1AB is still notorious for its brainrot. We say some wild things on the
      daily and somehow make it sound profound. Fun fact: we produced both an HC
      member and the Vice Prim for the 2026 term, proving once again that 1AB
      breeds leaders.
    </p>

    {/* 🎤 War Cry Section: Optimized for mobile reading with smaller text and left-alignment */}
    <div className="bg-gray-900 text-white p-5 sm:p-6 rounded-lg mb-8 shadow-inner text-left">
      <h3 className="text-amber-500 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-4 border-b border-gray-700 pb-2">
        Floor Song / War Cry
      </h3>
      <div className="space-y-1 text-xs sm:text-sm font-mono leading-snug">
        <p>
          <span className="text-amber-400">Bring the power!</span> To the 1
        </p>
        <p>
          <span className="text-amber-400">Bring the power!</span> To the 1
        </p>
        <p>
          <span className="text-amber-400">Thundercats!</span> eeyahooo!
        </p>
        <p>
          <span className="text-amber-400">Een vir almal!</span> eeyahoo!
        </p>
        <p>
          <span className="text-amber-400">Jikijikijikiii</span> eeyahoo – hoo –
          hoo - hoo!
        </p>
        <div className="pt-3 italic text-gray-400">
          <p>Who could ever be us? Who could ever see us?</p>
          <p className="text-white font-bold not-italic">
            Floor 1 Caesars! (x2)
          </p>
          <p className="pt-2">
            If you want war WE are coming, WE are cunning, WE are gunning
          </p>
          <p>Who could ever beat us? Who could ever seize us?</p>
          <p className="text-white font-bold not-italic">
            Floor 1 Caesars! (x2)
          </p>
        </div>
      </div>
    </div>

    {/* 🖼️ Image Grid: Stacks 1 column on mobile, 3 columns on tablet/desktop */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-8">
      <div className="flex flex-col items-center">
        <img
          src="./images/floor_common_room.jpg"
          alt="A Section"
          className="w-full h-48 sm:h-32 object-cover rounded-lg shadow-md border-2 border-gray-100 hover:scale-105 transition-transform duration-300"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/300x200?text=A+Section")
          }
        />
        <span className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-tighter">
          A Section
        </span>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="./images/floor_study_area.jpg"
          alt="B section"
          className="w-full h-48 sm:h-32 object-cover rounded-lg shadow-md border-2 border-gray-100 hover:scale-105 transition-transform duration-300"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/300x200?text=B+Section")
          }
        />
        <span className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-tighter">
          B Section
        </span>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="./images/floor_braai_area.jpg"
          alt="Kitchen"
          className="w-full h-48 sm:h-32 object-cover rounded-lg shadow-md border-2 border-gray-100 hover:scale-105 transition-transform duration-300"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/300x200?text=Kitchen")
          }
        />
        <span className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-tighter">
          Kitchen
        </span>
      </div>
    </div>

    {/* Footer Callout */}
    <div className="pt-6 border-t border-gray-100">
      <p className="text-lg sm:text-xl font-black text-red-800 tracking-widest uppercase italic">
        Thundercats <span className="text-amber-500">Eeyahoo!</span>
      </p>
    </div>
  </div>
);

export default Home;
