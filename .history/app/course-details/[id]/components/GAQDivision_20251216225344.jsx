"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ---------------- Lecture Data ---------------- */
const allLectures = [
  "Before ISSB",
  "Intelligence Test",
  "PPDT",
  "Essay Writing",
  "Incomplete Story",
  "Picture Story",
  "Incomplete Sentences",
  "Word Association Test",
  "Self Criticism",
  "Self Assessment",
  "Group Discussion",
  "Progressive Group Task",
  "Half Group Task",
  "Extempore Speech",
  "Physical Ability Test",
  "Bio Data",
  "Deputy President / DP Viva",
  "Planning Exercise",
  "GTO Viva",
  "Command Task",
  "Mutual Assessment",
  "Medical Test",
];

/* ---------------- FAQ Data ---------------- */
const faqs = [
  {
    question: "কোর্স কিভাবে করবেন?",
    answer: "এই কোর্সটি ধাপে ধাপে ISSB প্রস্তুতির জন্য সাজানো হয়েছে।",
  },
  {
    question: "কিভাবে সিলেকশন হবে?",
    answer: "ISSB এর সকল ধাপ সফলভাবে পার করলেই চূড়ান্ত সিলেকশন হবে।",
  },
];

export default function LectureDetailsAccordion() {
 A
  const [openLecture, setOpenLecture] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleLectures = showAll ? allLectures : allLectures.slice(0, 4);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* ================= Lecture Details ================= */}
      <div className="bg-white border rounded-lg p-4">
        <h2 className="font-bold text-gray-800 mb-3">
          লেকচার ডিটেইলস
        </h2>

        <div className="space-y-2">
          {visibleLectures.map((item, index) => (
            <div key={index} className="border rounded-md">
              <button
                onClick={() =>
                  setOpenLecture(
                    openLecture === index ? null : index
                  )
                }
                className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {item}
                <ChevronDown
                  className={`w-4 h-4 transition ${
                    openLecture === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openLecture === index && (
                <div className="px-3 pb-3 text-xs text-gray-500">
                  এই লেকচার সম্পর্কিত বিস্তারিত এখানে দেখানো হবে।
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-3">
            <button
              onClick={() => setShowAll(true)}
              className="text-xs px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
            >
              Show More ({allLectures.length - 4})
            </button>
          </div>
        )}
      </div>

      {/* ================= FAQ Section ================= */}
      <div className="bg-white border rounded-lg p-4">
        <h2 className="font-bold text-gray-800 mb-3">
          সাধারণ জিজ্ঞাসা
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md">
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {faq.question}
                <ChevronDown
                  className={`w-4 h-4 transition ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-3 pb-3 text-xs text-gray-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  