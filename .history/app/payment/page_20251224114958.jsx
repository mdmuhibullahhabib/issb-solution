"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import PaymentSuccessModal from "./components/PaymentSuccessModal";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // sessionStorage থেকে courseData load করা
  useEffect(() => {
    const data = sessionStorage.getItem("paymentData");
    if (data) setPaymentInfo(JSON.parse(data));
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        courseId: paymentInfo.courseId,
        price: paymentInfo.price,
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

        // modal open
                setTimeout(() => {
          setShowSuccessModal(true); 
        }, 500);
      } else {
        toast.error(result.message || "কিছু একটা সমস্যা হয়েছে ❌");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("কিছু একটা সমস্যা হয়েছে ❌");
    }
  };

  if (!paymentInfo) return <p>Loading...</p>;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mt-[-90px] px-4">
      <Toaster position="top-Middle" reverseOrder={false} />
            <PaymentSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 md:mt-24 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
          পেমেন্ট: {paymentInfo.title}
        </h1>
        <p className="text-center text-slate-600 mt-2">
          নিচের নাম্বারে ৳{paymentInfo.price} দিয়ে সেন্ড মানি করুন
        </p>

        <div className="mt-6 bg-slate-100 border border-dashed border-slate-300 rounded-xl p-4 text-center">
          <p className="text-sm text-slate-500">সেন্ড মানি নাম্বার</p>
          <p className="text-2xl font-bold text-green-600 mt-1">01XXXXXXXXX</p>
          <p className="text-xs text-slate-500 mt-1">(bKash / Nagad)</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">আপনার নাম</label>
            <input
              type="text"
              placeholder="আপনার পূর্ণ নাম"
              {...register("name", { required: "নাম অবশ্যই দিতে হবে" })}
              className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">আপনার মোবাইল নাম্বার</label>
            <input
              type="tel"
              placeholder="01XXXXXXXXX"
              {...register("phone", { required: "ফোন নাম্বার দিতে হবে" })}
              className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">ট্রানজেকশন আইডি</label>
            <input
              type="text"
              placeholder="Transaction ID"
              {...register("trxId", { required: "Transaction ID দিতে হবে" })}
              className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.trxId ? "border-red-500" : ""}`}
            />
            {errors.trxId && <p className="text-red-500 text-sm mt-1">{errors.trxId.message}</p>}
          </div>

          <button
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
          >
            {loading ? "জমা হচ্ছে..." : `৳${paymentInfo.price} দিয়ে পেমেন্ট সাবমিট করুন`}
          </button>
        </form>
      </div>
    </section>
  );
}
