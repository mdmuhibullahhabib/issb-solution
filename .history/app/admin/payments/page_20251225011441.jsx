"use client";

import useManagePayments from "@/hooks/useManagePayments";
import { useState } from "react";

export default function AdminPayments() {
  const { payments, isLoading, isError, error, refetch, } = useManagePayments();
  const [previewImage, setPreviewImage] = useState(null);
  const [actionLoading, setActionLoading] = useState(null); 
  /* ================= Loading ================= */
  if (isLoading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Payment data loading...
      </div>
    );
  }

  /* ================= Error ================= */
  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        {error.message}
      </div>
    );
  }

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
              <th className="px-4 py-3 text-center">TRX ID</th>
              <th className="px-4 py-3 text-center">Amount</th>
              <th className="px-4 py-3 text-center">Method</th>
              <th className="px-4 py-3 text-center">Screenshot</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="py-10 text-center text-gray-400"
                >
                  No payment found
                </td>
              </tr>
            )}

            {payments.map((p) => (
              <tr key={p._id} className="border-t">
                {/* Student */}
                <td className="px-4 py-3">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-500">
                    {p.email}
                  </div>
                  <div className="text-xs text-gray-500">
                    {p.phone}
                  </div>
                </td>

                {/* TRX */}
                <td className="px-4 py-3 text-center font-mono text-xs">
                  {p.trxId}
                </td>

                {/* Amount */}
                <td className="px-4 py-3 text-center font-semibold">
                  ৳ {p.price}
                </td>

                {/* Method */}
                <td className="px-4 py-3 text-center capitalize">
                  {p.paymentMethod}
                </td>

                {/* Screenshot */}
                <td className="px-4 py-3 text-center">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt="payment"
                      onClick={() => setPreviewImage(p.image)}
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
                        className="px-3 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
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

      {/* ================= Image Preview Modal ================= */}
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
