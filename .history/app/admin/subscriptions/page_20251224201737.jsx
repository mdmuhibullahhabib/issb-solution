"use client";

import { useState } from "react";

export default function AdminSubscriptions() {
  const [data, setData] = useState([
    {
      id: "SUB001",
      studentName: "Rahim Uddin",
      email: "rahim@gmail.com",
      course: "ISSB Ultimate 6 Months",
      status: "active",
      startDate: "2025-01-10",
      endDate: "2025-07-10",
      paymentId: "PAY001",
    },
    {
      id: "SUB002",
      studentName: "Karim Ahmed",
      email: "karim@gmail.com",
      course: "ISSB Crash Course",
      status: "pending",
      startDate: null,
      endDate: null,
      paymentId: "PAY002",
    },
    {
      id: "SUB003",
      studentName: "Hasan Ali",
      email: "hasan@gmail.com",
      course: "ISSB Psychology Special",
      status: "expired",
      startDate: "2024-06-01",
      endDate: "2024-12-01",
      paymentId: "PAY003",
    },
  ]);

  const activateSubscription = (id) => {
    const today = new Date();
    const end = new Date();
    end.setMonth(end.getMonth() + 6);

    setData((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: "active",
              startDate: today.toISOString().slice(0, 10),
              endDate: end.toISOString().slice(0, 10),
            }
          : s
      )
    );
  };

  const expireSubscription = (id) => {
    setData((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "expired" } : s
      )
    );
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">
        📦 Subscriptions Management
      </h1>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-center">Course</th>
              <th className="px-4 py-3 text-center">Duration</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((s) => (
              <tr key={s.id} className="border-t">
                {/* Student */}
                <td className="px-4 py-3">
                  <div className="font-medium">{s.studentName}</div>
                  <div className="text-xs text-gray-500">{s.email}</div>
                </td>

                {/* Course */}
                <td className="px-4 py-3 text-center">
                  {s.course}
                </td>

                {/* Duration */}
                <td className="px-4 py-3 text-center text-xs">
                  {s.startDate ? (
                    <>
                      {s.startDate} <br /> → {s.endDate}
                    </>
                  ) : (
                    <span className="text-gray-400">
                      Not Activated
                    </span>
                  )}
                </td>

                {/* Status */}
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        s.status === "active"
                          ? "bg-green-100 text-green-700"
                          : s.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {s.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-4 py-3 text-center space-x-2">
                  {s.status === "pending" && (
                    <button
                      onClick={() =>
                        activateSubscription(s.id)
                      }
                      className="px-3 py-1 text-xs rounded bg-green-600 text-white"
                    >
                      Activate
                    </button>
                  )}

                  {s.status === "active" && (
                    <button
                      onClick={() =>
                        expireSubscription(s.id)
                      }
                      className="px-3 py-1 text-xs rounded bg-red-600 text-white"
                    >
                      Expire
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Hint */}
      <p className="text-xs text-gray-500 mt-3">
        📱 Mobile user হলে table স্ক্রল করুন →
      </p>
    </div>
  );
}
