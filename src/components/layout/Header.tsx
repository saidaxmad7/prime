"use client";

import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        onClose();
    };

    return (
        <header className='pt-4 pb-4 shadow-2xl'>
            <div className='container mx-auto px-4'>
                <nav className='flex items-center justify-between'>
                    <Link href='/' className='relative w-16 h-16'>
                        <div className='relative w-full h-full rounded-full overflow-hidden'>
                            <img
                                className='w-full h-full rounded-full object-cover'
                                src='/images/site-logo.jpg'
                                alt='prime game-club logo'
                            />
                            <span className="absolute inset-0 rounded-full border-[1px] border-transparent before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[2px] before:border-transparent before:bg-[conic-gradient(from_0deg,_#00f,_#0ff,_#00f)] before:animate-spin-slow"></span>
                        </div>
                    </Link>

                    <ul className='hidden md:flex gap-5 font-medium'>
                        <button onClick={() => scrollToSection("about")}>
                            Biz haqimizda
                        </button>
                        <button
                            onClick={() => scrollToSection("location-section")}
                        >
                            Joylashuv
                        </button>
                        <button onClick={() => scrollToSection("footer")}>
                            Biz bilan bog‘lanish
                        </button>
                    </ul>

                    <div className='md:hidden'>
                        <Button
                            type='text'
                            icon={
                                <MenuOutlined
                                    style={{
                                        fontSize: "24px",
                                        color: "#ff00ff",
                                    }}
                                />
                            }
                            onClick={showDrawer}
                            className='flex items-center justify-center'
                        />
                    </div>
                </nav>
            </div>

            <Drawer
                title='Menyu'
                placement='right'
                onClose={onClose}
                open={open}
                width={250}
            >
                <ul className='flex flex-col gap-4 text-lg font-medium'>
                    <button onClick={() => scrollToSection("about")}>
                        Biz haqimizda
                    </button>
                    <button onClick={() => scrollToSection("location-section")}>
                        Joylashuv
                    </button>
                    <button onClick={() => scrollToSection("footer")}>
                        Biz bilan bog‘lanish
                    </button>
                </ul>
            </Drawer>
        </header>
    );
}
