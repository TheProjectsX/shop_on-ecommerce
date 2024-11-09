"use client";

import { Label, Radio, TextInput } from "flowbite-react";

const Page = () => {
    return (
        <>
            <h3 className="mb-6 text-2xl font-semibold font-inter">
                Billing Details
            </h3>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-5 w-full px-5 justify-around"
            >
                <fieldset className="max-w-80 space-y-4 flex-1">
                    <div>
                        <div className="block">
                            <Label
                                value="First Name *"
                                className="mb-2 inline-block"
                            />
                            <TextInput
                                type="text"
                                name="firstName"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="block">
                            <Label
                                value="Street Address *"
                                className="mb-2 inline-block"
                            />
                            <TextInput
                                name="address"
                                type="text"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="block">
                            <Label
                                value="Town/City *"
                                className="mb-2 inline-block"
                            />
                            <TextInput
                                name="town"
                                type="text"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className="block">
                            <Label
                                value="Phone Number *"
                                className="mb-2 inline-block"
                            />
                            <TextInput
                                name="number"
                                type="text"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="block">
                            <Label
                                value="Email Address *"
                                className="mb-2 inline-block"
                            />
                            <TextInput
                                name="email"
                                type="email"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="max-w-80 flex-1 pt-8">
                    {/* Cart Items */}
                    <div className="space-y-5 mb-5">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <img
                                    src={"https://placehold.co/40"}
                                    alt="Cart Item"
                                    className="size-10"
                                />

                                <h5>LCD Monitor</h5>
                            </div>
                            <p>$650</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <img
                                    src={"https://placehold.co/40"}
                                    alt="Cart Item"
                                    className="size-10"
                                />

                                <h5>LCD Monitor</h5>
                            </div>
                            <p>$650</p>
                        </div>
                    </div>

                    <p className="flex justify-between py-2.5 border-b border-black">
                        <span>Subtotal:</span>
                        <span>$2020</span>
                    </p>

                    <p className="flex justify-between py-2.5 border-b border-black">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </p>
                    <p className="flex justify-between py-2.5 mb-5">
                        <span>Total:</span>
                        <span>$2020</span>
                    </p>

                    <div className="mb-5">
                        <Label
                            htmlFor="united-state"
                            className="flex items-center gap-2"
                        >
                            <Radio
                                name="checkoutType"
                                value="cash-on-delivery"
                                defaultChecked
                            />
                            Cash on Delivery
                        </Label>
                    </div>

                    <div
                        onSubmit={(e) => e.preventDefault()}
                        className="flex gap-5 items-center mb-5"
                    >
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="rounded-md text-sm py-3 px-5"
                        />
                        <button
                            type="submit"
                            className="bg-[#DB4444] px-8 py-3 rounded-md text-white text-sm"
                        >
                            Apply
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#DB4444] px-8 py-3 rounded-md text-white text-sm"
                    >
                        Place Order
                    </button>
                </fieldset>
            </form>
        </>
    );
};

export default Page;
