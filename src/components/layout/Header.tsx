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
    <header className="pt-4 pb-4 shadow-2xl">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="w-16 h-16">
            <img
              className="w-full h-full rounded-full object-cover"
              src="/images/site-logo.jpg"
              alt="prime game-club logo"
            />
          </Link>

          <ul className="hidden md:flex gap-5 font-medium">
            <button onClick={() => scrollToSection("about")}>Biz haqimizda</button>
            <button onClick={() => scrollToSection("location-section")}>Joylashuv</button>
            <button onClick={() => scrollToSection("footer")}>Biz bilan bog‘lanish</button>
          </ul>

          <div className="md:hidden">
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: "24px", color: "#ff00ff" }} />}
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
          <button onClick={() => scrollToSection("about")}>Biz haqimizda</button>
          <button onClick={() => scrollToSection("location-section")}>Joylashuv</button>
          <button onClick={() => scrollToSection("footer")}>Biz bilan bog‘lanish</button>
        </ul>
      </Drawer>
    </header>
  );
}
