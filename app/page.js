"use client"

import IssbProcess from "@/components/home/IssbProcess";
import CoursesSection from "@/components/home/CoursesSection";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <div>
      <Banner/>
      <IssbProcess/>
      <CoursesSection/>
    </div>
    
  );
}
