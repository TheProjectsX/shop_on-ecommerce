"use client";

import { FloatingLabel } from "flowbite-react";
import Link from "next/link";
import LoginBanner from "@/assets/login_banner.png";

const Page = () => {
    return (
        <div className="flex items-center flex-col md:flex-row gap-10 py-10">
            <div className="flex-1 flex justify-center">
                <img
                    src={LoginBanner.src}
                    alt="Login Banner"
                    className="w-2/3 md:w-full"
                />
            </div>

            <div className="flex-1 px-5">
                <header className="mb-5">
                    <h4 className="font-inter text-2xl font-medium mb-2">
                        Create an Account
                    </h4>
                    <p className="font-medium text-sm">
                        Enter your details below
                    </p>
                </header>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="md:max-w-80 space-y-6"
                >
                    <FloatingLabel
                        variant="standard"
                        label="Name"
                        name="name"
                        type="text"
                        required
                    />
                    <FloatingLabel
                        variant="standard"
                        label="Email"
                        name="email"
                        type="email"
                        required
                    />
                    <FloatingLabel
                        variant="standard"
                        label="Password"
                        name="password"
                        type="password"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-[#DB4444] text-white w-full py-3 text-sm rounded-md active:scale-95 transition-transform duration-200 ease-in-out"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-sm">
                        Already have an Account?{" "}
                        <Link
                            href={"/login"}
                            className="underline underline-offset-2 inline-block hover:scale-105 transition-transform duration-200 ease-in-out"
                        >
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Page;
