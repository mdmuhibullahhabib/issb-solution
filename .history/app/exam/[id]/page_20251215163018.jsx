"use client";
import React, { useState } from "react";
import { Bookmark, Clock, ChevronLeft, ChevronRight, X } from "lucide-react";

/* -------------------------------------------------
 Fake Questions Data
------------------------------------------------- */
const questions = [
  {
    id: 1,
    question: "Find the odd one out",
    options: ["VUTS", "NUTS", "PONM", "JIHG", "None of these"],
  },
  {
    id: 2,
    question: "Choose the correct series",
    options: ["2, 6, 12", "3, 9, 27", "5, 10, 20", "7, 14, 28"],
  },
  {
    id: 3,
    question: "Which word is different?",
    options: ["Dog", "Cat", "Tiger", "Car"],
  },
];

/* -------------------------------------------------
 Submit Modal Component
------------------------------------------------- */
const SubmitModal = ({ open, onClose, onSubmit }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Submit Exam?</h3>
          <button onClick={onClose}>
            <X className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <p className="text-gray-600 mb-6">
          Are you sure you want to submit the exam? You won’t be able to change
          your answers.
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            Yes, Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const ExamPage = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false); // ✅ FIX

  const totalQuestions = questions.length;

  const handleSelect = (index) => {
    setAnswers({ ...answers, [currentQ]: index });
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* ================= HEADER ================= */}
      <div className="text-center py-6 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Verbal Model Test 01
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Total Questions: {totalQuestions} | Marks: {totalQuestions}
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Duration - 35 min
        </p>
      </div>

      {/* ================= QUESTION CARD ================= */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4">
        <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full border text-sm font-semibold">
              {currentQ + 1}
            </span>
            <Bookmark size={18} className="cursor-pointer text-gray-600" />
          </div>

          {/* Question */}
          <h2 className="text-base sm:text-lg font-semibold mb-5">
            {questions[currentQ].question}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition text-left
                ${
                  answers[currentQ] === i
                    ? "border-green-600 bg-green-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <span className="w-7 h-7 flex items-center justify-center rounded-full border text-sm font-medium">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm sm:text-base">{opt}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              disabled={currentQ === 0}
              onClick={() => setCurrentQ(currentQ - 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-40"
            >
              <ChevronLeft size={18} /> Previous
            </button>

            <button
              disabled={currentQ === totalQuestions - 1}
              onClick={() => setCurrentQ(currentQ + 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-40"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= STICKY FOOTER ================= */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
          <Clock size={18} />
          <span>31:57</span>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)} // ✅ OPEN MODAL
          className="bg-green-900 text-white px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base hover:bg-green-800 transition"
        >
          Submit Exam
        </button>
      </div>

      {/* ================= SUBMIT MODAL ================= */}
      <SubmitModal
        open={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onSubmit={() => {
          setShowSubmitModal(false);
          alert("Exam Submitted!");
        }}
      />
    </div>
  );
};

export default ExamPage;