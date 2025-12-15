"use client";

import { useState } from "react";
import {
  verbalCategories,
  nonVerbalCategories,
} from "../data/categories";

export default function AsideMenu({
  examType,
  setExamType,
  category,
  setCategory,
}) {
  // 🔹 Dropdown toggle state
    const [showVerbal, setShowVerbal] = useState(true);

  const [showNonVerbal, setShowNonVerbal] = useState(true);

  return (
    <aside className="w-64 bg-white border-r p-4 sticky top-0 h-screen overflow-y-auto">
      
      {/* Logo */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-green-900">
          Mission ISSB
        </h2>
      </div>

      {/* ---------------- Verbal ---------------- */}
      <div className="space-y-1 mb-6">
        {verbalCategories.map((item) => (
          <button
            key={item}
            onClick={() => {
              setExamType("Verbal");
              setCategory(item);
            }}
            className={`block w-full text-left px-4 py-2 rounded-lg transition
              ${
                examType === "Verbal" && category === item
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* ---------------- Non-Verbal Dropdown Header ---------------- */}
      <button
        onClick={() => setShowNonVerbal(!showNonVerbal)}
        className="w-full flex justify-between items-center px-4 py-2 mb-2 text-sm font-bold uppercase text-gray-900 hover:bg-gray-100 rounded-lg"
      >
        Non-Verbal
        <span className="text-xs">
          {showNonVerbal ? "▲" : "▼"}
        </span>
      </button>

      {/* ---------------- Non-Verbal Dropdown Content ---------------- */}
      {showNonVerbal && (
        <div className="space-y-1">
          {nonVerbalCategories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setExamType("Non-Verbal");
                setCategory(item);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition
                ${
                  examType === "Non-Verbal" && category === item
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
