import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const messages = [
    "We sell dreams, emotions — not just courses!",
    "শুরু করার সেরা সময় ছিল গতকাল, দ্বিতীয় সেরা সময় এখনই",
    "সময় থেমে যায়নি তবে তুমি কেনো!"
  ];
  const [currentMessage, setCurrentMessage] = useState(0);

  // Update time and date every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Change message every 4 seconds
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <section className="w-full bg-white mt-10 py-16 px-4 flex flex-col items-center text-center">
      {/* Time Box */}
      <div className="bg-green-900 text-white px-6 py-2 rounded-full text-xl font-semibold shadow-md">
        {time}
      </div>

      {/* Date */}
      <p className="mt-2 text-gray-600 text-sm uppercase tracking-wider">{date}</p>

      {/* Dynamic Text */}
      <motion.div
        key={currentMessage} // Animate on change
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-2xl md:text-3xl font-bold text-green-900 text-center px-4"
      >
        {messages[currentMessage]}
      </motion.div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link
          href="/issb/iq-practice"
          className="bg-green-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition shadow-md"
        >
          Free IQ Practice
        </Link>

        <Link
          href="/iq-test"
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-500 transition shadow-md"
        >
          IQ Model Test
        </Link>
      </div>

      {/* Sub Heading */}
      <h2 className="mt-10 text-2xl md:text-3xl font-bold text-green-900 uppercase">
        YOUR ISSB JOURNEY STARTS HERE
      </h2>

      <p className="text-gray-700 mt-2 text-sm md:text-base">
        Watch this promo to know what you're missing!!
      </p>

      {/* Video Placeholder */}
      <div className="mt-8 w-full max-w-3xl">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/your-video-id"
            title="ISSB Promo Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
