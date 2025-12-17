"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function useSubscriptions() {
  const { data: session, status } = useSession();
  const email = session?.user?.email;

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
        `/api/subscriptions?userEmail=${email}`
      );

      if (!res.ok) {
        throw new Error("Subscription ডাটা আনতে সমস্যা হয়েছে");
      }

      const data = await res.json();

      //  fetched data log
      console.log("Fetched subscriptions (inside hook):", data);

      return data;
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
