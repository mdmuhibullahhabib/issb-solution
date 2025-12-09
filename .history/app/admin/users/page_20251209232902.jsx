"use client";
import React, { useState } from "react";

const ManageUsers = () => {
  const usersData = [
    {
      id: 1,
      name: "Rakib Hasan",
      email: "rakib@gmail.com",
      type: "subscription",
      role: "student",
      plan: "Monthly Plan",
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
      type: "subscription",
      role: "student",
      plan: "Yearly Plan",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredUsers = usersData.filter((user) => {
    if (filter === "all") return true;
    if (filter === "subscription") return user.type === "subscription";
    if (filter === "course") return user.type === "course";
    if (filter === "student") return user.role === "student";
    return true;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      {/* Filter Section */}
      <div className="mb-6 flex items-center gap-3">
        <label className="font-semibold">Filter:</label>
        <select
          className="border px-3 py-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Users</option>
          <option value="subscription">Subscription Based</option>
          <option value="course">Course Purchase Based</option>
          <option value="student">Student Only</option>
        </select>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-5 shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-sm text-gray-600 mb-1">{user.email}</p>

            <div className="mt-3">
              <p className="text-sm">
                <span className="font-semibold">User Type:</span>{" "}
                {user.type === "subscription" ? (
                  <span className="text-green-600 font-semibold">Subscription</span>
                ) : user.type === "course" ? (
                  <span className="text-blue-600 font-semibold">Course Purchase</span>
                ) : (
                  "-"
                )}
              </p>

              <p className="text-sm mt-1">
                <span className="font-semibold">Plan / Course:</span> {user.plan}
              </p>

              <p className="text-sm mt-1 capitalize">
                <span className="font-semibold">Role:</span> {user.role}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                View
              </button>
              <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No users found for this filter.
        </p>
      )}
    </div>
  );
};

export default ManageUsers;
