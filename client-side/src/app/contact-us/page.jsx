"use client";

import { FloatingLabel } from "flowbite-react";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Page = () => {
    return (
        <>
            <h4 className="text-3xl font-medium font-inter mb-6">
                Contact Us!
            </h4>
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <aside className="md:w-1/3 px-6 py-8 rounded-md shadow-xl text-center md:text-left">
                    <div className="pb-4 mb-4 border-b-2 border-gray-500">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <p className="bg-[#DB4444] rounded-full p-1.5 text-white text-lg">
                                <IoCallOutline />
                            </p>
                            <p className="">Call to Us</p>
                        </div>

                        <p className="mb-2 text-sm">
                            We are available 24/7, 7 Days a Week!
                        </p>
                        <p className="text-sm">Phone +8801700000000</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <p className="bg-[#DB4444] rounded-full p-1.5 text-white text-lg">
                                <IoMailOutline />
                            </p>
                            <p className="">Write to Us</p>
                        </div>

                        <p className="mb-2 text-sm">
                            Email: customer@shopin.com
                        </p>
                        <p className="text-sm">Email: support@shopin.com</p>
                    </div>
                </aside>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex-grow px-6 py-8 rounded-md shadow-xl *:text-sm"
                >
                    <fieldset className="flex flex-wrap sm:flex-nowrap justify-center gap-2 mb-4">
                        <FloatingLabel
                            variant="outlined"
                            label="Your Name *"
                            name="name"
                            type="text"
                            className="min-w-40"
                            required
                        />
                        <FloatingLabel
                            variant="outlined"
                            label="Your Email *"
                            name="email"
                            type="email"
                            className="min-w-36"
                            required
                        />
                        <FloatingLabel
                            variant="outlined"
                            label="Your Number *"
                            name="number"
                            type="text"
                            className="min-w-40"
                            required
                        />
                    </fieldset>

                    <textarea
                        name="message"
                        className="w-full min-h-32 rounded-md p-3 mb-5"
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-md bg-[#DB4444] text-white text-sm"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Page;
