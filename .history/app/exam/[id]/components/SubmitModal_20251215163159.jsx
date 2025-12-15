"use client";
import React from "react";

const SubmitModal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      {/* SubmitModal Box */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg animate-scaleIn">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default SubmitModal;