"use client"

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

// Fake Data Example (You can replace this with API data)
const fakeCourse = {
  id: "issb-101",
  title: "ISSB Advanced Preparation Course",
  description:
    "A complete ISSB preparation course including psychology, verbal, non-verbal, interview, and physical test guidelines.",
  modules: [
    { id: "m1", title: "Psychology Test", lessons: 12 },
    { id: "m2", title: "Interview Guidelines", lessons: 8 },
    { id: "m3", title: "Verbal & Non-Verbal Reasoning", lessons: 20 },
    { id: "m4", title: "Group Task Training", lessons: 6 },
    { id: "m5", title: "Physical Test Preparation", lessons: 10 }
  ]
};

export default function CoursePage()({ course }) {
  const course = fakeCourse;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">📘 My Purchased Course</h1>

        <Card className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center gap-2">
              <CheckCircle className="text-green-500" />
              {course?.title || "Course Title"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              {course?.description || "This is a detailed course description for students who have already purchased the course."}
            </p>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-6">
              {course?.modules?.map((module, index) => (
                <Link
                  href={`/courses/${course.id}/module/${module.id}`}
                  key={index}
                  className="border p-4 rounded-xl bg-white shadow hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-xl mb-2">{module.title}</h3>
                  <p className="text-gray-600 text-sm">{module.lessons} Lessons</p>
                </Link>
              )) || (
                <div className="col-span-3 text-center text-gray-500">No modules available for this course.</div>
              )}
            </div>

            <div className="mt-8 text-center">
              <Button className="px-6 py-2 text-lg">Continue Learning</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
