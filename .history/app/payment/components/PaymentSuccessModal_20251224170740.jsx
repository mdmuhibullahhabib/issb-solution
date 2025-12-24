"use client"
import { CheckCircle } from "lucide-react";
import Link from "next/link";


export default function PaymentSuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 text-center animate-scaleIn">
        
        {/* Icon */}
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />

        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-800 mt-4">
          পেমেন্ট সফল হয়েছে 🎉
        </h2>

        {/* Message */}
        <p className="text-slate-600 mt-3 leading-relaxed">
          আপনার পেমেন্ট তথ্য সফলভাবে গ্রহণ করা হয়েছে।
        </p>

        <p className="text-slate-600 mt-2 leading-relaxed">
          <span className="font-semibold text-slate-800">
            ২৪ ঘণ্টার মধ্যে
          </span>{" "}
          আপনার অ্যাকাউন্টে কোর্সের সম্পূর্ণ অ্যাক্সেস প্রদান করা হবে।
        </p>

        {/* Divider */}
        <div className="h-px bg-slate-200 my-5"></div>

        {/* Footer text */}
        <p className="text-sm text-slate-500">
          যদি নির্ধারিত সময়ের মধ্যে অ্যাক্সেস না পান, অনুগ্রহ করে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।
        </p>

        {/* Button */}
        <Link
        href={}
          onClick={onClose}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
        >
          ঠিক আছে
        </Link>
      </div>
    </div>
  );
}
