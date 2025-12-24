"use client";

import { useMemo, useState } from "react";

/* ================= FAKE REPORTS DATA ================= */
const fakeReports = [
  {
    id: 1,
    date: "2025-01-18",
    student: "Rahim Uddin",
    email: "rahim@gmail.com",
    course: "ISSB Ultimate 6 Months",
    amount: 4500,
    method: "bKash",
    status: "success",
  },
  {
    id: 2,
    date: "2025-01-17",
    student: "Karim Ahmed",
    email: "karim@gmail.com",
    course: "ISSB Crash Course",
    amount: 2500,
    method: "Nagad",
    status: "pending",
  },
  {
    id: 3,
    date: "2025-01-10",
    student: "Hasan Ali",
    email: "hasan@gmail.com",
    course: "ISSB Psychology Special",
    amount: 1800,
    method: "bKash",
    status: "success",
  },
  {
    id: 4,
    date: "2025-01-01",
    student: "Sabbir Khan",
    email: "sabbir@gmail.com",
    course: "ISSB Interview Prep",
    amount: 2200,
    method: "Nagad",
    status: "success",
  },
];

export default function AdminReports() {
  const [range, setRange] = useState("30"); // default 30 days

  /* ================= FILTER DATA ================= */
  const filteredData = useMemo(() => {
    const days = Number(range);
    const today = new Date();

    return fakeReports.filter((item) => {
      const reportDate = new Date(item.date);
      const diffDays = (today - reportDate) / (1000 * 60 * 60 * 24);
      return diffDays <= days;
    });
  }, [range]);

  /* ================= SUMMARY ================= */
  const summary = useMemo(() => {
    const total = filteredData.length;
    const successPayments = filteredData.filter(r => r.status === "success");
    const pendingPayments = filteredData.filter(r => r.status === "pending");
    const revenue = successPayments.reduce((sum, r) => sum + r.amount, 0);

    return {
      total,
      success: successPayments.length,
      pending: pendingPayments.length,
      revenue,
    };
  }, [filteredData]);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 Reports & Analytics</h1>

      {/* ================= FILTER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <label className="text-sm font-medium">Time Range:</label>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full sm:w-48"
        >
          <option value="1">Today</option>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
        </select>
      </div>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard title="Total Payments" value={summary.total} />
        <SummaryCard title="Revenue" value={`৳${summary.revenue}`} color="green" />
        <SummaryCard title="Successful" value={summary.success} color="blue" />
        <SummaryCard title="Pending" value={summary.pending} color="yellow" />
      </div>

      {/* ================= REPORT TABLE ================= */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-center">Course</th>
              <th className="px-4 py-3 text-center">Amount</th>
              <th className="px-4 py-3 text-center">Method</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  কোন রিপোর্ট পাওয়া যায়নি
                </td>
              </tr>
            ) : (
              filteredData.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-4 py-3">{r.date}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium">{r.student}</p>
                    <p className="text-xs text-gray-500">{r.email}</p>
                  </td>
                  <td className="px-4 py-3 text-center">{r.course}</td>
                  <td className="px-4 py-3 text-center font-semibold">৳{r.amount}</td>
                  <td className="px-4 py-3 text-center">{r.method}</td>
                  <td className="px-4 py-3 text-center">
                    <StatusBadge status={r.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================== SUMMARY CARD ================== */
function SummaryCard({ title, value, color = "gray" }) {
  const colors = {
    gray: "bg-gray-100 text-gray-800",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };
  return (
    <div className={`p-4 rounded-xl ${colors[color]}`}>
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

/* ================== STATUS BADGE ================== */
function StatusBadge({ status }) {
  const colors = {
    success: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>
      {status === "success" ? "Success" : "Pending"}
    </span>
  );
}
