"use client";

import Image from "next/image";
import Link from "next/link";
import issb from "../../public/banner/issb.jpeg";

const forces = [
  { name: "Airforce", path: "/preliminary/airforce" },
  { name: "Navy", path: "/preliminary/navy" },
  { name: "Army", path: "/preliminary/army" },
];

export default function Banner() {
  return (
    <section className="relative w-full md:min-h-[100vh] overflow-hidden mt-[-80px]">

      {/* ================= Background Image ================= */}
      <Image
        src={issb}
        alt="Mission ISSB Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ================= Banner Content ================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4
                      min-h-[85vh] flex flex-col items-center justify-center
                      text-center text-white gap-8 md:pt-32">

        {/* Top Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {["Airforce", "Navy", "Army"].map((item) => (
            <Link
              key={item}
              href="#"
              className="px-8 py-3 rounded-full border border-white/80
                         hover:bg-white hover:text-black transition
                         font-semibold text-sm sm:text-base"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Center Big Button */}
        <Link
          href="#"
          className="px-14 py-4 rounded-full bg-red-600
                     hover:bg-red-700 transition
                     font-bold text-lg sm:text-xl shadow-xl"
        >
          JOIN MISSION ISSB
        </Link>

        {/* Bottom Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/issb/iq-practice"
            className="px-8 py-3 rounded-full bg-white text-black
                       hover:bg-gray-200 transition
                       font-semibold text-sm sm:text-base"
          >
            Free IQ Test
          </Link>

          <Link
            href="/issb/iq-test"
            className="px-8 py-3 rounded-full border border-white
                       hover:bg-white hover:text-black transition
                       font-semibold text-sm sm:text-base"
          >
            IQ Model Test
          </Link>
        </div>

      </div>
    </section>
  );
}
