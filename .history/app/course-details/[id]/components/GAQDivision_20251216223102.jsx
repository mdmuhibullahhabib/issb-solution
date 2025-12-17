"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const allLectures = [
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
  "Deputy President / DP Viva",
  "Planning Exercise",
  "GTO Viva",
  "Command Task",
  "Mutual Assessment",
  "Medical Test",
];

export default function LectureDetailsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleLectures = showAll ? allLectures : allLectures.slice(0, 4);

  return (
    <div className="max-w-xl bg-white border rounded-lg p-4">
      {/* Title */}
      <h2 className="font-bold text-gray-800 mb-3">
        লেকচার ডিটেইলস
      </h2>

      {/* Accordion Items */}
      <div className="space-y-2">
        {visibleLectures.map((item, index) => (
          <div
            key={index}
            className="border rounded-md"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700"
            >
              {item}
              <ChevronDown
                className={`w-4 h-4 transition ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-3 pb-3 text-xs text-gray-500">
                এই লেকচার সম্পর্কিত বিস্তারিত এখানে দেখানো হবে।
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show More */}
      {!showAll && (
        <div className="text-center mt-3">
          <button
            onClick={() => setShowAll(true)}
            className="text-xs px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Show More ({allLectures.length - 4})
          </button>
        </div>
      )}
    </div>
  );
}
