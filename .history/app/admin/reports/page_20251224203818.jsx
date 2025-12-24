"use client";

const fakeReports = [
  {
    id: 1,
    student: "Rahim Uddin",
    email: "rahim@gmail.com",
    course: "ISSB Ultimate 6 Months",
    amount: 4500,
    method: "bKash",
    status: "Success",
    date: "20 Jan 2025",
  },
  {
    id: 2,
    student: "Karim Ahmed",
    email: "karim@gmail.com",
    course: "ISSB Crash Course",
    amount: 2500,
    method: "Nagad",
    status: "Pending",
    date: "19 Jan 2025",
  },
  {
    id: 3,
    student: "Hasan Ali",
    email: "hasan@gmail.com",
    course: "ISSB Psychology Special",
    amount: 1800,
    method: "bKash",
    status: "Success",
    date: "18 Jan 2025",
  },
];

export default function AdminReports() {
  const totalRevenue = fakeReports
    .filter((r) => r.status === "Success")
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <section className="p-4 md:p-6 space-y-6">
      {/* ================= Title ================= */}
      <h1 className="text-2xl font-bold">📊 Reports</h1>

      {/* ================= Summary Cards ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Total Payments" value={fakeReports.length} />
        <Card title="Total Revenue" value={`৳${totalRevenue}`} color="green" />
        <Card
          title="Successful"
          value={fakeReports.filter((r) => r.status === "Success").length}
          color="blue"
        />
        <Card
          title="Pending"
          value={fakeReports.filter((r) => r.status === "Pending").length}
          color="yellow"
        />
      </div>

      {/* ================= Table ================= */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
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
            {fakeReports.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3">{r.date}</td>

                <td className="px-4 py-3">
                  <p className="font-medium">{r.student}</p>
                  <p className="text-xs text-gray-500">{r.email}</p>
                </td>

                <td className="px-4 py-3 text-center">{r.course}</td>

                <td className="px-4 py-3 text-center font-semibold">
                  ৳{r.amount}
                </td>

                <td className="px-4 py-3 text-center">{r.method}</td>

                <td className="px-4 py-3 text-center">
                  <StatusBadge status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ================= Components ================= */

function Card({ title, value, color = "gray" }) {
  const colors = {
    gray: "bg-gray-100 text-gray-800",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className={`rounded-xl p-4 ${colors[color]}`}>
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        status === "Success"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
}
