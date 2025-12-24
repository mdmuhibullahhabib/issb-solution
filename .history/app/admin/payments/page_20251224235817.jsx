"use client";

import { useState } from "react";

export default function AdminPayments() {
  const [payments, setPayments] = useState([
    {
      id: "PAY001",
      name: "Rahim Uddin",
      phone: "017XXXXXXXX",
      course: "ISSB Ultimate 6 Months",
      amount: 2500,
      method: "bKash",
      transactionId: "9KDJ32KD",
      status: "pending",
      screenshot: "https://i.ibb.co/8DqQ0XK/payment-demo.png",
    },
    {
      id: "PAY002",
      name: "Karim Ahmed",
      phone: "018XXXXXXXX",
      course: "ISSB Crash Course",
      amount: 1500,
      method: "Nagad",
      transactionId: "NG2392AA",
      status: "approved",
      screenshot: null,
    },
  ]);

  const [previewImage, setPreviewImage] = useState(null);
    const { payments, isLoading, isError, error } =
    useManagePayments();

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
              <th className="px-4 py-3">Student</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Screenshot</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-3">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.phone}</div>
                </td>

                <td className="px-4 py-3 text-center">{p.course}</td>

                <td className="px-4 py-3 text-center font-semibold">
                  ৳ {p.amount}
                </td>

                <td className="px-4 py-3 text-center">{p.method}</td>

                {/* 📸 Screenshot */}
                <td className="px-4 py-3 text-center">
                  {p.screenshot ? (
                    <img
                      src={p.screenshot}
                      alt="payment"
                      onClick={() => setPreviewImage(p.screenshot)}
                      className="w-12 h-12 object-cover rounded cursor-pointer border hover:scale-105 transition"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">
                      Not Provided
                    </span>
                  )}
                </td>

                {/* Status */}
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

                {/* Action */}
                <td className="px-4 py-3 text-center space-x-2">
                  {p.status === "pending" && (
                    <>
                      <button
                        onClick={() =>
                          updateStatus(p.id, "approved")
                        }
                        className="px-3 py-1 text-xs rounded bg-green-600 text-white"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() =>
                          updateStatus(p.id, "rejected")
                        }
                        className="px-3 py-1 text-xs rounded bg-red-600 text-white"
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

      {/* 🔍 Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl max-w-md w-full relative">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              ✕
            </button>
            <img
              src={previewImage}
              alt="Payment Screenshot"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
