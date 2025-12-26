// src/components/Awards.jsx
import React from "react";

const annualFloorAwards = [
  {
    title: "THUNDERCLOWN OF THE YEAR",
    recipient: "Hangandiiwe Mamphaga",
    summary:
      "The funniest person alive, reigning as the undisputed King of comedy.",
  },
  {
    title: "INFILTRATOR OF THE YEAR",
    recipient: "Robert Ford and Keanu Enslin",
    summary:
      "Helshoogte resident who wishes they were on 1AB, always found lurking.",
  },
  {
    title: "BARVLIEG OF THE YEAR",
    recipient: "Mavhungu Magidi",
    summary:
      "Most likely to have liver damage, a veritable connoisseur of spirits.",
  },
  {
    title: "BIGGEST DOOS OF THE YEAR",
    recipient: "Luke Groeneveld",
    summary:
      "Consistently raised the bar in obliviousness, turns the music up too loud.",
  },
  {
    title: "BROMANCE OF THE YEAR",
    recipient: "Simon Du Plooy and Luke Groeneveld (Shared)",
    summary:
      "Embodies the epitome of a heartfelt and endearing male friendship.",
  },
  {
    title: "BROMANCE OF THE YEAR",
    recipient: "Keeanu Johnson and Mavhungu Magidi (Shared)",
    summary:
      "Embodies the epitome of a heartfelt and endearing male friendship.",
  },
  {
    title: "DRAADSITTER OF THE YEAR",
    recipient: "Jack Bamford",
    summary:
      "A true wanderer, often found on other floors, unable to choose a home.",
  },
  {
    title: "DRIP KING OF THE YEAR",
    recipient: "Corné Thom",
    summary: "Stands unrivalled in the realm of looking effortlessly dapper.",
  },
  {
    title: "HANELIE PALMER",
    recipient: "Max Molyneux and Aaron Kunnath",
    summary:
      "Awarded to the resident who loves 'Buttering their Corn; Choking the Chicken; etc.'",
  },
  {
    title: "JACK OF ALL TRADES",
    recipient: "Justin Cowley",
    summary: "A well-rounded individual, the Swiss Army Knife of talent.",
  },
  {
    title: "KAREN OF THE YEAR",
    recipient: "Justin Cowley",
    summary:
      "Seamlessly embodies the spirit of a classic Boomer, making complaints their preferred pastime.",
  },
  {
    title: "MEGAPHONE OF THE YEAR",
    recipient: "Mavhungu Magidi",
    summary:
      "The resident whose voice you hear the most; their inside voice is a myth.",
  },
  {
    title: "MR OLYMPIA",
    recipient: "Corné Thom",
    summary:
      "Embodies the spirit of a champion, always found in the gym or inhaling protein.",
  },
  {
    title: "ROMEO OF THE YEAR",
    recipient: "Christiaan de Beer",
    summary: "Always visited his significant other or had them visiting him.",
  },
  {
    title: "SIDESHOW OF THE YEAR",
    recipient: "Zubair Abrahams",
    summary: "Never on the floor or in res, truly MIA.",
  },
  {
    title: "SKROPPER OF THE YEAR",
    recipient: "Hangandiiwe Mamphaga",
    summary:
      "Excels in scavenging, leaving no pen unclaimed and sniffing around for free noodles.",
  },
  {
    title: "SLUIPER OF THE YEAR",
    recipient: "Zubair Abrahams",
    summary: "Always MIA and probably won't even be at the awards ceremony.",
  },
  {
    title: "SMARTASS OF THE YEAR",
    recipient: "Lucas Kruger",
    summary:
      "Expertly perfected the art of quick-witted retorts, always having a comment.",
  },
  {
    title: "SNOWBALL OF THE YEAR",
    recipient: "Aaron Kunnath",
    summary: "Embraced the snowball effect, going too heavy on the carbs.",
  },
  {
    title: "SPORTSMAN OF THE YEAR",
    recipient: "Justin Cowley",
    summary: "A human tornado on the field, a maverick of the court.",
  },
  {
    title: "STONER OF THE YEAR",
    recipient: "Eduard Albertyn",
    summary: "A true herbal enthusiast with an interest in all things green.",
  },
  {
    title: "TAPPID OF THE YEAR",
    recipient: "Max Molyneux",
    summary:
      "You have never seen him enter the showers; hygiene is not a priority.",
  },
  {
    title: "THUNDERCAT OF THE YEAR",
    recipient: "Lucas Kruger and Aaron Kunnath",
    summary:
      "A true Thundercat by heart, exhibiting the spirit and values of Floor 1AB.",
  },
  {
    title: "VARKHOK OF THE YEAR",
    recipient: "A-section toilet",
    summary:
      "Exceptional dedication to creating an awe-inspiring masterpiece of untidiness.",
  },
  {
    title: "VIBE OF THE YEAR",
    recipient: "James Erasmus and Rixaka Maluleke",
    summary:
      "The unofficial vibe checker, often caught dancing, singing, and vibing.",
  },
  {
    title: "WILLIAM SHAKESPEARE",
    recipient: "Hangandiiwe Mamphaga",
    summary: "Always has a fascinating story or anecdote.",
  },
  {
    title: "HARPOONED A WHALE",
    recipient: "Justin Cowley",
    summary: "Successfully landed a bullseye on the biggest target imaginable.",
  },
  {
    title: "HOE OF THE YEAR",
    recipient: "Khangelani Mjana",
    summary:
      "Always has a new partner in their room; admires their ability to juggle.",
  },
];

const Awards = () => (
  <div className="bg-white p-5 sm:p-10 rounded-xl shadow-2xl w-full max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center uppercase tracking-tight">
      Floor Awards 🏆
    </h2>

    {/* 🗓️ WEEKLY AWARDS SECTION: Responsive Grid */}
    <div className="mb-12 border-b border-amber-300 pb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 text-center md:text-left">
        Weekly Recognition
      </h3>
      {/* 📱 grid-cols-1 for mobile, md:grid-cols-3 for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-red-50 rounded-lg border border-red-100 shadow-sm">
          <p className="text-xs font-bold text-red-800 uppercase tracking-widest mb-1">
            MVP
          </p>
          <p className="text-lg font-bold text-gray-900 leading-tight">
            Name Surname
          </p>
          <p className="text-[10px] text-gray-500 mt-2 font-mono italic">
            DD/MM/YYYY
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg border border-red-100 shadow-sm">
          <p className="text-xs font-bold text-red-800 uppercase tracking-widest mb-1">
            Nuusmaker
          </p>
          <p className="text-lg font-bold text-gray-900 leading-tight">
            Name Surname
          </p>
          <p className="text-[10px] text-gray-500 mt-2 font-mono italic">
            DD/MM/YYYY
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg border border-red-100 shadow-sm">
          <p className="text-xs font-bold text-red-800 uppercase tracking-widest mb-1">
            Tril
          </p>
          <p className="text-lg font-bold text-gray-900 leading-tight">
            Name Surname
          </p>
          <p className="text-[10px] text-gray-500 mt-2 font-mono italic">
            DD/MM/YYYY
          </p>
        </div>
      </div>
    </div>

    {/* 🏅 ANNUAL AWARDS SECTION */}
    <h3 className="text-2xl sm:text-3xl font-bold text-amber-700 border-b-2 border-amber-400 pb-2 mb-6 uppercase tracking-tighter">
      Annual Floor Awards 2025
    </h3>

    <div className="space-y-4">
      {annualFloorAwards.map((award, index) => (
        <div
          key={index}
          className="p-4 border-l-8 border-amber-500 bg-gray-50 rounded-r-lg shadow-sm hover:bg-amber-50 transition-colors duration-200"
        >
          <p className="text-xs font-black text-amber-700 uppercase tracking-widest mb-1">
            {award.title}
          </p>
          <p className="text-xl font-bold text-gray-900 leading-none">
            {award.recipient}
          </p>
          <p className="text-sm text-gray-600 italic mt-2 leading-relaxed">
            "{award.summary}"
          </p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center pt-6 border-t border-gray-100">
      <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest">
        Awarded by Floor 1AB & Hagar
      </p>
    </div>
  </div>
);

export default Awards;
