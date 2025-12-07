"use client";

import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/auth");

  return (
    <>
      {/* {!hideLayout && <Navbar />} */}

      <div className=" flex justify-center items-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg px-8 py-10">
          <Link href="/" className="text-sm text-gray-500 mb-4 inline-block hover:underline">
            ← Back to home
          </Link>

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#FE6A44] rounded-2xl"></div>
          </div>

          <h2 className="text-xl font-semibold text-center">Welcome to BanglaShop</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Sign in to your account or create a new one
          </p>

          {/* Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 rounded-full font-medium transition ${
                activeTab === "login"
                  ? "bg-white shadow text-[#FE6A44]"
                  : "text-gray-500 hover:text-[#FE6A44]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2 rounded-full font-medium transition ${
                activeTab === "signup"
                  ? "bg-white shadow text-[#FE6A44]"
                  : "text-gray-500 hover:text-[#FE6A44]"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Rendering Forms */}
          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </>
  );
}