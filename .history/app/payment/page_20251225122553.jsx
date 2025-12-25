"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import PaymentSuccessModal from "./components/PaymentSuccessModal";
import { useSession } from "next-auth/react";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { data: session } = useSession();

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

      let imageUrl = null;

      /* CHANGE 2: Screenshot optional upload */
      if (data.screenshot && data.screenshot[0]) {
        const formData = new FormData();
        formData.append("image", data.screenshot[0]);

        const imgRes = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        const imgData = await imgRes.json();
        imageUrl = imgData?.data?.display_url || null;
      }

      const payload = {
        ...data,
        email: session?.user?.email,
        image: imageUrl,
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
        toast.success("পেমেন্ট সফল হয়েছে ✅");
        reset();

        setTimeout(() => {
          setShowSuccessModal(true);
        }, 500);

        // Now subscriptions
        const startDate = new Date();
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 30); // 30 days

        const subscriptionPayload = {
          userId: session?.user?.id,             // 🔴 REQUIRED
          userEmail: session?.user?.email,       // 🔴 REQUIRED
          planId: "30 days",                     // 🔴 REQUIRED
          transactionId: result.insertedId, 
          price: paymentInfo.price,
          status: "pending",
          startDate,
          endDate,
          examCredit: 1,
        };

        await fetch("/api/subscriptions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscriptionPayload),
        });

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
          <div>
            <label className="block text-sm font-medium text-slate-700">
              পেমেন্ট স্ক্রিনশট <span className="text-slate-400">(ঐচ্ছিক)</span>
            </label>

            <input
              type="file"
              accept="image/*"
              {...register("screenshot")}
              className="mt-1 block w-full text-sm
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-green-50 file:text-green-700
      hover:file:bg-green-100
      cursor-pointer"
            />

            <p className="text-xs text-slate-500 mt-1">
              স্ক্রিনশট দিলে পেমেন্ট যাচাই দ্রুত হবে
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
