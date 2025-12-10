"use client";

import { FiX, FiUser, FiShoppingBag, FiSettings, FiGrid, FiLogOut } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function DrawerMenu({ isOpen, onClose, user = {} }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session)

  const handleNavigate = (path) => {
    onClose();
    router.push(path);
  };

  const handleLogout = async () => {
    // You can replace with your logout logic
    console.log("User logged out");
    onClose();
    await signOut();
  };

  const isAdmin = user?.role === "admin";

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <Image
              src={user?.photo || "https://i.ibb.co/5j9n3yH/default-avatar.png"}
              width={40}
              height={40}
              alt="User avatar"
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">
                {user?.name || "Guest User"}
              </p>
              <p className="text-xs text-gray-500">
                {isAdmin ? "Administrator" : "Regular User"}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500">
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-gray-700">
          <button
            onClick={() => handleNavigate("/profile")}
            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <FiUser className="text-red-500" />
            <span>My Profile</span>
          </button>

          <Link
            href={"/mycourse"}
            // onClick={() => handleNavigate("/mycourse")}
            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <FiShoppingBag className="text-red-500" />
            <span>My Courses</span>
          </Link>

          <Link
            href={"/admin/dashboard"}
            // onClick={() => handleNavigate("/mycourse")}
            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition"
          >
            <FiShoppingBag className="text-red-500" />
            <span>Admin Dashboard</span>
          </Link>

          {isAdmin && (
            <button
              onClick={() => handleNavigate("/admin/dashboard")}
              className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-100 transition"
            >
              <FiGrid className="text-red-500" />
              <span>Admin Dashboard</span>
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full py-2 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </motion.div>
    </>
  );
}