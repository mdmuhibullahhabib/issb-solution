"use client";
import React, { useState } from "react";

const ManageUsers = () => {
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
      name: "Mehedi",
      email: "mehedi@gmail.com",
      type: "subscription",
      role: "student",
      plan: "Yearly",
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
      <h1 className="text-3xl font-extrabold mb-4 text-gray-800">
        Manage Users
      </h1>

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
          <option value="student">Only Students</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow border bg-white">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border p-3 text-left">ID</th>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">User Type</th>
              <th className="border p-3 text-left">Plan / Course</th>
              <th className="border p-3 text-left">Role</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <td className="border p-3">{user.id}</td>
                <td className="border p-3 font-semibold">{user.name}</td>
                <td className="border p-3 text-gray-600">{user.email}</td>

                <td className="border p-3 capitalize">
                  {user.type === "subscription" && (
                    <span className="text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
                      Subscription
                    </span>
                  )}
                  {user.type === "course" && (
                    <span className="text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded">
                      Course Purchase
                    </span>
                  )}
                  {user.type === "none" && <span>-</span>}
                </td>

                <td className="border p-3">{user.plan}</td>

                <td className="border p-3 capitalize">{user.role}</td>

                <td className="border p-3 text-center">
                  <button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition mr-2">
                    View
                  </button>
                  <button className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <p className="text-center p-4 text-gray-500">
            No users found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
