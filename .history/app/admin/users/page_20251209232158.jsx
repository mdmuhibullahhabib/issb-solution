"use client";
import React, { useState } from "react";
import { User, Search, Mail } from "lucide-react";

export default function ManageUsers() {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", type: "Subscription", status: "Active" },
    { id: 2, name: "Sara Rahman", email: "sara@gmail.com", type: "Course Purchase", status: "Active" },
    { id: 3, name: "Ali Khan", email: "ali@gmail.com", type: "Subscription", status: "Inactive" }
  ];

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow w-full sm:w-96">
        <Search className="text-gray-500" />
        <input
          type="text"
          className="outline-none w-full"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-4">User</th>
              <th className="p-4">Email</th>
              <th className="p-4">Type</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-4 flex items-center gap-2">
                  <User className="text-blue-600" />
                  {user.name}
                </td>
                <td className="p-4 flex items-center gap-2">
                  <Mail className="text-gray-500" /> {user.email}
                </td>
                <td className="p-4">{user.type}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-white text-sm ${
                      user.status === "Active" ? "bg-green-600" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
