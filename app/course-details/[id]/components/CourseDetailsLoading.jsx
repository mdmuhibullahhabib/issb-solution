"use client";

export default function CourseDetailsLoading() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div> {/* Title */}
          <div className="h-4 bg-gray-200 rounded w-full"></div> {/* Desc line */}
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-xl">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
            ))}
          </div>

          {/* Details / Audience */}
          <div className="border rounded-xl p-5 space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>

          {/* Mentor */}
          <div className="border rounded-xl p-5">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mt-2"></div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border rounded-2xl p-4 space-y-4 h-fit">
          <div className="h-48 bg-gray-300 rounded-xl w-full relative"></div> {/* Image */}
          <div className="h-6 bg-gray-300 rounded w-1/3"></div> {/* Price */}
          <div className="h-10 bg-gray-400 rounded w-full mt-2"></div> {/* Button */}
          <div className="border-t pt-3 space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
