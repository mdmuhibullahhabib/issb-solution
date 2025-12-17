"use client";

const gaqTopics = [
  "Before ISSB",
  "Intelligence Test",
  "PPDT",
  "Essay Writing",
  "Incomplete Story",
  "Picture Story",
  "Incomplete Sentences",
  "Word Association Test",
  "Self Criticism",
  "Self Assessment",
  "Group Discussion",
  "Progressive Group Task",
  "Half Group Task",
  "Extempore Speech",
  "Physical Ability Test",
  "Bio Data",
  "Deputy President (DP) Viva",
  "Planning Exercise",
  "Group Testing Officer (GTO) Viva",
  "Command Task",
  "Mutual Assessment",
  "Medical Test",
  "All you need to know about End!",
];

export default function GAQDivision() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          লেকচার ডিটেইলস
        </h2>
      </div>

      {/* GAQ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {gaqTopics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-50 hover:bg-green-50 border border-gray-200 rounded-lg px-4 py-3 transition"
          >
            <span className="text-green-600 font-semibold">
              {index + 1}.
            </span>
            <p className="text-gray-700 text-sm md:text-base">
              {topic}
            </p>
          </div>
        ))}
      </div>

      {/* Show Less */}
      <div className="text-center mt-6">
        <button className="text-green-600 font-medium hover:underline">
          Show Less
        </button>
      </div>
    </div>
  );
}
