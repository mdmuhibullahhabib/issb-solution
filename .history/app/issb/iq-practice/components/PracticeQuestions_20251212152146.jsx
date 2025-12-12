"use client";

import { useState } from "react";

export default function PracticeQuestions() {
    const [showExplanation, setShowExplanation] = useState(false);

    /* -------------------------------------------------------
    Verbal & Non-Verbal category data
    ------------------------------------------------------- */
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

    /* -------------------------------------------------------
      Add states for examType & selectedCategory
    ------------------------------------------------------- */
    const [examType, setExamType] = useState("Verbal");
    const [category, setCategory] = useState("");

    /* -------------------------------------------------------
     Dynamically load categories by exam type
    ------------------------------------------------------- */
    const currentCategories =
        examType === "Verbal" ? verbalOptions : nonVerbalOptions;

    return (
        <div className="flex-1 p-4 md:p-10">

            {/* Header */}
            <h1 className="text-3xl font-bold text-gray-800">Practice Questions</h1>
            <p className="text-gray-600 mt-1 text-sm">
                We sell dreams, emotions — not just courses!
            </p>

            {/* Filters */}
            <div className="mt-6 bg-white p-4 rounded-xl shadow-sm border flex flex-col md:flex-row gap-4">
                
                {/* -------------------------------------------------------
                 Exam Type Dropdown (Controls Category)
                --------------------------------------------------------- */}
                <div>
                    <label className="text-gray-600 text-sm">Exam Type</label>
                    <select
                        value={examType}
                        onChange={(e) => {
                            setExamType(e.target.value);
                            setCategory(""); // RESET category on type switch
                        }}
                        className="mt-1 border px-3 py-2 rounded-lg w-full"
                    >
                        <option value="Verbal">Verbal</option>
                        <option value="Non-Verbal">Non-Verbal</option>
                    </select>
                </div>

                {/* -------------------------------------------------------
                 Dynamic Category Dropdown
                --------------------------------------------------------- */}
                <div>
                    <label className="text-gray-600 text-sm">Question Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 border px-3 py-2 rounded-lg w-full"
                    >
                        <option value="">Select Category</option>

                        {currentCategories.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
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
            <p className="mt-5 text-gray-600 text-sm">৯০ টি {examType}-{category || "Category"} পাওয়া গিয়েছে।</p>

            {/* Question Card */}
            <Mcq
        </div>
    );
}
