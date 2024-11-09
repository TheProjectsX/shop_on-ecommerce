import { BsTruck } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Link from "next/link";
import ProductView from "@/components/ProductView";

export default function Home() {
    return (
        <>
            {/* Our Products Section */}
            <section className="mb-10">
                <p className="pl-3 py-2 mb-4 border-l-[20px] border-[#DB4444] text-[#DB4444] font-poppins font-semibold">
                    Today's
                </p>
                <h3 className="text-2xl font-semibold font-inter mb-6">
                    Flash Sales
                </h3>

                <div className="grid grid-cols-[repeat(1,270px)]  sm:grid-cols-[repeat(2,270px)] md:grid-cols-[repeat(3,270px)] lg:grid-cols-[repeat(4,270px)] gap-8 lg:gap-10 justify-center sm:justify-between w-full mb-3">
                    {/* Ex Item */}
                    <ProductView data={{}} />
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#DB4444] text-white py-3 px-8 outline-none border-none rounded-md active:scale-95 transition-transform">
                        View All Products
                    </button>
                </div>
            </section>

            <section className="mb-10">
                <p className="pl-3 py-2 mb-4 border-l-[20px] border-[#DB4444] text-[#DB4444] font-poppins font-semibold">
                    Categories
                </p>
                <h3 className="text-2xl font-semibold font-inter mb-6">
                    Browse by Category
                </h3>

                <div className="flex gap-3 flex-wrap">
                    <Link
                        href={"#"}
                        className="text-center w-32 py-4 rounded-md border active:scale-95 transition-transform duration-200 ease-in-out"
                    >
                        <h5 className="text-xl font-semibold font-inter mb-1">
                            Phones
                        </h5>
                        <p className="text-sm font-semibold">444 Items</p>
                    </Link>
                </div>
            </section>

            {/* Best Selling */}
            <section className="mb-10">
                <p className="pl-3 py-2 mb-4 border-l-[20px] border-[#DB4444] text-[#DB4444] font-poppins font-semibold">
                    This Month
                </p>
                <div className="flex justify-between mb-6 items-center">
                    <h3 className="text-2xl font-semibold font-inter">
                        Best Selling Products
                    </h3>
                    <div className="flex justify-center">
                        <button className="bg-[#DB4444] text-white py-2 px-8 outline-none border-none rounded-md active:scale-95 transition-transform">
                            View All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-[repeat(1,270px)]  sm:grid-cols-[repeat(2,270px)] md:grid-cols-[repeat(3,270px)] lg:grid-cols-[repeat(4,270px)] gap-8 lg:gap-10 justify-center sm:justify-between w-full mb-3">
                    {/* Ex Item */}
                    <ProductView data={{}} />
                </div>
            </section>

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
                    <ProductView data={{}} />
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#DB4444] text-white py-3 px-8 outline-none border-none rounded-md active:scale-95 transition-transform">
                        View All Products
                    </button>
                </div>
            </section>

            {/* New Arrival */}
            {/* <section className="mb-10">
                <p className="pl-3 py-2 mb-4 border-l-[20px] border-[#DB4444] text-[#DB4444] font-poppins font-semibold">
                    Featured
                </p>
                <h3 className="text-2xl font-semibold font-inter mb-6">
                    New Arrival
                </h3>

                Grid View
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
                        <div className="flex gap-3">
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
                            <div>
                                <img
                                    src="https://placehold.co/570x600"
                                    alt="" 
                                />
                            </div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section> */}

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
