"use client"
import React from 'react'
import { Bookmark, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const McqCard = () => {
  return (
          <div className="max-w-4xl mx-auto px-3 sm:px-4">
        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full border text-sm font-semibold">
              {currentQ + 1}
            </span>
            <Bookmark size={18} className="cursor-pointer text-gray-600" />
          </div>

          {/* Question */}
          <h2 className="text-base sm:text-lg font-semibold mb-5">
            {questions[currentQ].question}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition text-left
                ${
                  answers[currentQ] === i
                    ? "border-green-600 bg-green-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full border text-sm font-medium">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm sm:text-base">{opt}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              disabled={currentQ === 0}
              onClick={() => setCurrentQ(currentQ - 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-40"
            >
              <ChevronLeft size={18} /> Previous
            </button>

            <button
              disabled={currentQ === totalQuestions - 1}
              onClick={() => setCurrentQ(currentQ + 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-40"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
  )
}

export default McqCard