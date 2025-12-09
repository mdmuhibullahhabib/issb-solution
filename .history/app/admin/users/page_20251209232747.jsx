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
      <h1 className="text-3xl font-bold mb-4">Manage Users</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="font-semibold mr-2">Filter:</label>
        <select
          className="border px-3 py-2 rounded"
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
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">User Type</th>
              <th className="border p-2">Plan / Course</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>

                <td className="border p-2 capitalize">
                  {user.type === "subscription" && (
                    <span className="text-green-600 font-semibold">
                      Subscription
                    </span>
                  )}
                  {user.type === "course" && (
                    <span className="text-blue-600 font-semibold">
                      Course Purchase
                    </span>
                  )}
                  {user.type === "none" && "-"}
                </td>

                <td className="border p-2">{user.plan}</td>

                <td className="border p-2 capitalize">{user.role}</td>

                <td className="border p-2 text-center">
                  <button className="px-3 py-1 rounded bg-blue-600 text-white mr-2">
                    View
                  </button>
                  <button className="px-3 py-1 rounded bg-red-600 text-white">
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
