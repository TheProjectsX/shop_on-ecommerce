"use client";

import Link from "next/link";
import React from "react";

import GooglePlayImage from "@/assets/googlePlay.png";
import AppStoreImage from "@/assets/appStore.png";
import AppQrCodeImage from "@/assets/appQrCode.png";

import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-200 text-sm pb-4">
            <footer className="max-width !p-8 grid grid-cols-1 justify-items-center sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div>
                    <Link
                        href={"/"}
                        className="text-xl font-inter text-white font-semibold mb-3 block"
                    >
                        ShopOn
                    </Link>
                    <button className="mb-3">Subscribe</button>
                    <p className="text-xs mb-2">Get 10% off your first order</p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex gap-2 border-2 border-gray-500 rounded-md p-2 w-fit"
                    >
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="bg-transparent outline-none border-none text-xs w-32"
                        />
                        <button className="text-xl">
                            <HiMiniArrowRightEndOnRectangle />
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                        Support
                    </h3>
                    <p className="mb-1.5">admin@shopon.com</p>
                    <p>+8801712345678</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                        Account
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                Login / Register
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                Shop
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                Terms of Use
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={""}
                                className="hover:underline underline-offset-4"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                        Download App
                    </h3>
                    <p className="text-xs mb-2 text-gray-300">
                        Save $3 with New App Users
                    </p>
                    <div className="flex gap-2">
                        <div>
                            <a href="#">
                                <img
                                    src={AppQrCodeImage.src}
                                    alt="App QR Code"
                                    className="size-20"
                                />
                            </a>
                        </div>
                        <div className="flex flex-col justify-between">
                            <a href="#">
                                <img
                                    src={GooglePlayImage.src}
                                    alt="Google Play Store"
                                    className="w-28"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={AppStoreImage.src}
                                    alt="App Store"
                                    className="w-28"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <p className="text-center text-sm text-gray-400">
                &copy; Copyright{" "}
                <a href="https://github.com/TheProjectsX" target="_blank">
                    TheProjectsX
                </a>{" "}
                2024. All right reserved
            </p>
        </div>
    );
};

export default Footer;
