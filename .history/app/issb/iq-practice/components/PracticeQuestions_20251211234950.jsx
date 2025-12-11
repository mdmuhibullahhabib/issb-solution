"use client";

import { useState } from "react";

export default function PracticeQuestions() {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="flex-1 p-4 md:p-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Practice Questions</h1>
      <p className="text-gray-600 mt-1 text-sm">
        We sell dreams, emotions — not just courses!
      </p>

      {/* Filters */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow-sm border flex flex-col md:flex-row gap-4">
        {/* Exam Type */}
        <div>
          <label className="text-gray-600 text-sm">Exam Type</label>
          <select className="mt-1 border px-3 py-2 rounded-lg w-full">
            <option>Verbal</option>
            <option>Non-Verbal</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="text-gray-600 text-sm">Question Category</label>
          <select className="mt-1 border px-3 py-2 rounded-lg w-full">
<option>Number Series</option>
<option>Odd One Out</option>
<option>Analogy</option>
<option>Jumbled Word</option>
<option>Coding-Decoding</option>
<option>Logical Puzzle</option>
<option>Alphanumeric Series</option>
<option>True/False</option>
<option>Alphabetical Order</option>
<option>Alphabet Series</option>
<option>Mathematical Problems</option>
<option>Direction Sense</option>
<option>Proverb & Idiom</option>
<option>Calendar & Time Problem</option>
<option>Blood Relation</option>
<option>Age Problem</option>
<option>Riddle</option>
<option>General Knowledge</option>
<option>Synonym/Antonym</option>
<option>One-Word Substitution</option>
<option>Ordering & Ranking</option>
<option>Others</option>
<option>Non-Verbal</option>
<option>Raven IQ</option>
<option>Mixed Non Verbal</option>
<option>Completion of Series</option>
<option>Analogy</option>
<option>Classification</option>
<option>Completion of Figures</option>
<option>Paper Folding</option>
<option>Paper Cutting</option>
<option>Mirror Image</option>
<option>Formation of Figures</option>
<option>Embedded Figures</option>
<option>Figure Matrix</option>
<option>Water Image</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="flex items-end gap-2">
          <button className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-medium">
            All
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100">Easy</button>
          <button className="px-4 py-2 rounded-lg bg-gray-100">Medium</button>
          <button className="px-4 py-2 rounded-lg bg-gray-100">Hard</button>
        </div>
      </div>

      {/* Count */}
      <p className="mt-5 text-gray-600 text-sm">৯০ টি Verbal-Number Series পাওয়া গিয়েছে।</p>

      {/* Question Card */}
      <div className="mt-4 bg-white border p-6 rounded-xl shadow-sm">
        <h3 className="font-semibold text-lg">
          1. Find the next: 10, 30, 68, 130, ?, ?
        </h3>

        {/* Options */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {["150, 190", "222, 350", "165, 190", "225, 350", "200, 350"].map(
            (opt, i) => (
              <div
                key={i}
                className={`px-4 py-3 rounded-lg border bg-gray-50 hover:bg-gray-100 cursor-pointer`}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </div>
            )
          )}
        </div>

        {/* Explanation */}
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="mt-5 px-5 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50"
        >
          Show Explanation
        </button>

        {showExplanation && (
          <p className="mt-3 text-gray-700">
            Explanation will go here...
          </p>
        )}
      </div>
    </div>
  );
}
