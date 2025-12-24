"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import PaymentSuccessModal from "./components/PaymentSuccessModal";
import { useSession } from "next-auth/react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { data: session } = useSession(); // ✅ session

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ================= sessionStorage থেকে course data ================= */
  useEffect(() => {
    const data = sessionStorage.getItem("paymentData");
    if (data) setPaymentInfo(JSON.parse(data));
  }, []);

  /* ================= Submit ================= */
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        email: session?.user?.email,        // ✅ NEW (gmail)
        courseId: paymentInfo.courseId,     // ✅ already
        price: paymentInfo.price,           // ✅ already
      };

      const res = await fetch("/api/manual-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      setLoading(false);

      if (res.ok) {
        toast.success("পেমেন্ট তথ্য সফলভাবে জমা হয়েছে ✅");
        reset();

        setTimeout(() => {
          setShowSuccessModal(true); // ✅ modal
        }, 500);
      } else {
        toast.error(result.message || "কিছু একটা সমস্যা হয়েছে ❌");
      }
    } catch (error) {
      setLoading(false);
      toast.error("কিছু একটা সমস্যা হয়েছে ❌");
    }
  };

  if (!paymentInfo) return <p>Loading...</p>;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mt-[-90px] px-4">
      <Toaster position="top-center" />
      <PaymentSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 md:mt-24 md:p-8">
        {/* ================= Title ================= */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
          পেমেন্ট: {paymentInfo.title}
        </h1>
        <p className="text-center text-slate-600 mt-2">
          নিচের নাম্বারে ৳{paymentInfo.price} দিয়ে সেন্ড মানি করুন
        </p>

        {/* ================= Send Money Number ================= */}
        <div className="mt-6 bg-slate-100 border border-dashed border-slate-300 rounded-xl p-4 text-center">
          <p className="text-sm text-slate-500">সেন্ড মানি নাম্বার</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            01XXXXXXXXX
          </p>
          <p className="text-xs text-slate-500 mt-1">(বিকাশ / নগদ)</p>
        </div>

        {/* ================= Form ================= */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

          {/* 🔹 Name */}
          <div>
            <label className="block text-sm font-medium">আপনার নাম</label>
            <input
              {...register("name", { required: "নাম দিতে হবে" })}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="পূর্ণ নাম"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* 🔹 Phone */}
          <div>
            <label className="block text-sm font-medium">আপনার মোবাইল নাম্বার</label>
            <input
              {...register("phone", { required: "ফোন নাম্বার দিতে হবে" })}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="01XXXXXXXXX"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* 🔹 Payment Method (NEW) */}
          <div>
            <label className="block text-sm font-medium">পেমেন্ট মাধ্যম</label>
            <select
              {...register("paymentMethod", { required: "পেমেন্ট মাধ্যম নির্বাচন করুন" })}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            >
              <option value="">নির্বাচন করুন</option>
              <option value="bkash">বিকাশ</option>
              <option value="nagad">নগদ</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
            )}
          </div>

          {/* 🔹 Transaction ID */}
          <div>
            <label className="block text-sm font-medium">ট্রানজেকশন আইডি</label>
            <input
              {...register("trxId", { required: "Transaction ID দিতে হবে" })}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="Transaction ID"
            />
            {errors.trxId && <p className="text-red-500 text-sm">{errors.trxId.message}</p>}
          </div>

          {/* 🔹 Screenshot (OPTIONAL) */}
  <div className="mt-4">
  <label className="block text-sm font-semibold text-slate-700 mb-1">
    পেমেন্ট স্ক্রিনশট <span className="text-slate-400 font-normal">(ঐচ্ছিক)</span>
  </label>

  <div className="relative flex flex-col items-center justify-center w-full border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 transition p-6 cursor-pointer">

    {/* Icon */}
    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
      <span className="text-green-600 text-xl">📷</span>
    </div>

    {/* Text */}
    <p className="text-sm text-slate-600 font-medium">
      স্ক্রিনশট আপলোড করুন
    </p>
    <p className="text-xs text-slate-400 mt-1">
      JPG, PNG (Max 5MB)
    </p>

    {/* Input */}
    <input
      type="file"
      accept="image/*"
      {...register("screenshot")} // ✅ Optional
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />
  </div>

  {/* Helper text */}
  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
    স্ক্রিনশট দিলে আমাদের পেমেন্ট যাচাই দ্রুত সম্পন্ন হবে
  </p>
</div>

          {/* 🔹 Submit */}
          <button
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "জমা হচ্ছে..." : `৳${paymentInfo.price} দিয়ে পেমেন্ট সাবমিট করুন`}
          </button>
        </form>
      </div>
    </section>
  );
}
