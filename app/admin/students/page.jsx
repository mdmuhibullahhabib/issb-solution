"use client";
import React, { useState } from "react";

const ManageStudents = () => {
  // Fake Users
  const usersData = [
    {
      id: 1,
      name: "Rakib Hasan",
      email: "rakib@gmail.com",
      type: "subscription",
      role: "student",
      plan: "Monthly",
    },
    {
      id: 2,
      name: "Sadia Akter",
      email: "sadia@gmail.com",
      type: "course",
      role: "student",
      plan: "ISSB Complete Course",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@missionissb.com",
      type: "none",
      role: "admin",
      plan: "-",
    },
    {
      id: 4,
      name: "Mehedi Hasan",
      email: "mehedi@gmail.com",
      type: "none",
      role: "student",
      plan: "-",
    },
  ];

  const [filter, setFilter] = useState("all");

  // UPDATED FILTER LOGIC
  const filteredUsers = usersData.filter((user) => {
    if (filter === "all") return true;
    if (filter === "subscription") return user.type === "subscription";
    if (filter === "course") return user.type === "course";
    if (filter === "free") return user.type === "none" && user.role === "student";
    return true;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Manage Users</h1>

      {/* Filter Dropdown */}
      <div className="mb-6 flex items-center gap-3">
        <label className="font-semibold">Filter:</label>
        <select
          className="border px-4 py-2 rounded-md shadow-sm bg-white focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Users</option>
          <option value="subscription">Subscription Based</option>
          <option value="course">Course Purchase Based</option>
          <option value="free">Free Users (No Purchase)</option>
        </select>
      </div>

      {/* USERS GRID (NO TABLE) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="border rounded-xl bg-white shadow-md p-5 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <span className="text-sm text-gray-500">ID: {user.id}</span>
            </div>

            <p className="text-gray-600 text-sm mt-1">{user.email}</p>

            {/* USER TYPE TAG */}
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 flex gap-2">
                User Type:
                {user.type === "subscription" && (
                  <span className="text-green-700 bg-green-100 px-2 py-1 rounded text-xs font-bold">
                    Subscription
                  </span>
                )}
                {user.type === "course" && (
                  <span className="text-blue-700 bg-blue-100 px-2 py-1 rounded text-xs font-bold">
                    Course Purchase
                  </span>
                )}
                {user.type === "none" && (
                  <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded text-xs font-bold">
                    Free User
                  </span>
                )}
              </p>

              {/* Plan / Course */}
              <p className="text-sm mt-2">
                <span className="font-semibold">Plan/Course:</span> {user.plan}
              </p>

              {/* Role */}
              <p className="text-sm mt-1 capitalize">
                <span className="font-semibold">Role:</span> {user.role}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 mt-5">
              <button className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
                View Details
              </button>
              <button className="w-full py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-center mt-8 text-gray-500">
          No users found for this filter.
        </p>
      )}
    </div>
  );
};

export default ManageStudents;
