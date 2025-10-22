"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <h1 className="text-4xl text-[var(--primary-color)]">Biz haqimizda</h1>
          <Link
            href="/about"
            className="text-[var(--primary-color)] hover:underline transition"
          >
            Ko‘proq ma'lumot
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          <div className="lg:w-3/5 text-[var(--text-color)]">
            <p>Prime Game-Club — bu o‘yin dunyosiga kirish eshigingiz! 🔥</p>
            <p className="mt-2">
              Biz Xivada joylashgan eng qulay o‘yin klubimiz, bu yerda do‘stlar bilan
              birgalikda o‘ynash, raqobatlashish va dam olish uchun barcha sharoitlar
              yaratilgan. Eng so‘nggi o‘yinlar, kuchli kompyuterlar, yorqin atmosfera
              va musobaqalarga boy tunlar — bularning barchasi Prime’da sizni kutmoqda!
            </p>
            <p className="mt-2">Keling va o‘zingizni haqiqiy gamer sifatida his eting 💪</p>
          </div>

          <div className="lg:w-2/5 w-full h-64 lg:h-80 mt-4 lg:mt-0 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="/images/banner-image.jpg"
              alt="Room Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
