"use client";

import McqCard from "./McqCard";
import {
  verbalCategories,
  nonVerbalCategories,
} from "../data/categories";

export default function PracticeQuestions({
  examType,
  setExamType,
  category,
  setCategory,
}) {
  const currentCategories =
    examType === "Verbal" ? verbalCategories : nonVerbalCategories;

  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-bold">Practice Questions</h1>

      {/* Filters */}
      <div className="mt-6 bg-white p-4 rounded-xl border flex gap-4">
        {/* Exam Type */}
        <div>
          <label className="text-lg mr-2">Exam Type</label>
          <select
            value={examType}
            onChange={(e) => {
              setExamType(e.target.value);
              setCategory("");
            }}
            className="mt-1 border px-3 py-2 rounded-lg"
          >
            <option value="Verbal">Verbal</option>
            <option value="Non-Verbal">Non-Verbal</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="text-lg mr-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 border px-3 py-2 rounded-lg"
          >
            <option value="">Select Category</option>
            {currentCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-5 text-sm text-gray-600">
        ৯০ টি {examType} – {category || "Category"} পাওয়া গিয়েছে
      </p>

      <McqCard />
    </div>
  );
}
