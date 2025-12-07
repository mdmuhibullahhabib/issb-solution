"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    // data.email এবং data.password পাওয়া যাচ্ছে
    const result = await signIn("credentials", {
      // callbackUrl: "/",
      redirect: false,
      email: data.email,
      password: data.password,
    }); 
    console.log(data)
    if (result?.error) {
      alert("Login failed: " + result.error);
    } else {
      alert("Login successful!");
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button className="w-full bg-[#FE6A44] text-white font-medium py-2 rounded-full hover:opacity-90 transition">
        Login
      </button>
    </form>
  );
}