"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const formData = new FormData(form);

    const res = await fetch("/api/manual-payment", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setLoading(false);

    if (res.ok) {
      alert("পেমেন্ট তথ্য সফলভাবে জমা হয়েছে ✅");
      form.reset();
    } else {
      alert(data.message || "কিছু একটা সমস্যা হয়েছে ❌");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mt-[-90px] px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 mt-24 md:p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
          ম্যানুয়াল পেমেন্ট
        </h1>
        <p className="text-center text-slate-600 mt-2">
          নিচের নাম্বারে সেন্ড মানি করুন
        </p>

        {/* Payment Number */}
        <div className="mt-6 bg-slate-100 border border-dashed border-slate-300 rounded-xl p-4 text-center">
          <p className="text-sm text-slate-500">সেন্ড মানি নাম্বার</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            01XXXXXXXXX
          </p>
          <p className="text-xs text-slate-500 mt-1">
            (bKash / Nagad)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              আপনার নাম
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="আপনার পূর্ণ নাম"
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              আপনার মোবাইল নাম্বার
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="01XXXXXXXXX"
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              ট্রানজেকশন আইডি
            </label>
            <input
              type="text"
              name="trxId"
              required
              placeholder="Transaction ID"
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              পেমেন্ট স্ক্রিনশট
            </label>
            <input
              type="file"
              name="screenshot"
              accept="image/*"
              required
              className="mt-1 w-full text-sm"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
          >
            {loading ? "জমা হচ্ছে..." : "পেমেন্ট সাবমিট করুন"}
          </button>
        </form>
      </div>
    </section>
  );
}
