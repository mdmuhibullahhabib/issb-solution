"use client";

import { useState, useMemo } from "react";

/* ================= Fake Students Data ================= */
const fakeStudents = [
  { id: 1, name: "Rahim Uddin", email: "rahim@gmail.com", phone: "017XXXXXXXX", subscription: "ISSB Ultimate", status: "active", registered: "2025-12-01" },
  { id: 2, name: "Karim Ahmed", email: "karim@gmail.com", phone: "018XXXXXXXX", subscription: "ISSB Crash", status: "inactive", registered: "2025-11-25" },
  { id: 3, name: "Hasan Ali", email: "hasan@gmail.com", phone: "019XXXXXXXX", subscription: "ISSB Psychology", status: "active", registered: "2025-12-05" },
];

export default function Students() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  /* ================= Filtered Students ================= */
  const filteredStudents = useMemo(() => {
    return fakeStudents.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase());
      const matchStatus =
        statusFilter === "all" ? true : s.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">👨‍🎓 Students</h1>

      {/* ================= Search & Filter ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <input
          type="text"
          placeholder="Search by name or email"
          className="border px-3 py-2 rounded-lg w-full sm:w-1/2 focus:ring-2 focus:ring-green-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border px-3 py-2 rounded-lg w-full sm:w-48 focus:ring-2 focus:ring-green-500 outline-none"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* ================= Students Table ================= */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-center">Phone</th>
              <th className="px-4 py-3 text-center">Subscription</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Registered</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No students found
                </td>
              </tr>
            ) : (
              filteredStudents.map((s) => (
                <tr key={s.id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3">{s.email}</td>
                  <td className="px-4 py-3 text-center">{s.phone}</td>
                  <td className="px-4 py-3 text-center">{s.subscription}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        s.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">{s.registered}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
