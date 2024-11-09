"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ setDrawerOpened }) => {
    const [navOpened, setNavOpened] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/contact",
            label: "Contact",
        },
        {
            href: "/about",
            label: "About",
        },
        {
            href: "/sign-up",
            label: "Sign Up",
        },
    ];

    return (
        <nav className="max-width py-5 sm:py-6">
            <div className="flex items-center justify-between gap-4">
                <Link href={"/"} className="text-2xl font-semibold font-inter">
                    ShopOn
                </Link>
                {/* Nav Links */}
                <ul className="hidden lg:flex gap-2">
                    {navLinks.map((item) => (
                        <li
                            key={item.href}
                            className={`h-fit relative ${
                                pathname === item.href
                                    ? "border-b-[2.5px] border-gray-300"
                                    : "transform transition-transform duration-200 hover:-translate-y-1"
                            }`}
                        >
                            <Link href={item.href} className="px-1.5">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li
                        className={`h-fit relative
                                     transform transition-transform duration-200 hover:translate-x-1
                            `}
                    >
                        <button
                            onClick={(e) => setDrawerOpened((prev) => !prev)}
                        >
                            Categories
                        </button>
                    </li>
                </ul>

                {/* Controls */}
                <div className="flex gap-5">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="hidden lg:flex items-center gap-2 bg-[#F5F5F5] py-2 overflow-hidden rounded-sm"
                    >
                        <input
                            type="text"
                            className="text-sm bg-transparent ml-4 border-none outline-none"
                            placeholder="What are you looking for?"
                        />
                        <button type="submit" className="px-2 text-lg">
                            <IoSearchOutline />
                        </button>
                    </form>
                    <button className="text-xl active:scale-[.80] transition-transform">
                        <FaRegHeart />
                    </button>
                    <button className="text-xl active:scale-[.80] transition-transform">
                        <MdOutlineShoppingCart />
                    </button>

                    <button
                        className="text-2xl active:scale-[.80] transition-transform lg:hidden"
                        onClick={() => setNavOpened((prev) => !prev)}
                    >
                        <FiMenu />
                    </button>
                </div>
            </div>

            {/* For small devices */}
            <div
                className={`grid lg:hidden transition-[grid-template-rows] duration-300 ${
                    navOpened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="flex flex-col items-center gap-5 overflow-hidden">
                    {/* Nav Links */}
                    <ul className="flex flex-col gap-3 items-center">
                        {navLinks.map((item) => (
                            <li
                                key={item.href}
                                className={`h-fit w-fit relative ${
                                    pathname === item.href
                                        ? "border-b-[2.5px] border-gray-300"
                                        : "transform transition-transform duration-200 hover:-translate-y-1"
                                }`}
                            >
                                <Link href={item.href} className="py-1.5">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li
                            className={`h-fit relative
                                     transform transition-transform duration-200 hover:translate-x-1
                            `}
                        >
                            <button
                                onClick={(e) =>
                                    setDrawerOpened((prev) => !prev)
                                }
                            >
                                Categories
                            </button>
                        </li>
                    </ul>

                    {/* Controls */}
                    <div className="flex gap-5">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center gap-2 bg-[#F5F5F5] py-2 overflow-hidden rounded-sm"
                        >
                            <input
                                type="text"
                                className="text-sm bg-transparent ml-4 border-none outline-none"
                                placeholder="What are you looking for?"
                            />
                            <button type="submit" className="px-2 text-lg">
                                <IoSearchOutline />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
