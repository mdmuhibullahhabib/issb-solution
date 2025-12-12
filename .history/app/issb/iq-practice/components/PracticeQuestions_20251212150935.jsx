"use client";
import React, { useState } from "react";

export default function DynamicCategorySelect() {
  /* ----------------------------------------------
    ✅ CHANGE #1 — Verbal & Non-Verbal Data Arrays
  ---------------------------------------------- */
  const verbalOptions = [
    "Number Series",
    "Odd One Out",
    "Analogy",
    "Jumbled Word",
    "Coding-Decoding",
    "Logical Puzzle",
    "Alphanumeric Series",
    "True/False",
    "Alphabetical Order",
    "Alphabet Series",
    "Mathematical Problems",
    "Direction Sense",
    "Proverb & Idiom",
    "Calendar & Time Problem",
    "Blood Relation",
    "Age Problem",
    "Riddle",
    "General Knowledge",
    "Synonym/Antonym",
    "One-Word Substitution",
    "Ordering & Ranking",
    "Others",
  ];

  const nonVerbalOptions = [
    "Non-Verbal",
    "Raven IQ",
    "Mixed Non Verbal",
    "Completion of Series",
    "Analogy",
    "Classification",
    "Completion of Figures",
    "Paper Folding",
    "Paper Cutting",
    "Mirror Image",
    "Formation of Figures",
    "Embedded Figures",
    "Figure Matrix",
    "Water Image",
  ];

  /* ----------------------------------------------
    ✅ CHANGE #2 — State for Selected Category & Option
  ---------------------------------------------- */
  const [category, setCategory] = useState("");
  const [subOption, setSubOption] = useState("");

  /* ----------------------------------------------
    ✅ CHANGE #3 — Dynamic Option List Based on Category
  ---------------------------------------------- */
  const currentOptions =
    category === "verbal"
      ? verbalOptions
      : category === "non-verbal"
      ? nonVerbalOptions
      : [];

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Select Category & Topic</h2>

      {/* ----------------------------------------------
          ✅ CHANGE #4 — Category Dropdown
      ---------------------------------------------- */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Category</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubOption(""); // Reset sub-option when category changes
          }}
          className="w-full p-3 rounded-lg border shadow"
        >
          <option value="">-- Select Category --</option>
          <option value="verbal">Verbal</option>
          <option value="non-verbal">Non-Verbal</option>
        </select>
      </div>

      {/* ----------------------------------------------
          ✅ CHANGE #5 — Sub Options Dropdown (Dynamic)
      ---------------------------------------------- */}
      <div>
        <label className="block mb-1 font-semibold">Topic</label>
        <select
          value={subOption}
          onChange={(e) => setSubOption(e.target.value)}
          className="w-full p-3 rounded-lg border shadow"
        >
          <option value="">-- Select Topic --</option>

          {currentOptions.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
