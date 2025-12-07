"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    registerUser(data);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-full border border-gray-300 px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-[#FE6A44]"
          {...register("name", { required: "Full name is required" })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-full border border-gray-300 px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-[#FE6A44]"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-full border border-gray-300 px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-[#FE6A44]"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button className="w-full bg-[#FE6A44] text-white font-medium py-2 rounded-full hover:opacity-90 transition">
        Sign Up
      </button>
    </form>
  );
}