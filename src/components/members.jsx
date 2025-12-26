import React from "react";
import memberData from "./data/memberData";
import leadershipData from "./data/leaderData";
import newcomerData from "./data/newcomerData";

const MemberCard = ({ member, isLeaderCard, isNewcomer }) => (
  <div
    className={`p-4 rounded-lg shadow-lg text-center ${
      isLeaderCard
        ? "bg-amber-100 border-2 border-red-500"
        : isNewcomer
        ? "bg-gray-200 border-2 border-gray-600"
        : "bg-white border border-gray-300"
    }`}
  >
    <img
      src={member.imageUrl}
      alt={member.name}
      className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mx-auto mb-3 border-2 ${
        isLeaderCard
          ? "border-red-500"
          : isNewcomer
          ? "border-gray-600"
          : "border-amber-600"
      }`}
    />
    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
    <p
      className={`text-xs font-bold uppercase ${
        isLeaderCard ? "text-red-700" : "text-amber-700"
      }`}
    >
      {member.position}
    </p>
    <p className="text-xs text-gray-500">{member.study}</p>
  </div>
);

const Members = () => {
  const leaders = leadershipData();
  const generalMembers = memberData();
  const newcomers = newcomerData();

  return (
    <div className="bg-white p-4 sm:p-10 rounded-xl shadow-2xl w-full max-w-6xl">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Floor Leadership & Members
      </h2>

      <h3 className="text-xl font-bold text-red-700 border-b-2 border-red-300 pb-2 mb-4">
        Leadership (WarPride)
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {leaders.map((m) => (
          <MemberCard key={m.id} member={m} isLeaderCard={true} />
        ))}
      </div>

      <h3 className="text-xl font-bold text-amber-700 border-b-2 border-amber-300 pb-2 mb-4">
        Shadow Claws
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {generalMembers.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>

      {newcomers.length > 0 && (
        <>
          <h3 className="text-xl font-bold text-gray-700 border-b-2 border-gray-400 pb-2 mb-4">
            Newcomers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newcomers.map((m) => (
              <MemberCard key={m.id} member={m} isNewcomer={true} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Members;
