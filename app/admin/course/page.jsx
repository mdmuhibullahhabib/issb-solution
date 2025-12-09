"use client";

import React, { useState } from "react";

const ManageCourses = () => {
  // Fake Course Data
  const coursesData = [
    {
      id: 1,
      title: "ISSB Complete Preparation",
      instructor: "Captain Rahim",
      price: 1200,
      students: 350,
      status: "active",
      category: "ISSB",
    },
    {
      id: 2,
      title: "Physical Training & Mental Test",
      instructor: "Major Farid",
      price: 900,
      students: 220,
      status: "inactive",
      category: "Training",
    },
    {
      id: 3,
      title: "Officer Cadet Model Test Bundle",
      instructor: "Lt. Arif",
      price: 1500,
      students: 500,
      status: "active",
      category: "Model Test",
    },
  ];

  const [courses, setCourses] = useState(coursesData);

  const removeCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
        Manage Courses
      </h1>

      {/* ADD NEW COURSE BTN */}
      <div className="mb-6">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          + Add New Course
        </button>
      </div>

      {/* COURSES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-xl bg-white shadow-md p-5 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold">{course.title}</h2>
              <span className="text-sm text-gray-500">ID: {course.id}</span>
            </div>

            <p className="text-gray-700 font-semibold mt-2">
              Instructor: {course.instructor}
            </p>

            {/* STATUS */}
            <div className="mt-3">
              <span
                className={`px-2 py-1 text-xs font-bold rounded ${
                  course.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {course.status.toUpperCase()}
              </span>
            </div>

            {/* PRICE & STUDENTS */}
            <p className="text-sm mt-3">
              <span className="font-semibold">Price:</span> ৳{course.price}
            </p>

            <p className="text-sm">
              <span className="font-semibold">Enrolled Students:</span>{" "}
              {course.students}
            </p>

            <p className="text-sm mt-1">
              <span className="font-semibold">Category:</span> {course.category}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 mt-5">
              <button className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
                Edit
              </button>
              <button
                onClick={() => removeCourse(course.id)}
                className="w-full py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <p className="text-center mt-8 text-gray-500">
          No courses available. Add a new course.
        </p>
      )}
    </div>
  );
};

export default ManageCourses;
