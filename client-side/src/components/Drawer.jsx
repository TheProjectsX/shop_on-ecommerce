"use client";

import { Drawer, Sidebar } from "flowbite-react";
import Link from "next/link";

const NavigationDrawer = ({ drawerOpened, setDrawerOpened }) => {
    const categories = [
        {
            href: "/categories/men",
            label: "Men's Fashion",
        },
        {
            href: "/categories/women",
            label: "Women's Fashion",
        },
        {
            href: "/categories/electronics",
            label: "Electronics",
        },
        {
            href: "/categories/home",
            label: "Home & Lifestyle",
        },
        {
            href: "/categories/medicine",
            label: "Medicine",
        },
        {
            href: "/categories/sports",
            label: "Sports & Outdoor",
        },
    ];

    return (
        <Drawer open={drawerOpened} onClose={() => setDrawerOpened(false)}>
            <Drawer.Header title="CATEGORIES" titleIcon={() => <></>} />
            <Drawer.Items>
                <div className="flex flex-col gap-1">
                    {categories.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="px-3 py-2 hover:bg-gray-100 rounded-lg active:scale-95 transition-transform duration-200 ease-in-out"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* <div className="flex h-full flex-col justify-between py-2"></div> */}
                {/* <Sidebar
                    aria-label="Sidebar with multi-level dropdown example"
                    className="[&>div]:bg-transparent [&>div]:p-0"
                >
                    <div className="flex h-full flex-col justify-between py-2">
                        <div>
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item href="/">
                                        Dashboard
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/e-commerce/products">
                                        Products
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/users/list">
                                        Users list
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/authentication/sign-in">
                                        Sign in
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/authentication/sign-up">
                                        Sign up
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item href="https://github.com/themesberg/flowbite-react/">
                                        Docs
                                    </Sidebar.Item>
                                    <Sidebar.Item href="https://flowbite-react.com/">
                                        Components
                                    </Sidebar.Item>
                                    <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues">
                                        Help
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </div>
                    </div>
                </Sidebar> */}
            </Drawer.Items>
        </Drawer>
    );
};

export default NavigationDrawer;
