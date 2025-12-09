"use client";
import React from "react";
import { User, CreditCard, BookOpen } from "lucide-react";

// Fake data
const subscriptionStudents = [
  { id: 1, name: "John Doe", subscription: "Active" },
  { id: 2, name: "Jane Smith", subscription: "Active" },
  { id: 3, name: "Ali Khan", subscription: "Active" }
];

const purchasedStudents = [
  { id: 1, name: "Sara Rahman", courses: ["ISSB Advanced"] },
  { id: 2, name: "Rashed Alam", courses: ["ISSB Basic", "Interview Mastery"] }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">
          Welcome to Mission ISSB admin dashboard! Manage students, courses, and subscriptions easily.
        </p>
      </div>

      {/* Subscription-Based Students */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-blue-600" />
          Subscription-Based Students
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {subscriptionStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <User className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold">{student.name}</h3>
              </div>
              <p className="text-gray-500">Subscription: {student.subscription}</p>
              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
                Manage
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Course Purchase-Based Students */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-purple-600" />
          Course Purchase-Based Students
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {purchasedStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <User className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-semibold">{student.name}</h3>
              </div>
              <p className="text-gray-500">
                Courses: {student.courses.join(", ")}
              </p>
              <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition">
                Manage Courses
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <button className="py-3 px-5 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Add Student
          </button>
          <button className="py-3 px-5 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Add Course
          </button>
          <button className="py-3 px-5 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
