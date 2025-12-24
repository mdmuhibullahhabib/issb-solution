"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("trxId", data.trxId);

      const res = await fetch("/api/manual-payment", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      setLoading(false);

      if (res.ok) {
        alert("পেমেন্ট তথ্য সফলভাবে জমা হয়েছে ✅");
        reset();
      } else {
        alert(result.message || "কিছু একটা সমস্যা হয়েছে ❌");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("কিছু একটা সমস্যা হয়েছে ❌");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mt-[-90px] px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 md:mt-24 md:p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
          পেমেন্ট
        </h1>
        <p className="text-center text-slate-600 mt-2">
          নিচের নাম্বারে সেন্ড মানি করুন
        </p>

        {/* Payment Number */}
        <div className="mt-6 bg-slate-100 border border-dashed border-slate-300 rounded-xl p-4 text-center">
          <p className="text-sm text-slate-500">সেন্ড মানি নাম্বার</p>
          <p className="text-2xl font-bold text-green-600 mt-1">01XXXXXXXXX</p>
          <p className="text-xs text-slate-500 mt-1">(bKash / Nagad)</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              আপনার নাম
            </label>
            <input
              type="text"
              placeholder="আপনার পূর্ণ নাম"
              {...register("name", { required: "নাম অবশ্যই দিতে হবে" })}
              className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              আপনার মোবাইল নাম্বার
            </label>
            <input
              type="tel"
              placeholder="01XXXXXXXXX"
              {...register("phone", { required: "ফোন নাম্বার দিতে হবে" })}
              className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Transaction ID */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              ট্রানজেকশন আইডি
            </label>
            <input
              type="text"
              placeholder="Transaction ID"
              {...register("trxId", {
                required: "Transaction ID দিতে হবে",
              })}
              className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.trxId ? "border-red-500" : ""
              }`}
            />
            {errors.trxId && (
              <p className="text-red-500 text-sm mt-1">{errors.trxId.message}</p>
            )}
          </div>

          {/* Submit Button */}
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
