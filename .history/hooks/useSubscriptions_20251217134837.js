"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function useSubscriptions() {
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  clg

  const {
    data: subscriptions = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["subscriptions", email],
    enabled: !!email && status === "authenticated",
    queryFn: async () => {
      const res = await fetch(
        `/api/subscriptions?email=${email}`
      );

      if (!res.ok) {
        throw new Error("ডাটা আনতে সমস্যা হয়েছে");
      }

      return res.json();
    },
  });

  return {
    subscriptions,
    isLoading,
    isError,
    error,
    refetch,
  };
}
