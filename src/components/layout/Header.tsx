"use client";

import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import logo from "@/images/site-logo.jpg";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // 👇 joylashuv bo‘limiga o'tish funksiyasi
  const scrollToLocation = () => {
    const section = document.getElementById("location-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    onClose(); // mobil menyuni yopadi
  };

  return (
    <header className="pt-4 pb-4 shadow-2xl">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="w-16 h-16">
            <img
              className="w-full h-full rounded-full object-cover"
              src={logo.src}
              alt="prime game-club logo"
            />
          </Link>

          <ul className="hidden md:flex gap-5 font-medium">
            <a href="#about">Biz haqimizda</a>
            <button onClick={scrollToLocation}>Joylashuv</button>
            <a href="#contact">Biz bilan bog‘lanish</a>
          </ul>

          <div className="md:hidden">
            <Button
              type="text"
              icon={
                <MenuOutlined
                  style={{
                    fontSize: "24px",
                    color: "#ff00ff",
                  }}
                />
              }
              onClick={showDrawer}
              className="flex items-center justify-center"
            />
          </div>
        </nav>
      </div>

      <Drawer
        title="Menyu"
        placement="right"
        onClose={onClose}
        open={open}
        width={250}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium">
          <a onClick={onClose}>Biz haqimizda</a>
          <button onClick={scrollToLocation}>Joylashuv</button>
          <a onClick={onClose}>Biz bilan bog‘lanish</a>
        </ul>
      </Drawer>
    </header>
  );
}
