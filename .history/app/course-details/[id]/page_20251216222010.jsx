"use client";

import Image from "next/image";
import { CheckCircle, PlayCircle } from "lucide-react";
import { CheckCircle, PlayCircle } from "lucide-react";

export default function CourseDetails() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          ISSB: The Ultimate Mind Hacks 6 Months Subscription
        </h1>

        <p className="text-gray-600 leading-relaxed">
          ৬ মাসের অধিক সময় ধরে ISSB ক্যাডেটদের জন্য নিয়মিত ক্লাস, মক টেস্ট এবং
          সাইকোলজিক্যাল গাইডলাইনের মাধ্যমে সম্পূর্ণ প্রস্তুতি নিশ্চিত করা হবে।
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
          {[
            "প্রফেশনাল গাইডলাইন",
            "ফুল টেস্ট",
            "মেন্টাল প্রিপারেশন গাইড",
            "সাইকোলজিক্যাল ডেভেলপমেন্ট",
            "ম্যারাথন ক্লাস",
            "মেন্টর সাপোর্ট",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Course Details */}
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-lg mb-3">কোর্সের বিস্তারিত বিবরণ</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
            <li>IQ Practice</li>
            <li>PPDT</li>
            <li>Picture Story</li>
            <li>Incomplete Story</li>
            <li>Incomplete Sentences</li>
            <li>Word Association Test</li>
            <li>Group Discussion</li>
            <li>Extempore Speech</li>
            <li>Essay Writing</li>
            <li>Self Criticism</li>
            <li>Biodata Analysis</li>
          </ul>
        </div>

        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-lg mb-3">এই সাবস্ক্রিপশনটি যাদের জন্য</h2>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
            <li>যারা আইএসএসবিতে অংশগ্রহণ করবে।</li>
            <li>যারা কথা বলতে গেলে নার্ভাস হয়ে যাও।</li>
            <li>যারা ঢাকার বাইরে থেকে প্রস্তুতি নিতে চাও।</li>
            <li>যাদের অফলাইন কোচিং এ থাকা-খাওয়ার সমস্যা রয়েছে।</li>
          </ul>
        </div>

        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-lg mb-3">মেন্টরদের সম্পর্কে</h2>
          <p>অভিজ্ঞ এক্স অফিস্যার ক্যাডেট ও গ্রিনকার্ড হোল্ডার তাদের মূল্যবান মতামত ও অভিজ্ঞতার আলোকে আইএসএসবি গাইডলাইন প্রদান করেছে এই ওয়েবসাইটে।
          </p>
        </div>
      </div>
      {/* GAQDIvision */}
      <GAQDivition/>

      {/* Right Sidebar */}
      <div className="border rounded-2xl shadow-sm p-4 space-y-4 h-fit">
        {/* Video Preview */}
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="/course-preview.jpg"
            alt="Course Preview"
            width={400}
            height={220}
            className="w-full object-cover"
          />
          <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white" />
        </div>

        <h3 className="font-semibold text-sm">
          ISSB: The Ultimate Mind Hacks 6 Months Subscription
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700">৳1500</span>
          <span className="line-through text-gray-400">৳2500</span>
        </div>

        {/* Timer */}
        <div className="grid grid-cols-4 text-center text-sm">
          {["দিন", "ঘন্টা", "মিনিট", "সেকেন্ড"].map((t) => (
            <div key={t}>
              <p className="font-bold text-green-700">00</p>
              <p className="text-gray-500">{t}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl font-semibold">
          সাবস্ক্রিপশন কিনুন
        </button>

        {/* Includes */}
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-2 text-sm">This course includes:</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✔ লাইভ সেশন</li>
            <li>✔ প্রতিটি টপিক টেস্ট</li>
            <li>✔ সাইকোলজিক্যাল গাইডলাইন</li>
            <li>✔ ২৪/৭ মেন্টর সাপোর্ট</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
