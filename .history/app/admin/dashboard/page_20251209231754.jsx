"use client";
import React from "react";
import { User, ShoppingCart, DollarSign } from "lucide-react";

export default function DashboardPage() {
  // Fake dashboard data
  const stats = [
    { id: 1, title: "Total Users", value: 120, icon: <User className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
    { id: 2, title: "Orders", value: 87, icon: <ShoppingCart className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { id: 3, title: "Revenue", value: "$5,240", icon: <DollarSign className="w-6 h-6" />, color: "from-purple-500 to-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">
          Welcome to Mission ISSB admin dashboard! Manage students, courses, and progress easily.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {/* Gradient Header */}
            <div className={`bg-gradient-to-r ${stat.color} p-4 flex items-center gap-3`}>
              <div className="text-white">{stat.icon}</div>
              <h2 className="text-white font-semibold text-lg">{stat.title}</h2>
            </div>

            {/* Value */}
            <div className="p-6 text-center">
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500 mt-2 text-sm">Updated just now</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Section */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
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
