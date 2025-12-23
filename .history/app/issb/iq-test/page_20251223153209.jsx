"use client";

import React, { useState } from "react";
import { Lock, Play } from "lucide-react";
import Link from "next/link";
import useSubscriptions from "@/hooks/useSubscriptions";
import SubscriptionModal from "./SubscriptionModal"; // import the modal

export default function IqTest() {
  const [showModal, setShowModal] = useState(false);

  // Example Model Tests
  const modelTests = [
    { id: 1, title: "Model Test 1" },
    { id: 2, title: "Model Test 2" },
    { id: 3, title: "Model Test 3" },
    { id: 4, title: "Model Test 4" },
  ];

  const { subscription, isLoading, error } = useSubscriptions();
  const isSubscribed = subscription?.[0]?.status === "active";

  const handleLockedClick = () => setShowModal(true);

  return (
    <div className="p-5 max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Model Tests
      </h2>

      {isLoading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error loading subscription.</p>}

      <div className="flex flex-col gap-4">
        {modelTests.map((test, index) => {
          const isFirst = index === 0;
          const isUnlocked = isSubscribed || isFirst;

          return (
            <div
              key={test.id}
              className="flex justify-between items-center p-4 rounded-xl shadow bg-white border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{test.title}</h3>

              {isUnlocked ? (
                <Link
                  href={`/model-test/${test.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <Play size={18} /> Start
                </Link>
              ) : (
                <button
                  onClick={handleLockedClick}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  <Lock size={18} /> Unlock
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== Subscription Modal ===== */}
      <SubscriptionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        redirectUrl="http://localhost:3000/course-details/issb-iq-psychological-mastery"
      />
    </div>
  );
}
