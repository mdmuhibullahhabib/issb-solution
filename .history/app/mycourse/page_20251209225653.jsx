"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

// Fake Courses Data
const fakeCourses = [
  {
    id: "issb-101",
    title: "ISSB Advanced Preparation",
    description:
      "Complete ISSB preparation including psychology, verbal, non-verbal, interview, and physical tests.",
    modules: [
      { id: "m1", title: "Psychology Test", lessons: 12 },
      { id: "m2", title: "Interview Guidelines", lessons: 8 },
      { id: "m3", title: "Verbal & Non-Verbal Reasoning", lessons: 20 }
    ]
  },
  {
    id: "issb-102",
    title: "ISSB Basic Preparation",
    description:
      "A beginner-friendly course covering all the basics required for ISSB selection.",
    modules: [
      { id: "m1", title: "Orientation", lessons: 5 },
      { id: "m2", title: "Physical Training", lessons: 6 },
      { id: "m3", title: "Group Discussion", lessons: 4 }
    ]
  },
  {
    id: "issb-103",
    title: "ISSB Interview Mastery",
    description:
      "Focused course on mastering ISSB interviews with tips, mock interviews, and assessment techniques.",
    modules: [
      { id: "m1", title: "Mock Interviews", lessons: 8 },
      { id: "m2", title: "Feedback & Analysis", lessons: 6 },
      { id: "m3", title: "Personal Development", lessons: 10 }
    ]
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 pt-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          🎓 My Purchased Courses
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {fakeCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:scale-105 transform transition-all duration-300"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-2xl p-5 flex items-center gap-3">
                <CheckCircle className="text-white w-6 h-6" />
                <h2 className="text-white font-semibold text-xl">{course.title}</h2>
              </div>

              {/* Description */}
              <div className="p-5 space-y-4">
                <p className="text-gray-700 text-base leading-relaxed">
                  {course.description}
                </p>

                {/* Modules */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.modules.map((module) => (
                    <Link
                      href={`/courses/${course.id}/module/${module.id}`}
                      key={module.id}
                      className="border p-3 rounded-xl bg-gray-50 hover:bg-gray-100 shadow-sm transition"
                    >
                      <h3 className="font-medium text-gray-800">{module.title}</h3>
                      <p className="text-gray-500 text-sm">{module.lessons} Lessons</p>
                    </Link>
                  ))}
                </div>

                {/* Continue Button */}
                <div className="mt-4 text-center">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
