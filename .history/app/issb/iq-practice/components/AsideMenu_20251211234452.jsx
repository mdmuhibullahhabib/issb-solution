"use client";

import Link from "next/link";

export default function AsideMenu() {
  const menu = [
    "Number Series",
    "Odd One Out",
    "Analogy",
    "Jumbled Word",
    "Coding-Decoding",
    "Logical Puzzle",
    "Alphanumeric Series",
    "True/False",
    "Alphabetical Order",
    "Alphabet Series",
    "Mathematical Problems",
    "Direction Sense",
"Proverb & Idiom",
"Calendar & Time Problem",
"Blood Relation",
"Age Problem",
"Riddle",
"General Knowledge",
"Synonym/Antonym",
"One-Word Substitution",
"Ordering & Ranking",
"Others",
"Non-Verbal",
"Raven IQ",
"Mixed Non Verbal",
"Completion of Series",
"Analogy",
"Classification",
"Completion of Figures",
"Paper Folding",
"Paper Cutting",
"Mirror Image",
"Formation of Figures",
"Embedded Figures",
"Figure Matrix",
"Water Image"

  ];

  return (
    <aside className="w-full md:w-64 bg-white border-r h-full md:h-screen p-4 overflow-y-auto sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-6">
        <img src="/logo.png" alt="Mission ISSB" className="w-14" />
        <h2 className="text-xl font-bold text-green-900">Mission ISSB</h2>
      </div>

      {/* Menu */}
      <div className="space-y-1">
        {menu.map((item, idx) => (
          <Link
            key={idx}
            href={`/iq-practice/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-green-100 hover:text-green-700 transition"
          >
            {item}
          </Link>
        ))}
      </div>
    </aside>
  );
}
