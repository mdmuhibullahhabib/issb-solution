"use client";

import { Clock, Users } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Live ISSB Course with WebApp",
    subtitle: "Future Officer Cadets",
    duration: "৬ মাস",
    enrolled: 38,
    price: 4500,
    oldPrice: 6000,
    services: ["Bangladesh Army", "Bangladesh Navy", "Bangladesh Airforce"],
  },
  {
    id: 2,
    title: "ISSB: The Ultimate Mind Hacks 6 Months Subscription",
    subtitle: "Future Officer Cadets",
    duration: "৬ মাস",
    enrolled: 638,
    price: 1500,
    oldPrice: 2500,
    services: ["Bangladesh Army", "Bangladesh Navy", "Bangladesh Airforce"],
  },
];

export default function CourseCs() {
  return (
    <section className="py-12 px-4 md:px-10">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition"
          >
            {/* Header */}
            <div className="bg-green-900 text-white p-6 text-center relative">
              <h3 className="text-lg md:text-xl font-bold">{course.title}</h3>
              <p className="text-sm mt-1">{course.subtitle}</p>

              {/* Services */}
              <div className="flex justify-center gap-4 mt-4 text-xs md:text-sm">
                {course.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-green-800 px-2 py-1 rounded"
                  >
                    ✓ {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex justify-between items-center text-gray-600 text-sm md:text-base mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> {course.enrolled} জন কোর্সটি করেছে
                </div>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xl font-bold text-green-900">
                    Tk. {course.price}
                  </span>{" "}
                  <span className="line-through text-gray-400 ml-2">
                    Tk. {course.oldPrice}
                  </span>
                </div>
                <button className="bg-white border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-green-700 hover:text-white transition">
                  বিস্তারিত
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
