export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Overview</h1>
      <p className="text-gray-600">
        Welcome to the admin dashboard! Here you can manage users, products, and orders.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="text-3xl font-bold mt-2">87</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-3xl font-bold mt-2">$5,240</p>
        </div>
      </div>
    </div>
  );
}