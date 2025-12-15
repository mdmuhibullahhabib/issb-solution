"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DrawerMenu from "../user/UserDrawerMenu";


// Fake user data
const fakeUser = {
    name: "Muhibullah Habib",
    email: "muhib@example.com",
    avatar: "https://i.pravatar.cc/100?img=11",
    role: "admin",
};

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const router = useRouter();
        const [drawerOpen, setDrawerOpen] = useState(false);
    const [userDrawerOpen, setUserDrawerOpen] = useState(false);
    const { data: session, status } = useSession();
    console.log(session)
    console.log(status)

    // Scroll detection for shadow effect
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "হোম", href: "/" },
        { name: "কোর্স", href: "/courses" },
        { name: "যোগাযোগ", href: "/contact" },
    ];

    // User icon click
    const handleUserClick = () => {
        if (status == "authenticated") {
            setUserDrawerOpen(true);
        } else {
            router.push("/auth");
        }
    };

    return (
        <>
            <nav
                className={`max-w-xl mx-auto fixed top-0 z-50 transition-all ${scroll ? "bg-white shadow-md" : "bg-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Mission<span className="text-green-600">ISSB</span>
                    </Link>


                    {/* Auth Buttons */}
                    <div className="hidden items-center md:flex gap-4">
                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 font-semibold hover:text-blue-600 transition font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* User Icon */}
                        <button
                            onClick={handleUserClick}
                            className="p-2 rounded-full hover:bg-gray-100 transition duration-150"
                        >
                            {status == "authenticated" ? (
                                <img
                                    src={fakeUser?.avatar}
                                    alt="user"
                                    className="h-8 w-8 rounded-full border"
                                />
                            ) : (
                                <Link
                                    href="/auth"
                                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                                >
                                    Login
                                </Link>
                            )}
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden bg-white fixed top-[64px] left-0 w-full h-screen transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="flex flex-col gap-6 px-6 py-6 text-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-gray-700 hover:text-blue-600"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <hr />

                        <Link
                            href="/auth/login"
                            onClick={() => setOpen(false)}
                            className="text-blue-600 font-semibold"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </nav>

            <DrawerMenu
                isOpen={userDrawerOpen}
                onClose={() => setUserDrawerOpen(false)}
                // user={user}
            />
        </>
    );
}
