"use client";

import { Bookmark } from "lucide-react";

const McqCard = ({
  index,
  question,
  options,
  selectedAnswer,
  onSelect,
}) => {
  return (
    <div className="border rounded-2xl p-6 shadow-sm mb-6">
      
      {/* Question */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="font-semibold text-lg">
          Q{index + 1}. {question}
        </h2>
        <Bookmark className="text-gray-400 cursor-pointer" />
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full  text-left px-4 py-3 border rounded-lg transition
              ${
                selectedAnswer === idx
                  ? "bg-green-100 border-green-600"
                  : "hover:bg-gray-50"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default McqCard;
