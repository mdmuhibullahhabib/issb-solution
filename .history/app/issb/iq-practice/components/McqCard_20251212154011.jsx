"use client";
import React, { useState } from "react";

const McqCard = () => {
    /* Fake User */
    const fakeUser = {
        name: "John Doe",
        subscription: "pending", // change to "active" to unlock question view
    };

    const question = {
        title: "Find the next: 10, 30, 68, 130, ?, ?",
        options: ["150, 190", "222, 350", "165, 190", "225, 350", "200, 350"],
        correctIndex: 1,
    };

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    /* Click Logic */
    const handleSelect = (index) => {
        if (selectedIndex !== null) return;
        setSelectedIndex(index);
    };

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

            {/* -----------------------------
                QUESTION TITLE (ONLY BLUR THIS)
               ----------------------------- */}
            <h3
                className={`font-semibold text-lg ${
                    fakeUser.subscription === "pending"
                        ? "blur-sm opacity-40 select-none"
                        : ""
                }`}
            >
                1. {question.title}
            </h3>

            {/* -----------------------------
                OPTIONS (SHOULD NOT BLUR)
               ----------------------------- */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {question.options.map((opt, i) => (
                    <div
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={`px-4 py-3 rounded-lg border cursor-pointer transition-all ${getOptionStyle(
                            i
                        )}`}
                    >
                        {String.fromCharCode(65 + i)}. {opt}
                    </div>
                ))}
            </div>

            {/* Explanation Button */}
            <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="mt-5 px-5 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50"
            >
                Show Explanation
            </button>

            {showExplanation && (
                <p className="mt-3 text-gray-700">Explanation will go here...</p>
            )}

            {/* --------------------------------
                LOCK LABEL (Only shown if pending)
            -------------------------------- */}
            {fakeUser.subscription === "pending" && (
                <div className="absolute top-3 right-3 text-xs bg-red-600 text-white px-3 py-1 rounded-full">
                    🔒 Locked
                </div>
            )}
        </div>
    );
};

export default McqCard;
