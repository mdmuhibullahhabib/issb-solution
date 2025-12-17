"use client";

import Image from "next/image";
import { Clock, Users } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Live ISSB course with WebApp",
    headerTitle: "LIVE ISSB COURSE",
    subtitle: "Future Officer Cadets",
    duration: "৬ মাস",
    enrolled: 38,
    price: 4500,
    oldPrice: 6000,
  },
  {
    id: 2,
    title: "ISSB: The Ultimate Mind Hacks 6 Months Subscription",
    headerTitle: "ISSB THE ULTIMATE HACKS",
    subtitle: "Future Officer Cadets",
    duration: "৬ মাস",
    enrolled: 638,
    price: 1500,
    oldPrice: 2500,
  },
];

export default function CourseCards() {
  return (
    <section className="px-4 md:px-10 py-10">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl border border-gray-200 overflow-hidden bg-white"
          >
            {/* ===== HEADER IMAGE AREA ===== */}
            <div className="relative h-[170px] bg-gradient-to-br from-[#002b1c] to-[#00160f] text-white flex flex-col items-center justify-center text-center px-4">
              <p className="text-sm tracking-widest font-semibold text-green-400">
                OCS <span className="text-yellow-400">Academy</span>
              </p>

              <h3 className="text-lg md:text-xl font-bold mt-2">
                {course.headerTitle}
              </h3>

              <p className="text-sm opacity-80 mt-1">
                {course.subtitle}
              </p>

              <p className="text-xs mt-3 opacity-70">
                Specially Tailored for ISSB
              </p>

              {/* Forces Icons */}
              <div className="flex gap-4 mt-4">
                <span className="text-xs border px-2 py-[2px] rounded">
                  Army
                </span>
                <span className="text-xs border px-2 py-[2px] rounded">
                  Navy
                </span>
                <span className="text-xs border px-2 py-[2px] rounded">
                  Airforce
                </span>
              </div>
            </div>

            {/* ===== BODY ===== */}
            <div className="p-4">
              {/* Title */}
              <h4 className="text-[15px] font-semibold text-gray-800 leading-snug">
                {course.title}
              </h4>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.enrolled} জন কোর্সটি করেছে
                </div>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-lg font-bold text-gray-900">
                    Tk. {course.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through ml-2">
                    Tk. {course.oldPrice}
                  </span>
                </div>

                <button className="border border-gray-300 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition">
                  বিস্তারিত
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
