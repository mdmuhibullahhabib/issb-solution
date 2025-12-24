"use client";

import { usePathname } from "next/navigation";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isAuth = pathname.startsWith("/auth");
  const isExam = pathname.startsWith("/exam/");
  const isResult = pathname.startsWith("/result/");
  const isPayment = pathname.startsWith("/payment");


    const hideLayout = isAdmin || isAuth || isExam || isResult || isPayment;

  return (
    <>
      {!hideLayout && <Navbar />}

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}