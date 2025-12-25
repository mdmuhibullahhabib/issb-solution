"use client";

import { Clock, Users } from "lucide-react";
import Link from "next/link";
import useCourses from "@/hooks/useCourses";
import CourseDetailsSkeleton from "./components/CourseDetailsSkeleton";

export default function CourseCards() {
  const { courses, isLoading, isError, error } = useCourses();

  if (isLoading) {
    return <CourseDetailsSkeleton/>;
  }

  if (isError) {
    return <p className="text-center text-red-600">Failed to load courses</p>;
  }

  return (
    <section className="px-4 md:px-10 py-10">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {courses.map((course) => (
          <Link
            href={`/course-details/${course.slug}`}
            key={course._id}
            className="rounded-2xl border border-gray-200 overflow-hidden bg-white"
          >
            {/* HEADER */}
            <div className="relative h-[170px] bg-gradient-to-br from-[#002b1c] to-[#00160f] text-white flex flex-col items-center justify-center text-center px-4">
              <p className="text-sm tracking-widest font-semibold text-green-400">
                MISSION <span className="text-yellow-400">ISSB</span>
              </p>

              <h3 className="text-lg md:text-xl font-bold mt-2">
                {course.headerTitle}
              </h3>

              <p className="text-sm opacity-80 mt-1">
                {course.subtitle}
              </p>

              <p className="text-xs mt-3 opacity-70">
                Specially Tailored for ISSB
              </p>

              <div className="flex gap-4 mt-4">
                {course.forces?.map((force) => (
                  <span
                    key={force}
                    className="text-xs border px-2 py-[2px] rounded"
                  >
                    {force}
                  </span>
                ))}
              </div>
            </div>

            {/* BODY */}
            <div className="p-4">
              <h4 className="text-[15px] font-semibold text-gray-800 leading-snug">
                {course.title}
              </h4>

              <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.enrolled} জন কোর্সটি করেছে
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-lg font-bold text-gray-900">
                    Tk. {course.price?.current}
                  </span>
                  <span className="text-sm text-gray-400 line-through ml-2">
                    Tk. {course.price?.old}
                  </span>
                </div>

                <button className="border border-gray-300 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-100 transition">
                  বিস্তারিত
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
