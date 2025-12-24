"use client";

import { useMemo } from "react";

/* ================= Fake Data ================= */
const fakePayments = [
  { amount: 4500, status: "success" },
  { amount: 2500, status: "pending" },
  { amount: 1800, status: "success" },
];

const fakeSubscriptions = [
  { student: "Rahim", plan: "ISSB Ultimate" },
  { student: "Karim", plan: "ISSB Crash" },
];

export default function Dashboard() {
  /* ================= Summary ================= */
  const summary = useMemo(() => {
    const totalPayments = fakePayments.length;
    const revenue = fakePayments
      .filter((p) => p.status === "success")
      .reduce((sum, p) => sum + p.amount, 0);
    const activeSubs = fakeSubscriptions.length;
    const pendingPayments = fakePayments.filter((p) => p.status === "pending")
      .length;

    return { totalPayments, revenue, activeSubs, pendingPayments };
  }, []);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">📊 Admin Dashboard</h1>

      {/* ================= Summary Cards ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Total Payments" value={summary.totalPayments} />
        <Card title="Revenue" value={`৳${summary.revenue}`} color="green" />
        <Card
          title="Active Subscriptions"
          value={summary.activeSubs}
          color="blue"
        />
        <Card
          title="Pending Payments"
          value={summary.pendingPayments}
          color="yellow"
        />
      </div>

      {/* ================= Quick Links ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <QuickLink title="Manage Students" />
        <QuickLink title="Manage Payments" />
        <QuickLink title="Manage Subscriptions" />
      </div>
    </div>
  );
}

/* ================= Reusable Components ================= */
function Card({ title, value, color = "gray" }) {
  const colors = {
    gray: "bg-gray-100 text-gray-800",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };
  return (
    <div className={`p-4 rounded-xl ${colors[color]} shadow`}>
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function QuickLink({ title }) {
  return (
    <div className="p-4 rounded-xl bg-indigo-50 text-indigo-700 font-semibold text-center cursor-pointer hover:bg-indigo-100 transition">
      {title}
    </div>
  );
}
