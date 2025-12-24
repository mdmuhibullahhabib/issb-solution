"use client";

import { useMemo, useState } from "react";

const fakeSubscriptions = [
  {
    id: "SUB001",
    studentName: "Rahim Uddin",
    email: "rahim@gmail.com",
    course: "ISSB Ultimate 6 Months",
    status: "active",
    startDate: "2025-01-10",
    endDate: "2025-07-10",
  },
  {
    id: "SUB002",
    studentName: "Karim Ahmed",
    email: "karim@gmail.com",
    course: "ISSB Crash Course",
    status: "pending",
    startDate: null,
    endDate: null,
  },
  {
    id: "SUB003",
    studentName: "Hasan Ali",
    email: "hasan@gmail.com",
    course: "ISSB Psychology Special",
    status: "expired",
    startDate: "2024-06-01",
    endDate: "2024-12-01",
  },
];

export default function AdminSubscriptions() {
  const [data, setData] = useState(fakeSubscriptions);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  /* ================= Summary ================= */
  const summary = useMemo(() => {
    return {
      total: data.length,
      active: data.filter((d) => d.status === "active").length,
      pending: data.filter((d) => d.status === "pending").length,
      expired: data.filter((d) => d.status === "expired").length,
    };
  }, [data]);

  /* ================= Filtered Data ================= */
  const filteredData = data.filter((item) => {
    const matchFilter =
      filter === "all" ? true : item.status === filter;

    const matchSearch =
      item.studentName.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.course.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  /* ================= Actions ================= */
  const activate = (id) => {
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

  const expire = (id) => {
    setData((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "expired" } : s
      )
    );
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        📦 Subscription Management
      </h1>

      {/* ================= Summary Cards ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard title="Total" value={summary.total} />
        <SummaryCard title="Active" value={summary.active} color="green" />
        <SummaryCard title="Pending" value={summary.pending} color="yellow" />
        <SummaryCard title="Expired" value={summary.expired} color="red" />
      </div>

      {/* ================= Filter & Search ================= */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-48"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="expired">Expired</option>
        </select>

        <input
          type="text"
          placeholder="Search student / email / course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-80"
        />
      </div>

      {/* ================= Table ================= */}
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
            {filteredData.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="px-4 py-3">
                  <div className="font-medium">{s.studentName}</div>
                  <div className="text-xs text-gray-500">{s.email}</div>
                </td>

                <td className="px-4 py-3 text-center">
                  {s.course}
                </td>

                <td className="px-4 py-3 text-center text-xs">
                  {s.startDate ? (
                    <>
                      {s.startDate} <br /> → {s.endDate}
                    </>
                  ) : (
                    <span className="text-gray-400">Not Active</span>
                  )}
                </td>

                <td className="px-4 py-3 text-center">
                  <StatusBadge status={s.status} />
                </td>

                <td className="px-4 py-3 text-center space-x-2">
                  {s.status === "pending" && (
                    <button
                      onClick={() => activate(s.id)}
                      className="px-3 py-1 text-xs rounded bg-green-600 text-white"
                    >
                      Activate
                    </button>
                  )}
                  {s.status === "active" && (
                    <button
                      onClick={() => expire(s.id)}
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
    </div>
  );
}

/* ================= Reusable Components ================= */

function SummaryCard({ title, value, color = "gray" }) {
  const colors = {
    gray: "bg-gray-100 text-gray-800",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div className={`p-4 rounded-xl ${colors[color]}`}>
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    active: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    expired: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
