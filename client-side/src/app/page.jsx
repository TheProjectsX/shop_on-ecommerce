import { BsTruck } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="mb-8">Head</section>

            {/* Our Products Section */}
            <section className="mb-10">
                <p className="pl-3 py-2 mb-4 border-l-[20px] border-[#DB4444] text-[#DB4444] font-poppins font-semibold">
                    Our Products
                </p>
                <h3 className="text-2xl font-semibold font-inter mb-6">
                    Explore Our Products
                </h3>

                <div className="grid grid-cols-[repeat(1,270px)]  sm:grid-cols-[repeat(2,270px)] md:grid-cols-[repeat(3,270px)] lg:grid-cols-[repeat(4,270px)] gap-8 lg:gap-10 justify-center sm:justify-between w-full mb-3">
                    {/* Ex Item */}
                    <div className="relative w-[270px]">
                        {/* Controls */}
                        <button
                            className="absolute right-3 top-4 bg-white p-2 rounded-full shadow-lg"
                            title="Add to wishlist"
                        >
                            <FaRegHeart />
                        </button>
                        <button
                            className="absolute right-3 top-14 bg-white p-2 rounded-full shadow-lg"
                            title="Add to Cart"
                        >
                            <MdOutlineShoppingCart />
                        </button>
                        <div className="mb-3 w-[270px] h-[250px] bg-[#F5F5F5] flex justify-center items-center">
                            <Link href={"#"}>
                                <img
                                    src="https://placehold.co/190x180"
                                    alt="Product Placeholder"
                                    className="w-[190px] h-[180px]"
                                />
                            </Link>
                        </div>

                        <Link
                            href={"#"}
                            className="block mb-1 font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-[270px] hover:underline underline-offset-4"
                        >
                            Breed Dry Dog Food
                        </Link>

                        <div className="flex gap-2 items-center text-sm">
                            <span className="text-[#DB4444]">$100</span>
                            <div className="flex" title="Rating">
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span
                                title="Sold"
                                className="text-gray-300 font-semibold "
                            >
                                (35)
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#DB4444] text-white py-3 px-8 outline-none border-none rounded-md active:scale-95 transition-transform">
                        View All Products
                    </button>
                </div>
            </section>

            {/* New Arrival */}
            <section className="mb-10">
                <p className="pl-3 py-2 mb-4 border-l-[20px] border-[#DB4444] text-[#DB4444] font-poppins font-semibold">
                    Featured
                </p>
                <h3 className="text-2xl font-semibold font-inter mb-6">
                    New Arrival
                </h3>

                {/* Grid View */}
                <div className="grid grid-cols-2">
                    <div className="bg-black relative">
                        <img src="https://placehold.co/570x600" alt="" />
                        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/30"></div>
                        <div className="absolute text-white bottom-4 left-4">
                            <h4 className="font-inter text-lg mb-2">
                                Play Station 5
                            </h4>
                            <p className="text-sm mb-3">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Cupiditate totam odit odio
                                sed!
                            </p>
                            <button className="px-3 py-1 border-2 border-gray-500 rounded-md">
                                Shop Now!
                            </button>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section  */}
            <section className="flex gap-4 justify-evenly flex-wrap">
                <div className="flex flex-col items-center">
                    <div className="p-2 rounded-full w-fit bg-gray-300 mb-4">
                        <p className="text-xl bg-black p-2 text-white w-fit rounded-full">
                            <BsTruck />
                        </p>
                    </div>

                    <h3 className="uppercase mb-1 font-inter font-semibold text-lg">
                        Free and fast delivery
                    </h3>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="p-2 rounded-full w-fit bg-gray-300 mb-4">
                        <p className="text-xl bg-black p-2 text-white w-fit rounded-full">
                            <TfiHeadphoneAlt />
                        </p>
                    </div>

                    <h3 className="uppercase mb-1 font-inter font-semibold text-lg">
                        24/7 Customer service
                    </h3>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="p-2 rounded-full w-fit bg-gray-300 mb-4">
                        <p className="text-xl bg-black p-2 text-white w-fit rounded-full">
                            <IoShieldCheckmarkOutline />
                        </p>
                    </div>

                    <h3 className="uppercase mb-1 font-inter font-semibold text-lg">
                        Money back guarantee
                    </h3>
                    <p>We return money within 30 days</p>
                </div>
            </section>
        </>
    );
}
