"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-50">
      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-[#0A0F2D] to-[#11174A] text-white py-36 py-24 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Contact Mission ISSB
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm md:text-lg">
          Have questions or need guidance? Our team is always ready to help you
          achieve your ISSB goal.
        </p>
      </div>

      {/* ================= INFO CARDS ================= */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <Mail className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Email Us</h3>
            <p className="text-gray-600 mt-1 text-sm">
              missionissb@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
              <Phone className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Call Us</h3>
            <p className="text-gray-600 mt-1 text-sm">
              +880 1700 000 000
            </p>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
              <MapPin className="text-red-600" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Visit Us</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Mirpur, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* ================= FORM + MAP ================= */}
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* -------- FORM -------- */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
        >
          <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Fill out the form and we’ll get back to you shortly.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </div>
        </form>

        {/* -------- MAP -------- */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full min-h-[420px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.464193476278!2d90.36011687465832!3d23.766293688196873"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
