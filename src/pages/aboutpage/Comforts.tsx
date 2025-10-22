"use client";

import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Wifi, Gamepad2, Sofa, Clock } from "lucide-react";

export default function Comforts() {
  const comforts = [
    {
      icon: <UtensilsCrossed size={40} className="text-[var(--primary-color)]" />,
      title: "Ovqat va ichimliklar",
      desc: "O‘tirgan joyingizdan turmasdan, mazali taom va ichimliklarga buyurtma bering 🍔🥤",
    },
    {
      icon: <Wifi size={40} className="text-[var(--primary-color)]" />,
      title: "Tezkor Wi-Fi",
      desc: "Yuqori tezlikdagi internet sizning o‘yinlaringizda kechikishlarsiz g‘alaba qozonishingizga yordam beradi ⚡",
    },
    {
      icon: <Gamepad2 size={40} className="text-[var(--primary-color)]" />,
      title: "Zamonaviy o‘yin uskunalari",
      desc: "RTX grafikalar, qulay gaming stullar va yoritilgan klaviaturalar sizni kutmoqda 🎮",
    },
    {
      icon: <Sofa size={40} className="text-[var(--primary-color)]" />,
      title: "Qulay muhit",
      desc: "Dam olish zonalari va yoritilgan interyer o‘yin jarayonini yanada yoqimli qiladi 💺",
    },
    {
      icon: <Coffee size={40} className="text-[var(--primary-color)]" />,
      title: "Kofe va energiya ichimliklari",
      desc: "Uzun o‘yin tunlari uchun maxsus energiya ichimliklari va yangi qahva ☕",
    },
    {
      icon: <Clock size={40} className="text-[var(--primary-color)]" />,
      title: "24/7 faoliyat",
      desc: "Prime Game Club haftaning har kuni, kun-u tun ochiq! Siz xohlagan vaqtda o‘ynang 🌙",
    },
  ];

  return (
    <section className="py-20 bg-[#0f0f0f]" id="comforts">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-12 text-[var(--primary-color)]">
          Qulayliklar
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {comforts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-[#1a1a1a] rounded-2xl shadow-xl hover:shadow-[0_0_20px_var(--primary-color)] transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                {item.icon}
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
