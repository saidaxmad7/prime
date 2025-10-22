"use client";

import { InstagramOutlined, PhoneOutlined, MessageOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#111] text-white py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8 items-start">
        
        {/* Logo va tavsif */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-[#ff0055]">Prime Game Club</h2>
          <p className="mt-2 text-gray-300 max-w-xs mx-auto lg:mx-0">
            Xivada o‘yin dunyosiga kirish eshigi! Eng so‘nggi o‘yinlar va musobaqalar.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h3 className="font-semibold text-[#00ffcc]">Quick Links</h3>
          <a href="#" className="hover:text-[#ff0055]">O‘yinlar</a>
          <a href="#" className="hover:text-[#ff0055]">Musobaqalar</a>
          <a href="#" className="hover:text-[#ff0055]">Biz haqimizda</a>
          <a href="#" className="hover:text-[#ff0055]">Kontakt</a>
        </div>

        {/* Contact tugmalari */}
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <h3 className="font-semibold text-[#00ffcc]">Bog'lanish</h3>
          <div className="flex gap-4 mt-2 flex-wrap justify-center">
            
            <button
              className="relative before:hidden hover:before:flex before:content-['Instagram'] before:absolute before:-top-7 before:text-[.6rem] before:px-1 before:bg-black before:text-white before:rounded-lg hover:-translate-y-1 hover:scale-110 cursor-pointer bg-white dark:bg-[#191818] p-2 rounded-full flex items-center justify-center"
              onClick={() => window.open("https://instagram.com/prime_zzone", "_blank")}
            >
              <InstagramOutlined />
            </button>

            <button
              className="relative before:hidden hover:before:flex before:content-['Telegram'] before:absolute before:-top-7 before:text-[.6rem] before:px-1 before:bg-black before:text-white before:rounded-lg hover:-translate-y-1 hover:scale-110 cursor-pointer bg-white dark:bg-[#191818] p-2 rounded-full flex items-center justify-center"
              onClick={() => window.open("https://t.me/PrimeGameClub", "_blank")}
            >
              <MessageOutlined />
            </button>

            <button
              className="relative before:hidden hover:before:flex before:content-['Call'] before:absolute before:-top-7 before:text-[.6rem] before:px-1 before:bg-black before:text-white before:rounded-lg hover:-translate-y-1 hover:scale-110 cursor-pointer bg-white dark:bg-[#191818] p-2 rounded-full flex items-center justify-center"
              onClick={() => window.location.href = "tel:+998901849299"}
            >
              <PhoneOutlined />
            </button>

          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-6">
        © 2025 Prime Game Club. All rights reserved.
      </p>
    </footer>
  );
}
