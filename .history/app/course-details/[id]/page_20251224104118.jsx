"use client"

import Image from "next/image";
import { CheckCircle, PlayCircle } from "lucide-react";
import LectureDetailsAccordion from "./components/GAQDivision";
import { useParams } from "next/navigation";
import useCourses from "@/hooks/useCourses";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


export default function CourseDetails() {
  const { courses, isLoading, isError, error } = useCourses();
  const params = useParams();
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session)


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // Find course 
  const courseData = courses?.find((course) => course.slug === params.id);

  if (!courseData) return <p>Course not found</p>;

  

// bkash payment (TO DO)
// const handleBuySubscription = async () => {
//   try {
//     if (!session?.user?.email) {
//       router.push("/auth");
//       return;
//     }

//     const res = await fetch("/api/make-payment", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         courseId: courseData._id,
//       }),
//     });

//     if (!res.ok) {
//       throw new Error("Payment request failed");
//     }

//     const data = await res.json();

//     if (!data?.bkashURL) {
//       throw new Error("Invalid payment response");
//     }

//     // Redirect to bKash
//     window.location.href = data.bkashURL;

//   } catch (error) {
//     console.error("bKash Init Error:", error);
//     alert("Payment failed. Please try again.");
//   }
// };


// Manual PAyment


  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* ================= LEFT ================= */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">{courseData.title}</h1>

        <p className="text-gray-600 leading-relaxed">{courseData.description}</p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
          {courseData.features?.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* DETAILS */}
        <Section title="কোর্সের বিস্তারিত বিবরণ">
          {courseData.details?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Section>

        {/* AUDIENCE */}
        <Section title="এই সাবস্ক্রিপশনটি যাদের জন্য">
          {courseData.audience?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Section>

        {/* MENTOR */}
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold mb-2">মেন্টরদের সম্পর্কে</h2>
          <p className="text-sm text-gray-700">{courseData.mentorInfo}</p>
        </div>

        {/* LECTURE + FAQ */}
        <LectureDetailsAccordion lectures={courseData.lectures} faqs={courseData.faqs} />
      </div>

      {/* ================= RIGHT ================= */}
      <div className="border rounded-2xl p-4 space-y-4 h-fit sticky top-20">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={courseData.image}
            alt={courseData.title}
            width={400}
            height={220}
            className="w-full object-cover"
          />
          <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700">৳{courseData.price.current}</span>
          <span className="line-through text-gray-400">৳{courseData.price.old}</span>
        </div>

        <button
          onClick={handleBuySubscription}
          className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl">
          সাবস্ক্রিপশন কিনুন
        </button>

        <div className="border-t pt-3">
          <h4 className="font-semibold text-sm mb-2">This course includes:</h4>
          <ul className="text-sm space-y-1">
            {courseData.includes?.map((item) => (
              <li key={item}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Section ---------- */
function Section({ title, children }) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="font-semibold mb-3">{title}</h2>
      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">{children}</ul>
    </div>
  );
}
