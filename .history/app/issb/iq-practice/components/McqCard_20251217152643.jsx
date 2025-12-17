"use client";

import React, { useState } from "react";
import useSubscriptions from "@/hooks/useSubscriptions";

const McqCard = () => {
  const { subscriptions, isLoading } = useSubscriptions();

  // ✅ Active subscription check
  const activeSubscription = subscriptions?.find(
    (sub) => sub.status === "active"
  );

  const isSubscribed = !!activeSubscription;

  const question = {
    title: "Find the next: 10, 30, 68, 130, ?, ?",
    options: ["150, 190", "222, 350", "165, 190", "225, 350", "200, 350"],
    correctIndex: 1,
  };

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showModal, setShowModal] = useState(false);

  /* Option Click Logic */
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

  if (isLoading) {
    return <div className="p-4">Loading subscription...</div>;
  }

  return (
    <>
      <div className="mt-4 bg-white border p-6 rounded-xl shadow-sm relative">
        {/* QUESTION */}
        <h3
          className={`font-semibold text-lg cursor-pointer ${
            !isSubscribed
              ? "blur-[2px] opacity-60 select-none"
              : ""
          }`}
          onClick={() => {
            if (!isSubscribed) setShowModal(true);
          }}
        >
          1. {question.title}
        </h3>

        {/* OPTIONS */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => {
                if (!isSubscribed) {
                  setShowModal(true);
                  return;
                }
                handleSelect(i);
              }}
              className={`px-4 py-3 rounded-lg border cursor-pointer transition-all ${getOptionStyle(
                i
              )}`}
            >
              {String.fromCharCode(65 + i)}. {opt}
            </div>
          ))}
        </div>

        {/* EXPLANATION BUTTON */}
        <button
          onClick={() => {
            if (!isSubscribed) {
              setShowModal(true);
              return;
            }
            setShowExplanation(!showExplanation);
          }}
          className="mt-5 px-5 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-50"
        >
          Show Explanation
        </button>

        {showExplanation && (
          <p className="mt-3 text-gray-700">
            Explanation will go here...
          </p>
        )}

        {/* LOCK BADGE */}
        {!isSubscribed && (
          <div className="absolute top-3 right-3 text-xs bg-red-600 text-white px-3 py-1 rounded-full">
            🔒 Locked
          </div>
        )}
      </div>

      {/* SUBSCRIPTION MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-80 p-6 rounded-xl shadow-xl animate-fadeIn">
            <h2 className="text-xl font-bold text-center mb-2">
              Get Full Access
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Unlock all questions & premium model tests by buying a subscription.
            </p>

            <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium">
              Buy Subscription
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-3 border py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* MODAL ANIMATION */}
      <style>
        {`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        `}
      </style>
    </>
  );
};

export default McqCard;
