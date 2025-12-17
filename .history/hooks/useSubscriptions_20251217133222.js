"use client";
import { useQuery } from "@tanstack/react-query";

export default function useSubscriptions(userId) {

    const { data: session, status } = useSession();
    console.log(session)

  return useQuery({
    queryKey: ["subscriptions", userId],
    queryFn: async () => {
      const url = userId
        ? `/api/subscriptions?userId=${userId}`
        : "/api/subscriptions";

      console.log("Fetching from URL:", url); // debug

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("ডাটা আনতে সমস্যা হয়েছে");
      }

      const data = await res.json();
      console.log("Fetched subscriptions inside hook:", data);

      return data;
    },
    enabled: true, // সব সময় fetch হবে
  });
}
