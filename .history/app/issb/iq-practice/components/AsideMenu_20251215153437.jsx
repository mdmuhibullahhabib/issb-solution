"use client";

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
  return (
    <aside className="w-64 bg-white border-r p-4 sticky top-0 h-screen">
      {/* Logo */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-green-900">Mission ISSB</h2>
      </div>

      {/* Verbal */}
      <div className="space-y-1 mb-6">
        {verbalCategories.map((item) => (
          <button
            key={item}
            onClick={() => {
              setExamType("Verbal");
              setCategory(item);
            }}
            className={`block w-full text-left px-4 py-2 rounded-lg transition
              ${category === item
                ? "bg-green-100 text-green-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Non-Verbal Heading */}
      <h3 className="px-4 mb-2 text-sm font-bold uppercase">
        Non-Verbal
      </h3>

      {/* Non-Verbal */}
      <div className="space-y-1">
        {nonVerbalCategories.map((item) => (
          <button
            key={item}
            onClick={() => {
              setExamType("Non-Verbal");
              setCategory(item);
            }}
            className={`block w-full text-left px-4 py-2 rounded-lg transition
              ${category === item
                ? "bg-green-100 text-green-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}
