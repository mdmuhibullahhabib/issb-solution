"use client";

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
      </div>
    </div>
  );
};

export default SubmitModal;
