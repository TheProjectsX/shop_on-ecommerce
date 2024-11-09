"use client";

import { FloatingLabel } from "flowbite-react";

const Page = () => {
    return (
        <>
            <section className="mb-10">
                <h3 className="mb-6 text-2xl font-semibold font-inter">
                    Your Cart
                </h3>

                <div className="relative overflow-x-auto text-center p-5">
                    <table className="w-full shadow-lg">
                        <thead className="px-4 py-5 border-b">
                            <tr>
                                <th scope="col" className="py-4 px-4">
                                    Product
                                </th>
                                <th scope="col" className="py-4 px-4">
                                    Price
                                </th>
                                <th scope="col" className="py-4 px-4">
                                    Quantity
                                </th>
                                <th scope="col" className="py-4 px-4">
                                    Subtotal
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-sm">
                            <tr className="border-b border-dashed last:border-none">
                                <td
                                    scope="row"
                                    className="py-5 font-medium whitespace-nowrap"
                                >
                                    LCD Monitor
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    $650
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    02
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    $4333
                                </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-none">
                                <td
                                    scope="row"
                                    className="py-5 font-medium whitespace-nowrap"
                                >
                                    LCD Monitor
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    $650
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    02
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    $4333
                                </td>
                            </tr>
                            <tr className="border-b border-dashed last:border-none">
                                <td
                                    scope="row"
                                    className="py-5 font-medium whitespace-nowrap"
                                >
                                    LCD Monitor
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    $650
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    02
                                </td>
                                <td scope="row" className="py-5 px-4">
                                    $4333
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button className="px-4 py-3 border rounded-md font-semibold text-sm">
                    Return to Shop
                </button>
            </section>

            <section className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex gap-5 items-center"
                >
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="rounded-md text-sm py-3 px-5"
                    />
                    <button className="bg-[#DB4444] px-8 py-3 rounded-md text-white text-sm">
                        Apply Coupon
                    </button>
                </form>

                <div className="min-w-96 px-5 py-6 rounded-sm border border-black">
                    <h4 className="text-lg font-medium">Cart Total</h4>
                    <p className="flex justify-between border-b border-gray-800 py-3">
                        <span className="font-medium">Subtotal:</span>
                        <span>$3434</span>
                    </p>
                    <p className="flex justify-between border-b border-gray-800 py-3">
                        <span className="font-medium">Shipping:</span>
                        <span>Free</span>
                    </p>
                    <p className="flex justify-between py-3 mb-5">
                        <span className="font-medium">Total:</span>
                        <span>$3434</span>
                    </p>

                    <div className="flex justify-center">
                        <button className="bg-[#DB4444] px-8 py-3 rounded-md text-white text-sm">
                            Process to Checkout
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
