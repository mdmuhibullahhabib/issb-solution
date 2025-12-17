"use client";

import { useState } from "react";
import AsideMenu from "./components/AsideMenu";
import PracticeQuestions from "./components/PracticeQuestions";
import useSubscriptions from "@/hooks/useSubscriptions";

const IqPracticePage = () => {
  // ✅ SINGLE SOURCE OF TRUTH
  const [examType, setExamType] = useState("Verbal");
  const [category, setCategory] = useState("");
      const { subscription, isLoading, error } = useSubscriptions();
      console.log("subscription data", subscription[0])
  

  const isSubscribed = subscription[0]?.status === "active";

  return (
    <div className="mt-10 flex">
      <AsideMenu
        examType={examType}
        setExamType={setExamType}
        category={category}
        setCategory={setCategory}
      />

      <PracticeQuestions
        examType={examType}
        setExamType={setExamType}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
};

export default IqPracticePage;
