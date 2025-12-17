"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ---------------- DATA ---------------- */
const lectures = [
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

const faqs = [
  {
    q: "কোর্স কিভাবে করবেন?",
    a: "এই কোর্সটি ধাপে ধাপে ISSB প্রস্তুতির জন্য সাজানো হয়েছে।",
  },
  {
    q: "কিভাবে সিলেকশন হবে?",
    a: "ISSB এর সকল ধাপ সফলভাবে পার করলেই চূড়ান্ত সিলেকশন হবে।",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function LectureAndFAQ() {
  const [openLecture, setOpenLecture] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleLectures = showAll ? lectures : lectures.slice(0, 4);

  return (
    <div className="max-w-2xl mx-auto px-3 sm:px-0 space-y-6">
      {/* ===== Lecture Details ===== */}
      <Card title="লেকচার ডিটেইলস">
        <AccordionList
          items={visibleLectures}
          openIndex={openLecture}
          setOpenIndex={setOpenLecture}
        />

        {!showAll && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="text-xs sm:text-sm px-4 py-1.5 border rounded-full text-gray-600 hover:bg-gray-100 transition"
            >
              Show More ({lectures.length - 4})
            </button>
          </div>
        )}
      </Card>

      {/* ===== FAQ ===== */}
      <Card title="সাধারণ জিজ্ঞাসা">
        {faqs.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.q}
            isOpen={openFaq === index}
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
          >
            {item.a}
          </AccordionItem>
        ))}
      </Card>
    </div>
  );
}

/* ---------------- UI PARTS ---------------- */

function Card({ title, children }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 sm:p-5">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function AccordionList({ items, openIndex, setOpenIndex }) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item}
          isOpen={openIndex === index}
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        >
          এই লেকচার সম্পর্কিত বিস্তারিত এখানে দেখানো হবে।
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, isOpen, onClick, children }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-2.5 text-left text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-50 transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-green-600" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden px-4 pb-3 text-xs sm:text-sm text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
}
