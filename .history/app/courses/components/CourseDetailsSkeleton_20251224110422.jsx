export default function CourseDetailsSkeleton() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 animate-pulse">
      
      {/* LEFT */}
      <div className="lg:col-span-2 space-y-6">
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-xl">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="h-4 bg-gray-200 rounded"></div>
          ))}
        </div>

        {[1,2,3].map(i => (
          <div key={i} className="border rounded-xl p-5 space-y-2">
            <div className="h-5 w-1/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="border rounded-2xl p-4 space-y-4 h-fit">
        <div className="h-40 bg-gray-200 rounded-xl"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-300 rounded-xl"></div>

        <div className="space-y-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>

    </section>
  );
}
