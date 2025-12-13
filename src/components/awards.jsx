// src/components/Awards.jsx - UPDATED with Floor Awards data and ThunderCats colors

import React from "react";

// The full list of annual awards extracted from the PDF
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
    summary:
      "Stands unrivalled in the realm of looking effortlessly dapper; impeccable style is their middle name.",
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
    summary:
      "Embraced the snowball effect, going too heavy on the carbs and developing love handles.",
  },
  {
    title: "SPORTSMAN OF THE YEAR",
    recipient: "Justin Cowley",
    summary:
      "A human tornado on the field, a maverick of the court, a whirlwind of athleticism.",
  },
  {
    title: "STONER OF THE YEAR",
    recipient: "Eduard Albertyn",
    summary:
      "A true herbal enthusiast with an interest in all things green; a puff pioneer.",
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
      "Exceptional dedication to embracing the chaos and creating an awe-inspiring masterpiece of untidiness.",
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
    summary:
      "Always has a fascinating story or anecdote, gleefully draining collective time.",
  },
  {
    title: "HARPOONED A WHALE",
    recipient: "Justin Cowley",
    summary:
      "Successfully landed a bullseye on the biggest, most slippery target imaginable.",
  },
  {
    title: "HOE OF THE YEAR",
    recipient: "Khangelani Mjana",
    summary:
      "Always has a new partner in their room; admires their ability to juggle multiple partners.",
  },
];

const Awards = () => (
  <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-4xl">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
      Floor Awards 🏆
    </h2>

    {/* WEEKLY AWARDS SECTION */}
    <div className="mb-12 border-b border-amber-300 pb-6">
      <h3 className="text-2xl font-bold text-red-700 mb-4">
        Weekly Recognition (After Meetings)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-red-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-red-700">MVP of the Week: Name Surname</p>
          <p className="text-sm text-gray-600 mt-1">(dd/mm/yyyy)</p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-red-700">
            Nuusmaker of the Week: Name Surname
          </p>
          <p className="text-sm text-gray-600 mt-1">
            (dd/mm/yyyy)
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-red-700">Tril of the Week: Name Surname</p>
          <p className="text-sm text-gray-600 mt-1">(dd/mm/yyyy)</p>
        </div>
      </div>
      <p className="text-md font-semibold text-gray-700 mt-4 text-center">
        These are awarded live during floor meetings.
      </p>
    </div>

    {/* ANNUAL AWARDS SECTION (2025) */}
    <h3 className="text-3xl font-bold text-amber-700 border-b-2 border-amber-400 pb-2 mb-6">
      Annual Floor Awards 2025
    </h3>

    <div className="space-y-4">
      {annualFloorAwards.map((award, index) => (
        <div
          key={index}
          className="p-4 border-l-4 border-amber-500 bg-gray-50 rounded-md shadow-sm"
        >
          <p className="text-lg font-bold text-gray-900">{award.title}</p>
          <p className="text-md font-semibold text-red-700 mt-1">
            Winner(s): {award.recipient}
          </p>
          <p className="text-sm text-gray-600 italic mt-1">
            *Summary: {award.summary}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-8 text-center">
      <p className="text-md font-semibold text-gray-700">
        Awarded by Floor 1AB, its Residents of 2025, and Hagar.
      </p>
    </div>
  </div>
);

export default Awards;
