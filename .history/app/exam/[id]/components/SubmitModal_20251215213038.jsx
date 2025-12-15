"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SubmitModal = ({ isOpen, onClose, onSubmit, answers, timeLeft }) => {
    if (!isOpen) return null;

    const TOTAL_QUESTIONS = 100;

    // Question data: check each question if answered
    const QUESTIONS = Array.from({ length: TOTAL_QUESTIONS }, (_, i) => {
        const id = i + 1;
        const status = answers[id - 1] !== undefined ? "attempted" : "remaining";
        return { id, status };
    });

    const attemptedCount = QUESTIONS.filter((q) => q.status === "attempted").length;
    const remainingCount = TOTAL_QUESTIONS - attemptedCount;

    // Map status to Tailwind classes
    const getQuestionClass = (status) => {
        switch (status) {
            case "attempted":
                return "bg-[#146C43] text-white";
            case "remaining":
            default:
                return "bg-white text-gray-700 border border-gray-300";
        }
    };

    // Format timer
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-start pt-16 justify-center bg-white/30 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-medium text-gray-800">Exam Summary</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1">
                        <AiOutlineClose size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-5 flex space-x-8">
                    {/* Stats */}
                    <div className="mb-6 space-y-4 border-r border-gray-300 pr-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Attempted</span>
                            <span className="font-semibold text-lg text-gray-900">{attemptedCount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Remaining</span>
                            <span className="font-semibold text-lg text-gray-900">{remainingCount}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                            <span className="text-lg font-medium text-gray-700">Time Left</span>
                            <span className="font-bold text-2xl text-[#146C43]">{formatTime(timeLeft)}</span>
                        </div>
                    </div>

                    {/* Question Grid */}
                    <div className="grid grid-cols-10 p-4 gap-2 overflow-y-auto max-h-[60vh]">
                        {QUESTIONS.map((q) => (
                            <div
                                key={q.id}
                                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${getQuestionClass(q.status)}`}
                            >
                                {q.id}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 pt-0">
                    <button
                        onClick={onSubmit}
                        className="w-full py-3 bg-[#D93630] hover:bg-red-700 text-white font-medium rounded-md shadow-md transition-colors"
                    >
                        End Exam & See Result
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubmitModal;
