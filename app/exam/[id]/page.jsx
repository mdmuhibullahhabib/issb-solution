"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import McqCard from "./components/McqCard";
import SubmitModal from "./components/SubmitModal";

/* Fake Questions */
const questions = [
  {
    question: "Find the odd one out",
    options: ["VUTS", "NUTS", "PONM", "JIHG", "None of these"],
  },
  {
    question: "Choose the correct series",
    options: ["2, 6, 12", "3, 9, 27", "5, 10, 20", "7, 14, 28"],
  },
  {
    question: "Which word is different?",
    options: ["Dog", "Cat", "Tiger", "Car"],
  },
];

const ExamPage = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const handleSelect = (idx) => {
    setAnswers({ ...answers, [currentQ]: idx });
  };

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold">Verbal Model Test 01</h1>
        <p className="text-gray-600">
          Total Questions: {questions.length} | Duration: 35 min
        </p>
      </div>

      {/* Question Card */}
      <McqCard
        question={questions[currentQ].question}
        options={questions[currentQ].options}
        currentQ={currentQ}
        totalQuestions={questions.length}
        selectedAnswer={answers[currentQ]}
        onSelect={handleSelect}
        onPrev={() => setCurrentQ((q) => q - 1)}
        onNext={() => setCurrentQ((q) => q + 1)}
      />

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t px-4 py-3 flex justify-between">
        <div className="flex items-center gap-2 font-medium">
          <Clock size={18} /> 31:57
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="bg-green-900 text-white px-6 py-2 rounded-full"
        >
          Submit Exam
        </button>
      </div>

      {/* Submit Modal */}
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
