"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function SubscriptionModal({ 
  show, 
  onClose, 
  redirectUrl, 
  title = "পূর্ণ অ্যাক্সেস পান", 
  description = "এক্সপ্লেনেশন বা এই ফিচার দেখার জন্য একটি সাবস্ক্রিপশন প্রয়োজন।", 
  buttonText = "সাবস্ক্রিপশন কিনুন" 
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-xl relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-center text-sm mb-5">{description}</p>

        {/* Action Button */}
        <Link
          href={redirectUrl}
          className="w-full block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          {buttonText}
        </Link>

        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="w-full mt-3 border py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          বাতিল করুন
        </button>
      </div>
    </div>
  );
}
