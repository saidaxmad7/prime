"use client";

import { motion } from "framer-motion";

export default function Rooms() {
    return (
        <div className='flex flex-col min-h-screen bg-[#0a0a0a] text-gray-300'>
            <section className='flex-1 container mx-auto px-6 py-16 space-y-24'>
                <h1 className=' mt-12 text-4xl font-bold text-center text-[var(--primary-color)] mb-12'>
                    Bizning xonalar
                </h1>

                {/* 1️⃣ Oddiy xona */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex flex-col md:flex-row items-center gap-8'
                >
                    <div className='md:w-1/2 w-full overflow-hidden rounded-xl'>
                        <img
                            src='/images/oddiy-xona.jpg'
                            alt='Oddiy xona'
                            className='w-full h-72 object-cover rounded-xl'
                        />
                    </div>
                    <div className='md:w-1/2 text-center md:text-left'>
                        <h2 className='text-2xl font-semibold text-[var(--primary-color)] mb-2'>
                            Oddiy xona
                        </h2>
                        <p>
                            Bu yerda sizni 25 ta kuchli kompyuterlarimiz kutib
                            oladi.
                            <p className='mt-4'>Kompyuter jihozlari: </p>
                            <p className='mt-4'>
                                Bloody Renegade W63 Max simli optik o'yin
                                sichqonchasi RGB yoritgichli va 6 tugmachali
                            </p>
                            <p className='mt-4'>
                                Naraka WS98 mexanik klaviaturasi, S98 USB
                                interfeysi, o'yin kalitlari, LED yoritgichli
                            </p>
                            <p>10 ming so'm soatiga</p>
                        </p>
                    </div>
                </motion.div>

                {/* 2️⃣ Prime xona */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex flex-col md:flex-row-reverse items-center gap-8 pb-8'
                >
                    <div className='md:w-1/2 w-full overflow-hidden rounded-xl'>
                        <img
                            src='/images/prime-zone.png'
                            alt='Prime xona'
                            className='w-full h-72 object-cover rounded-xl'
                        />
                    </div>
                    <div className='md:w-1/2 text-center md:text-left'>
                        <h2 className='text-2xl font-semibold text-[var(--primary-color)] mb-2'>
                            Prime xona
                        </h2>
                        <p>
                            Bu yerda sizni 5 ta kuchli kompyuterlarimiz kutib
                            oladi.
                            <p className='mt-4'>Kompyuter jihozlari: </p>
                            <p className='mt-4'>
                                Bloody Renegade W63 Max simli optik o'yin
                                sichqonchasi RGB yoritgichli va 6 tugmachali
                            </p>
                            <p className='mt-4'>
                                Naraka WS98 mexanik klaviaturasi, S98 USB
                                interfeysi, o'yin kalitlari, LED yoritgichli
                            </p>
                            <p>14 ming so'm soatiga</p>
                        </p>
                    </div>
                </motion.div>

                {/* 3️⃣ VIP xona */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='flex flex-col md:flex-row items-center gap-8 pb-9'
                >
                    <div className='md:w-1/2 w-full overflow-hidden rounded-xl'>
                        <img
                            src='/images/vip-zone.png'
                            alt='VIP xona'
                            className='w-full h-72 object-cover rounded-xl'
                        />
                    </div>
                    <div className='md:w-1/2 text-center md:text-left'>
                        <h2 className='text-2xl font-semibold text-[var(--primary-color)] mb-2'>
                            VIP xona
                        </h2>
                        <p>
                            Bu yerda sizni 10 ta kuchli kompyuterlarimiz kutib
                            oladi va do'stlaringiz bilan 5x5 CS2 oynash uchun
                            ajoyib tanlov.
                            <p className='mt-4'>Kompyuter jihozlari: </p>
                            <p className='mt-4'>
                                Bloody Renegade W63 Max simli optik o'yin
                                sichqonchasi RGB yoritgichli va 6 tugmachali
                            </p>
                            <p className='mt-4'>
                                Naraka WS98 mexanik klaviaturasi, S98 USB
                                interfeysi, o'yin kalitlari, LED yoritgichli
                            </p>
                            <p>12 ming so'm soatiga</p>
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
