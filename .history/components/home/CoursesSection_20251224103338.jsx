"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import useCourses from "@/hooks/useCourses";

export default function CoursesSection() {
  const { courses, isLoading, isError } = useCourses();

  if (isLoading) {
    return <p className="text-center py-16">Loading courses...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-16 text-red-500">
        Failed to load courses
      </p>
    );
  }

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-10">
      {/* ================= Section Header ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 uppercase">
          Our Courses
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Choose the right course to start your ISSB journey today
        </p>
      </div>

      {/* ================= Courses Grid ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <motion.div
            key={course._id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* ================= Image / Header ================= */}
            <Link href={`/course-details/${course.slug}`}>
              <div className="relative h-48 bg-gradient-to-br from-[#002b1c] to-[#00160f] flex items-center justify-center text-center px-4">
                <div className="text-white">
                  <p className="text-xs tracking-widest font-semibold text-green-400">
                    Mission <span className="text-yellow-400"></span>
                  </p>

                  <h3 className="text-lg font-bold mt-2">
                    {course.headerTitle}
                  </h3>

                  <p className="text-sm opacity-80 mt-1">
                    {course.subtitle}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {course.forces?.map((force) => (
                      <span
                        key={force}
                        className="text-xs border border-white/40 px-2 py-[2px] rounded"
                      >
                        {force}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            {/* ================= Body ================= */}
            <div className="p-5 flex flex-col flex-1">
              <h4 className="text-[15px] font-semibold text-gray-800 leading-snug">
                {course.title}
              </h4>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.enrolled} জন
                </div>
              </div>

              {/* Price + CTA */}
              <div className="mt-auto pt-4 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-gray-900">
                    Tk. {course.price?.current}
                  </span>
                  {course.price?.old && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      Tk. {course.price.old}
                    </span>
                  )}
                </div>

                <Link
                  href={`/course-details/${course.slug}`}
                  className="bg-green-900 text-white px-4 py-2 rounded-lg
                             text-sm font-semibold hover:bg-green-800 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
