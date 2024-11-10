import AboutBanner from "@/assets/about_banner.png";
import { CiShop } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { LuDollarSign } from "react-icons/lu";
import { CiGift } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Page = () => {
    return (
        <>
            <section className="flex items-center flex-col md:flex-row gap-10 py-10 mb-10">
                <div className="flex-1 md:max-w-md px-5">
                    <h3 className="text-4xl font-semibold mb-6 font-inter">
                        Our Story
                    </h3>
                    <p className="mb-5 text-sm">
                        Launched in 2015, Exclusive is South Asia’s premier
                        online shopping marketplace with an active presence in
                        Bangladesh. Supported by wide range of tailored
                        marketing, data and service solutions, Exclusive has
                        10,500 sellers and 300 brands and serves 3 millions
                        customers across the region.
                    </p>
                    <p className="text-sm">
                        Exclusive has more than 1 Million products to offer,
                        growing at a very fast. Exclusive offers a diverse
                        assortment in categories ranging from consumer.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src={AboutBanner.src}
                        alt="Login Banner"
                        className="w-2/3 md:w-full"
                    />
                </div>
            </section>

            <section className="mb-10 flex gap-4 items-center justify-center flex-wrap">
                <div className="w-56 p-6 rounded-md border border-gray-100 flex flex-col items-center group hover:bg-[#DB4444] hover:text-white transition-colors cursor-pointer">
                    <p className="p-2 rounded-full bg-gray-300 flex mb-4 group-hover:bg-white/35 transition-colors">
                        <span className="h-fit w-fit rounded-full p-1 inline-block bg-black text-white text-3xl group-hover:bg-white group-hover:text-black transition-colors">
                            <CiShop />
                        </span>
                    </p>

                    <h5 className="text-xl font-semibold mb-1">1.5K</h5>
                    <p>Active Sellers</p>
                </div>
                <div className="w-56 p-6 rounded-md border border-gray-100 flex flex-col items-center group hover:bg-[#DB4444] hover:text-white transition-colors cursor-pointer">
                    <p className="p-2 rounded-full bg-gray-300 flex mb-4 group-hover:bg-white/35 transition-colors">
                        <span className="h-fit w-fit rounded-full p-1 inline-block bg-black text-white text-3xl group-hover:bg-white group-hover:text-black transition-colors">
                            <AiOutlineDollar />
                        </span>
                    </p>

                    <h5 className="text-xl font-semibold mb-1">3K</h5>
                    <p>Monthly Product Sell</p>
                </div>
                <div className="w-56 p-6 rounded-md border border-gray-100 flex flex-col items-center group hover:bg-[#DB4444] hover:text-white transition-colors cursor-pointer">
                    <p className="p-2 rounded-full bg-gray-300 flex mb-4 group-hover:bg-white/35 transition-colors">
                        <span className="h-fit w-fit rounded-full p-1 inline-block bg-black text-white text-3xl group-hover:bg-white group-hover:text-black transition-colors">
                            <CiGift />
                        </span>
                    </p>

                    <h5 className="text-xl font-semibold mb-1">4.5K</h5>
                    <p>Active Customers</p>
                </div>
                <div className="w-56 p-6 rounded-md border border-gray-100 flex flex-col items-center group hover:bg-[#DB4444] hover:text-white transition-colors cursor-pointer">
                    <p className="p-2 rounded-full bg-gray-300 flex mb-4 group-hover:bg-white/35 transition-colors">
                        <span className="h-fit w-fit rounded-full p-1 inline-block bg-black text-white text-3xl group-hover:bg-white group-hover:text-black transition-colors">
                            <LuDollarSign />
                        </span>
                    </p>

                    <h5 className="text-xl font-semibold mb-1">2.5K</h5>
                    <p>Annual Gross Sell</p>
                </div>
            </section>

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
};

export default Page;
