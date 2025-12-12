"use client";
import React, { useState } from "react";
import { Lock, Play } from "lucide-react";
import Link from "next/link";

export default function IqTest() {
  // Fake user data
  const user = {
    name: "Rakib Hasan",
    // subscription: "pending", 
    subscription: "active",  
    // subscription: "none",     
  };

  // Example Model Tests
  const modelTests = [
    { id: 1, title: "Model Test 1" },
    { id: 2, title: "Model Test 2" },
    { id: 3, title: "Model Test 3" },
    { id: 4, title: "Model Test 4" },
  ];

  const [showModal, setShowModal] = useState(false);

  const isSubscribed = user.subscription === "active";

  const handleLockedClick = () => {
    setShowModal(true);
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Model Test</h2>

      <div className="flex flex-col gap-4">
        {modelTests.map((test, index) => {
          const isFirst = index === 0;

          const isUnlocked =
            isSubscribed || isFirst;

          return (
            <div
              key={test.id}
              className="flex justify-between items-center p-4 rounded-xl shadow bg-white border"
            >
              <h3 className="text-lg font-semibold">{test.title}</h3>

              {isUnlocked ? (
                <Link
                href={`/model-test/${test.id}`}
                 className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  <Play size={18} /> Start
                </Link>
              ) : (
                <button
                  onClick={handleLockedClick}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-400 transition"
                >
                  <Lock size={18} /> Unlock
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-sm shadow-lg">
            <h3 className="text-xl font-bold mb-3">Subscription Required</h3>
            <p className="text-gray-600 mb-5">
              You need an active subscription to unlock this model test.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Buy Subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
