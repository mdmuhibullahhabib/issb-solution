"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

/* ================= Fake Data ================= */

// Course summary
const courseSummary = {
  totalCourses: 6,
  activeCourses: 4,
  totalStudents: 320,
  totalRevenue: 185000,
};

// Monthly enrollments
const enrollmentData = [
  { month: "Jan", students: 35 },
  { month: "Feb", students: 48 },
  { month: "Mar", students: 42 },
  { month: "Apr", students: 60 },
  { month: "May", students: 72 },
  { month: "Jun", students: 90 },
];

// Top courses
const topCourses = [
  { name: "ISSB Ultimate 6 Months", students: 120 },
  { name: "ISSB Crash Course", students: 85 },
  { name: "ISSB Psychology Special", students: 60 },
  { name: "Officer Math Booster", students: 55 },
];

// Courses table
const courses = [
  {
    id: 1,
    title: "ISSB Ultimate 6 Months",
    price: 4500,
    students: 120,
    status: "active",
  },
  {
    id: 2,
    title: "ISSB Crash Course",
    price: 2500,
    students: 85,
    status: "active",
  },
  {
    id: 3,
    title: "ISSB Psychology Special",
    price: 1800,
    students: 60,
    status: "inactive",
  },
];

export default function AdminCoursesDashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        📚 Courses Dashboard
      </h1>

      {/* ================= Summary Cards ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Total Courses" value={courseSummary.totalCourses} />
        <Card title="Active Courses" value={courseSummary.activeCourses} color="green" />
        <Card title="Total Students" value={courseSummary.totalStudents} color="blue" />
        <Card
          title="Course Revenue"
          value={`৳${courseSummary.totalRevenue}`}
          color="yellow"
        />
      </div>

      {/* ================= Charts ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 🔹 Monthly Enrollment */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-4">
            📈 Monthly Course Enrollment
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 🔹 Top Courses */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-4">
            🏆 Top Courses by Students
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topCourses}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#16a34a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ================= Courses Table ================= */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-center">Price</th>
              <th className="px-4 py-3 text-center">Students</th>
              <th className="px-4 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-3 font-medium">{c.title}</td>
                <td className="px-4 py-3 text-center">৳{c.price}</td>
                <td className="px-4 py-3 text-center">{c.students}</td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge status={c.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= Reusable ================= */

function Card({ title, value, color = "gray" }) {
  const colors = {
    gray: "bg-gray-100 text-gray-800",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className={`p-4 rounded-xl shadow ${colors[color]}`}>
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-gray-200 text-gray-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
