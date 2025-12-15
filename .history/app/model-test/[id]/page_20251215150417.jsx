"use client";
import React from "react";
import { Play } from "lucide-react";
import Link from "next/link";

const ModelTestPage = () => {
  /* ------------------------------------------------
     FIX: Fake model test data
  ------------------------------------------------ */
  const modelTest = {
    id: "verbal-model-test-01",
    title: "Verbal Model Test 01",
    duration: "35 মিনিট",
    marks: 100,
    questions: 100,
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md border p-6 md:p-10 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-red-600">O</span>
            <span className="text-green-600">C</span>
            <span className="text-yellow-500">S</span>{" "}
            <span className="text-gray-800 font-semibold">Academy</span>
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
          {modelTest.title}
        </h2>

        {/* Meta Info */}
        <p className="mt-2 text-sm text-gray-600">
          Total Questions: {modelTest.questions} | Marks: {modelTest.marks}
        </p>
        <p className="text-sm text-gray-600">
          Duration: {modelTest.duration}
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-green-600 mx-auto my-5 rounded-full" />

        {/* Instructions */}
        <div className="text-left max-w-md mx-auto space-y-2 text-gray-700 text-sm md:text-base">
          <p>১. পরীক্ষার সময়: <span className="font-medium">{modelTest.duration}</span></p>
          <p>২. প্রতিটি প্রশ্নের মান: <span className="font-medium">১ নম্বর</span></p>
          <p>৩. নেগেটিভ মার্কিং নেই</p>
          <p>৪. উত্তর না জানলেও Submit করুন</p>
          <p>৫. আগে সহজ প্রশ্ন শেষ করুন, পরে কঠিন</p>
        </div>

        {/* Extra info */}
        <p className="mt-5 text-xs text-gray-500">
          * পরীক্ষার সময় শেষ হলে অটো সাবমিট হবে
        </p>

        {/* Start Button */}
        <Link
          href={`/exam/${modelTest.id}`}
          className="mt-8 w-full flex items-center justify-center gap-2 
                     bg-gradient-to-r from-green-700 to-green-900 
                     text-white py-3 rounded-xl text-lg font-semibold
                     hover:opacity-90 active:scale-95 transition"
        >
          <Play size={20} />
          Start Exam
        </Link>
      </div>
    </div>
  );
};

export default ModelTestPage;