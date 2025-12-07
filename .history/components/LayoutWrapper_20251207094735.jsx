"use client";

import { usePathname } from "next/navigation";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isAuth = pathname.startsWith("/auth");

  return (
    <>
      {!isAdmin && !isAuth && <Navbar />}

      <main>{children}</main>

      {!isAdmin && !isAuth && <Footer />}
    </>
  );
}