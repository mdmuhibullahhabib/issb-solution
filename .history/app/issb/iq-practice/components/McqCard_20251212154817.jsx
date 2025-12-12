"use client";
import { useState } from "react";
import { Lock, Play } from "lucide-react";

export default function IQTestPage() {
  // Fake user subscription
  // ⭐ CHANGED: Added fake user subscription
  const user = {
    subscription: "pending", // active | pending | none
  };

  const verbalOptions = [
    "Direction Sense",
    "Proverb & Idiom",
    "Calendar & Time Problem",
    "Blood Relation",
    "Age Problem",
  ];

  const nonVerbalOptions = [
    "Raven IQ",
    "Mixed Non Verbal",
    "Completion of Series",
    "Analogy",
    "Classification",
  ];

  const [category, setCategory] = useState("verbal");
  const [showBuyModal, setShowBuyModal] = useState(false);

  const isLocked = user.subscription !== "active";

  // Questions
  const questions = [
    {
      id: 1,
      question: "What is the next number in the sequence 2, 4, 8, 16?",
      options: ["20", "32", "24", "18"],
    },
    {
      id: 2,
      question: "If A is the brother of B, and B is the sister of C, what is A to C?",
      options: ["Brother", "Sister", "Cousin", "Uncle"],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IQ Model Test</h1>

      {/* Category Selector */}
      {/* ⭐ CHANGED: Only show verbal options when verbal selected */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setCategory("verbal")}
          className={`px-4 py-2 rounded ${category === "verbal" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Verbal
        </button>

        {/* ⭐ CHANGED: Non-verbal buttons */}
        <button
          onClick={() => setCategory("non-verbal")}
          className={`px-4 py-2 rounded ${category === "non-verbal" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Non-Verbal
        </button>
      </div>

      {/* Options List */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {(category === "verbal" ? verbalOptions : nonVerbalOptions).map((item) => (
          <div
            key={item}
            className="p-3 bg-white border rounded shadow-sm text-sm font-medium"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Model Test List */}
      {questions.map((q, index) => (
        <div
          key={q.id}
          className="border p-4 my-3 rounded-lg bg-white shadow-sm"
        >
          {/* ⭐ CHANGED: Blur only the QUESTION, NOT the options */}
          <p
            className={`text-lg font-semibold mb-3 cursor-pointer ${
              isLocked ? "blur-[2px] select-none" : ""
            }`}
            // ⭐ CHANGED: Clicking the blurred question → open buy modal
            onClick={() => {
              if (isLocked) setShowBuyModal(true);
            }}
          >
            {index + 1}. {q.question}
          </p>

          {/* Options */}
          <div className="grid grid-cols-2 gap-2">
            {q.options.map((opt) => (
              <div
                key={opt}
                className="p-2 border rounded cursor-pointer hover:bg-gray-100"
                // ⭐ CHANGED: If subscription pending → clicking option opens modal
                onClick={() => {
                  if (user.subscription !== "active") {
                    setShowBuyModal(true);
                  }
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ⭐ CHANGED: Subscription modal */}
      {showBuyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white w-80 rounded-lg p-5 shadow-lg">
            <h2 className="text-xl font-bold mb-3">Buy Subscription</h2>
            <p className="text-gray-600 mb-5">
              Unlock all model tests and premium IQ features.
            </p>

            <button
              className="w-full bg-blue-600 text-white py-2 rounded mb-2"
              onClick={() => setShowBuyModal(false)}
            >
              Buy Now
            </button>

            <button
              className="w-full bg-gray-300 py-2 rounded"
              onClick={() => setShowBuyModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
