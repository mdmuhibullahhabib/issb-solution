"use client";

import { useState } from "react";
import AsideMenu from "./components/AsideMenu";
import PracticeQuestions from "./components/PracticeQuestions";

const IqPracticePage = () => {
  // ✅ SINGLE SOURCE OF TRUTH
  const [examType, setExamType] = useState("Verbal");
  const [category, setCategory] = useState("");

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
