"use client";
import React, { useState } from "react";

const McqCard = () => {

    /* -------------------------------------------------------
        ✅ Fake User Data
    ------------------------------------------------------- */
    const fakeUser = {
        name: "John Doe",
        subscription: "pending" // change to "active" to unlock
    };

    /* -------------------------------------------------------
        ✅ Fake Question Data
    ------------------------------------------------------- */
    const question = {
        title: "Find the next: 10, 30, 68, 130, ?, ?",
        options: ["150, 190", "222, 350", "165, 190", "225, 350", "200, 350"],
        correctIndex: 1
    };

    /* -------------------------------------------------------
        State Management
    ------------------------------------------------------- */
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    /* -------------------------------------------------------
        Option Click Handler
    ------------------------------------------------------- */
    const handleSelect = (index) => {
        if (fakeUser.subscription !== "active") return; // 🔒 block click
        if (selectedIndex !== null) return; // prevent re-click
        setSelectedIndex(index);
    };

    /* -------------------------------------------------------
        Styling Logic
    ------------------------------------------------------- */
    const getOptionStyle = (index) => {
        if (selectedIndex === null) return "bg-gray-50 hover:bg-gray-100";

        if (index === question.correctIndex) return "bg-green-100 border-green-500 text-green-700";
        if (index === selectedIndex) return "bg-red-100 border-red-500 text-red-700";

        return "bg-gray-50";
    };

    return (
        <div
            className={`mt-4 bg-white border p-6 rounded-xl shadow-sm relative 
                ${fakeUser.subscription === "pending" ? "opacity-40 blur-[1px] select-none pointer-events-none" : ""}
            `}
        >
            {/* Question Title */}
            <h3 className="font-semibold text-lg">
                1. {question.title}
            </h3>

            {/* Options */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
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
                    Correct answer: {question.options[question.correctIndex]}
                    <br /> Explanation will go here...
                </p>
            )}

            {/* -------------------------------------------------------
                🔒 Locked Overlay (Visible when subscription is pending)
            ------------------------------------------------------- */}
            {fakeUser.subscription === "pending" && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-40 text-white px-6 py-3 rounded-lg backdrop-blur">
                        🔒 Subscribe to unlock
                    </div>
                </div>
            )}
        </div>
    );
};

export default McqCard;
