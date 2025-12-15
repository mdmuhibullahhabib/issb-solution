"use client";
<<<<<<< HEAD

import { X } from "lucide-react";

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
=======
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
>>>>>>> 74526937074990529b05eed9582bf8a240d4a28b
      </div>
    </div>
  );
};

export default SubmitModal;
