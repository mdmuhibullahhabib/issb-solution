"use client";

import React, { useState } from "react";
import useSubscriptions from "@/hooks/useSubscriptions";
import SubscriptionModal from "./SubscriptionModal";

const McqCard = () => {
  const { subscriptions, isLoading } = useSubscriptions();
  const activeSubscription = subscriptions?.find((sub) => sub.status === "active");
  const isSubscribed = !!activeSubscription;

  const [answers, setAnswers] = useState({});
  const [openExplanation, setOpenExplanation] = useState({});
  const [showModal, setShowModal] = useState(false);

  const questions = [
    {
      title: "Find the next: 10, 30, 68, 130, ?, ?",
      options: ["150, 190", "222, 350", "165, 190", "225, 350"],
      correctIndex: 1,
      explanation: "এই সিরিজে পার্থক্য বৃদ্ধি পাচ্ছে: +20, +38, +62 → পরেরটি +92।",
    },
    {
      title: "Find the odd one out",
      options: ["VUTS", "NUTS", "PONM", "LKJI"],
      correctIndex: 1,
      explanation: "NUTS শব্দটি বাকি গুলোর মতো reverse alphabetical order এ নেই।",
    },
    {
      title: "If A = 1, B = 2 ... Z = 26, what is the value of CAT?",
      options: ["24", "26", "27", "29"],
      correctIndex: 0,
      explanation: "C = 3, A = 1, T = 20 → মোট = 24",
    },
    {
      title: "Find the missing number: 5, 10, 20, 40, ?",
      options: ["45", "60", "80", "100"],
      correctIndex: 2,
      explanation: "প্রতিটি সংখ্যাকে 2 দিয়ে গুণ করা হয়েছে।",
    },
  ];

  const handleSelect = (qIndex, optIndex) => {
    if (!isSubscribed) {
      setShowModal(true);
      return;
    }
    if (answers[qIndex] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const toggleExplanation = (qIndex) => {
    if (!isSubscribed) {
      setShowModal(true);
      return;
    }
    setOpenExplanation((prev) => ({ ...prev, [qIndex]: !prev[qIndex] }));
  };

  const getOptionStyle = (qIndex, optIndex, correctIndex) => {
    if (answers[qIndex] === undefined) return "bg-gray-50 hover:bg-gray-100";
    if (optIndex === correctIndex) return "bg-green-100 border-green-500 text-green-700";
    if (optIndex === answers[qIndex]) return "bg-red-100 border-red-500 text-red-700";
    return "bg-gray-50";
  };

  if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <>
      <div className="space-y-6">
        {questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="bg-white border p-6 rounded-xl shadow-sm relative"
          >
            <h3 className={`font-semibold text-lg ${!isSubscribed ? "blur-[2px] opacity-60 select-none" : ""}`}>
              {qIndex + 1}. {q.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map((opt, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(qIndex, i)}
                  className={`px-4 py-3 rounded-lg border cursor-pointer transition-all ${getOptionStyle(qIndex, i, q.correctIndex)}`}
                >
                  {String.fromCharCode(65 + i)}. {opt}
                </div>
              ))}
            </div>

            <button
              onClick={() => toggleExplanation(qIndex)}
              className="mt-4 px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50"
            >
              Show Explanation
            </button>

            {openExplanation[qIndex] && (
              <p className="mt-3 text-gray-700 text-sm">
                <strong>Explanation:</strong> {q.explanation}
              </p>
            )}

            {!isSubscribed && (
              <div className="absolute top-3 right-3 text-xs bg-red-600 text-white px-3 py-1 rounded-full">
                🔒 Locked
              </div>
            )}
          </div>
        ))}
      </div>

      <SubscriptionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        redirectUrl="http://localhost:3000/course-details/issb-iq-psychological-mastery"
      />
    </>
  );
};

export default McqCard;
