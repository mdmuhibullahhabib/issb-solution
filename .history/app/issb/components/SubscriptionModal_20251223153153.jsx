"use client";

import React from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function SubscriptionModal({ show, onClose, redirectUrl }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-lg relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <h3 className="text-xl font-bold mb-3 text-center">Subscription Required</h3>
        <p className="text-gray-600 mb-6 text-center">
          You need an active subscription to unlock this content.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Close
          </button>
          <Link
            href={redirectUrl}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition"
          >
            Get Subscription
          </Link>
        </div>
      </div>
    </div>
  );
}
