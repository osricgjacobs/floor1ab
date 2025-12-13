import React from "react";
import memberData from "./data/memberData";
import leadershipData from "./data/leaderData";
import newcomerData from "./data/newcomerData";

// --- Component structure for a single card (reused for all lists) ---
const MemberCard = ({ member, isLeaderCard, isNewcomer }) => (
  <div
    key={member.id}
    className={`p-4 rounded-lg shadow-lg transition duration-300 text-center 
                    ${
                      isLeaderCard
                        ? // Leader Highlight: Yellow/Gold background & Red border
                          "bg-amber-100 border-2 border-red-500 hover:bg-amber-200"
                        : isNewcomer
                        ? // Newcomer Highlight: Light Gray/Silver background & Gold border
                          "bg-gray-200 border-2 border-amber-500 hover:bg-gray-300"
                        : // Standard member: White background & Dark Grey border
                          "bg-white border border-gray-400 hover:shadow-md"
                    }`}
  >
    <img
      src={member.imageUrl}
      alt={member.name}
      // Border: Use Red for leaders, Gold/Amber for members, Dark Grey for newcomers
      className={`w-24 h-24 object-cover rounded-full mx-auto mb-3 border-2 
                       ${
                         isLeaderCard
                           ? "border-red-500"
                           : isNewcomer
                           ? "border-gray-600"
                           : "border-amber-600"
                       }`}
    />
    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
    {/* Position text: Red for leaders, Gold/Amber for general members, Red for newcomers */}
    <p
      className={`text-sm font-bold mt-1 
                       ${
                         isLeaderCard
                           ? "text-red-700"
                           : isNewcomer
                           ? "text-red-500"
                           : "text-amber-700"
                       }`}
    >
      {member.position}
    </p>
    <p className="text-sm text-gray-500">{member.study}</p>

    {/* Display the 'roles' property specifically for leaders if it exists */}
    {member.roles && (
      <p className="text-xs text-gray-600 mt-1 italic">Role: {member.roles}</p>
    )}

    {/* Optional: Social Links for leaders, if present */}
    {isLeaderCard && (member.linkedin || member.github) && (
      <div className="flex justify-center space-x-3 mt-3">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-700"
          >
            LinkedIn
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            GitHub
          </a>
        )}
      </div>
    )}
  </div>
);

const Members = () => {
  // 1. Fetch Data
  const leaders = leadershipData();
  const generalMembers = memberData();

  // 2. Placeholder for future newcomer data array
  // You can uncomment the import and replace [] with newcomerData() once the file is ready.
  const newcomers = newcomerData();

  // Note: The previous logic that sliced general members is removed,
  // assuming generalMembers now holds the *true* list of non-leader, non-newcomer members.
  // If you need the temporary slicing logic back, let me know!

  return (
    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-6xl">
      {/* Header: Dark Grey/Black text */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Floor Leadership & Members 👥
      </h2>

      {/* 👑 LEADERSHIP SECTION */}
      <h3 className="text-2xl font-bold text-red-700 border-b-2 border-red-300 pb-2 mb-4">
        The Floor Leadership (WarPride)
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {leaders.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            isLeaderCard={true}
            isNewcomer={false}
          />
        ))}
      </div>

      {/* 🧑‍🎓 GENERAL MEMBERS SECTION */}
      <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-300 pb-2 mb-4">
        Senior Floor Members (Shadow Claws)
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {generalMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            isLeaderCard={false}
            isNewcomer={false}
          />
        ))}
      </div>

      {/* 🐣 NEWCOMERS SECTION */}
      {/* This section will now conditionally render based on the 'newcomers' array length */}
      {newcomers.length > 0 && (
        <>
          <h3 className="text-2xl font-bold text-gray-700 border-b-2 border-gray-400 pb-2 mb-4">
            Newcomers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {newcomers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                isLeaderCard={false}
                isNewcomer={true}
              />
            ))}
          </div>
        </>
      )}

      {newcomers.length === 0 && (
        <p className="text-center text-gray-500 italic mt-8">
          Newcomer data will load here once the file is added!
        </p>
      )}
    </div>
  );
};

export default Members;
