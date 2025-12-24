"use client";

import { useState } from "react";

export default function AdminPayments() {
  const [payments, setPayments] = useState([
    {
      id: "PAY001",
      name: "Rahim Uddin",
      email: "rahim@gmail.com",
      phone: "017XXXXXXXX",
      course: "ISSB Ultimate 6 Months",
      amount: 2500,
      method: "bKash",
      transactionId: "9KDJ32KD",
      status: "pending",
      date: "2025-01-20",
    },
    {
      id: "PAY002",
      name: "Karim Ahmed",
      email: "karim@gmail.com",
      phone: "018XXXXXXXX",
      course: "ISSB Crash Course",
      amount: 1500,
      method: "Nagad",
      transactionId: "NG2392AA",
      status: "approved",
      date: "2025-01-18",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setPayments((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      )
    );
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">
        💳 Payment Management
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Txn ID</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr
                key={p.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">
                    {p.phone}
                  </div>
                </td>

                <td className="px-4 py-3 text-center">
                  {p.course}
                </td>

                <td className="px-4 py-3 text-center font-semibold">
                  ৳ {p.amount}
                </td>

                <td className="px-4 py-3 text-center">
                  {p.method}
                </td>

                <td className="px-4 py-3 text-center text-xs">
                  {p.transactionId}
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        p.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : p.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-center space-x-2">
                  {p.status === "pending" && (
                    <>
                      <button
                        onClick={() =>
                          updateStatus(p.id, "approved")
                        }
                        className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() =>
                          updateStatus(p.id, "rejected")
                        }
                        className="px-3 py-1 text-xs rounded bg-red-600 text-white hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
