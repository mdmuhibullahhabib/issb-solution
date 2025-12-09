"use client";
import React from "react";
import { ShoppingCart, CheckCircle, XCircle } from "lucide-react";

export default function ManageOrders() {
  const orders = [
    {
      id: "ORD-001",
      student: "John Doe",
      type: "Subscription",
      amount: "৳ 1200",
      status: "Completed"
    },
    {
      id: "ORD-002",
      student: "Sara Rahman",
      type: "Course Purchase",
      amount: "৳ 650",
      status: "Pending"
    },
    {
      id: "ORD-003",
      student: "Ali Khan",
      type: "Course Purchase",
      amount: "৳ 900",
      status: "Completed"
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Orders</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-4">Order ID</th>
              <th className="p-4">Student</th>
              <th className="p-4">Type</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 flex items-center gap-2">
                  <ShoppingCart className="text-purple-600" />
                  {order.id}
                </td>
                <td className="p-4">{order.student}</td>
                <td className="p-4">{order.type}</td>
                <td className="p-4">{order.amount}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-white text-sm ${
                      order.status === "Completed"
                        ? "bg-green-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    View Details
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
