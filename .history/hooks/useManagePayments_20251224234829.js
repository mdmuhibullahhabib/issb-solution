"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function useManagePayments() {
  const { data: session, status } = useSession();

  // 👉 Admin protection চাইলে এখানে role চেকও করতে পারো
  const adminEmail = session?.user?.email;

  const {
    data: payments = [], isLoading, isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["admin-payments"],
    enabled: status === "authenticated" && !!adminEmail,
    queryFn: async () => {
      const res = await fetch("/api/admin/payments");

      if (!res.ok) {
        throw new Error("পেমেন্ট ডাটা লোড করা যায়নি");
      }

      const data = await res.json();

      console.log("Fetched payments:", data);

      return data;
    },
  });

  return {
    payments,
    isLoading,
    isError,
    error,
    refetch,
  };
}
