"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

// Fake Data Example (Replace with API data later)
const fakeCourse = {
  id: "issb-101",
  title: "ISSB Advanced Preparation Course",
  description:
    "A complete ISSB preparation course including psychology, verbal, non-verbal, interview, and physical test guidelines.",
  modules: [
    { id: "m1", title: "Psychology Test", lessons: 12 },
    { id: "m2", title: "Interview Guidelines", lessons: 8 },
    { id: "m3", title: "Verbal & Non-Verbal Reasoning", lessons: 20 },
    { id: "m4", title: "Group Task Training", lessons: 6 },
    { id: "m5", title: "Physical Test Preparation", lessons: 10 }
  ]
};

export default function CoursePage() {
  const course = fakeCourse;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          📘 My Purchased Course
        </h1>

        {/* Card Wrapper */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-green-500" />
            <h2 className="text-2xl font-semibold">{course.title}</h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {course.description}
          </p>

          {/* Modules */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {course.modules.map((module, index) => (
              <Link
                href={`/courses/${course.id}/module/${module.id}`}
                key={index}
                className="border p-4 rounded-xl bg-white shadow hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-xl mb-1">{module.title}</h3>
                <p className="text-gray-600 text-sm">{module.lessons} Lessons</p>
              </Link>
            ))}
          </div>

          {/* Continue Button */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition">
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
