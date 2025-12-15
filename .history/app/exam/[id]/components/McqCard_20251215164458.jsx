"use client";

import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";

const McqCard = ({
  question,
  options,
  currentQ,
  totalQuestions,
  selectedAnswer,
  onSelect,
  onPrev,
  onNext,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="border rounded-2xl p-6 shadow-sm">
        
        {/* Question Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">
            Q{currentQ + 1}. {question}
          </h2>
          <Bookmark className="text-gray-400 cursor-pointer" />
        </div>

        {/* Options */}
        <div className="space-y-3">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              className={`w-full text-left px-4 py-3 border rounded-lg transition
                ${
                  selectedAnswer === idx
                    ? "bg-green-100 border-green-500"
                    : "hover:bg-gray-50"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrev}
            disabled={currentQ === 0}
            className="flex items-center gap-1 px-4 py-2 border rounded-lg disabled:opacity-40"
          >
            <ChevronLeft size={18} /> Prev
          </button>

          <button
            onClick={onNext}
            disabled={currentQ === totalQuestions - 1}
            className="flex items-center gap-1 px-4 py-2 border rounded-lg disabled:opacity-40"
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default McqCard;
