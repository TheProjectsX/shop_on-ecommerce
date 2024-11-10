"use client";
import { Label, TextInput } from "flowbite-react";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <h3 className="text-lg font-inter mb-8 font-medium">
                Welcome <span className="text-[#DB4444]">Rahat Khan!</span>
            </h3>

            <div className="flex justify-center">
                <section className="max-w-2xl w-full p-5 rounded-md shadow-lg">
                    <h4 className="text-lg mb-5 text-[#DB4444]">
                        Edit Your Profile
                    </h4>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-wrap justify-between gap-5">
                            <div className="block flex-1">
                                <Label
                                    value="Full Name"
                                    className="mb-2 inline-block"
                                />
                                <TextInput
                                    type="text"
                                    name="name"
                                    placeholder=""
                                    defaultValue={"Rahat Khan"}
                                    required
                                />
                            </div>

                            <div className="block flex-1">
                                <Label
                                    value="Email"
                                    className="mb-2 inline-block"
                                />
                                <TextInput
                                    type="email"
                                    name="email"
                                    placeholder=""
                                    defaultValue={"rahatkhan@gmail.com"}
                                    required
                                />
                            </div>
                        </div>

                        <div className="block flex-1">
                            <Label
                                value="Password Changes"
                                className="mb-2 inline-block"
                            />
                            <TextInput
                                type="password"
                                name="currentPassword"
                                placeholder="Current Password"
                                className="mb-3"
                                required
                            />
                            <TextInput
                                type="password"
                                name="newPassword"
                                placeholder="New Password"
                                className="mb-3"
                                required
                            />
                            <TextInput
                                type="password"
                                name="newPasswordRe"
                                placeholder="Confirm New Password"
                                required
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-md bg-[#DB4444] text-white text-sm"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
};

export default Page;
