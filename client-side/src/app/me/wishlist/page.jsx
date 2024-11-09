import ProductView from "@/components/ProductView";
import React from "react";

const Page = () => {
    return (
        <>
            {/* Wishlist */}
            <section className="mb-10">
                <header className="mb-4">
                    <p className="text-lg">
                        Wishlist <span className="font-semibold">(4)</span>
                    </p>
                </header>

                <div className="grid grid-cols-[repeat(1,270px)]  sm:grid-cols-[repeat(2,270px)] md:grid-cols-[repeat(3,270px)] lg:grid-cols-[repeat(4,270px)] gap-8 lg:gap-10 justify-center sm:justify-between w-full mb-3">
                    <ProductView wishlist />
                </div>
            </section>

            {/* Just for You */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <p className="pl-3 py-2 border-l-[20px] border-[#DB4444] text-[#DB4444] font-poppins font-semibold">
                        Just For You
                    </p>

                    <button className="px-5 py-1.5 rounded-md border border-black">
                        See All
                    </button>
                </div>
                <div className="grid grid-cols-[repeat(1,270px)]  sm:grid-cols-[repeat(2,270px)] md:grid-cols-[repeat(3,270px)] lg:grid-cols-[repeat(4,270px)] gap-8 lg:gap-10 justify-center sm:justify-between w-full mb-3">
                    <ProductView />
                </div>
            </section>
        </>
    );
};

export default Page;
