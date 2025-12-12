"use client";
import React, { useState } from "react";

const McqCard = () => {
    /* -------------------------------------------
        ✅ Fake User Data (CHANGE #1)
    ------------------------------------------- */
    const fakeUser = {
        name: "John Doe",
        subscription: "pending" // change to "active" to unlock
    };

    /* -------------------------------------------
        Fake Question Data
    ------------------------------------------- */
    const question = {
        title: "Find the next: 10, 30, 68, 130, ?, ?",
        options: ["150, 190", "222, 350", "165, 190", "225, 350", "200, 350"],
        correctIndex: 1
    };

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    /* -------------------------------------------
        Handle Option Click (CHANGE #2: block only Q&A)
    ------------------------------------------- */
    const handleSelect = (index) => {
        if (fakeUser.subscription !== "active") return; // block selection
        if (selectedIndex !== null) return;
        setSelectedIndex(index);
    };

    /* -------------------------------------------
        Option Style Logic
    ------------------------------------------- */
    const getOptionStyle = (index) => {
        if (selectedIndex === null) return "bg-gray-50 hover:bg-gray-100";

        if (index === question.correctIndex)
            return "bg-green-100 border-green-500 text-green-700";

        if (index === selectedIndex)
            return "bg-red-100 border-red-500 text-red-700";

        return "bg-gray-50";
    };

    return (
        <div className="mt-4 bg-white border p-6 rounded-xl shadow-sm relative">

            {/* -------------------------------------------
                HEADER — always visible, not blurred
            ------------------------------------------- */}
            <h3 className="font-semibold text-lg">
                1. {question.title}
            </h3>

            {/* -------------------------------------------
                WRAPPER for Q&A content 
                (CHANGE #3: blur ONLY THIS AREA)
            ------------------------------------------- */}
            <div
                className={`mt-4 ${
                    fakeUser.subscription === "pending"
                        ? "opacity-40 blur-[2px] select-none pointer-events-none"
                        : ""
                }`}
            >
                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {question.options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => handleSelect(i)}
                            className={`px-4 py-3 rounded-lg border cursor-pointer transition-all ${getOptionStyle(i)}`}
                        >
                            {String.fromCharCode(65 + i)}. {opt}
                        </div>
                    ))}
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

            {/* -------------------------------------------
                LOCKED NOTICE (CHANGE #4)
            ------------------------------------------- */}
            {fakeUser.subscription === "pending" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black bg-opacity-40 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
                        🔒 Subscribe to Unlock
                    </div>
                </div>
            )}
        </div>
    );
};

export default McqCard;
