"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { urls } from "@/constants/urls";
import { api } from "@/api";
import { Game } from "@/types/interfaces";

export default function Games() {
    const [showAll, setShowAll] = useState(false);

    const { data, error, isLoading } = useQuery<Game[]>({
        queryKey: [urls.games.getList],
        queryFn: () => api(urls.games.getList),
    });
    if (isLoading)
        return (
            <p className='text-center text-gray-400 mt-10'>⏳ Yuklanmoqda...</p>
        );

    if (error)
        return (
            <p className='text-center text-red-500 mt-10'>
                ❌ Xatolik: {(error as Error).message}
            </p>
        );

    return (
        <section className='w-full py-10 bg-[#0b0b0f] text-white'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-3xl font-bold text-[#39ff14]'>
                        🎮 Bizda mavjud o'yinlar
                    </h1>
                    {!showAll && (
                        <button
                            onClick={() => setShowAll(true)}
                            className='text-sm bg-[#1f1f2e] px-4 py-2 rounded-lg hover:bg-[#2c2c3b] transition'
                        >
                            Barchasini ko‘rish
                        </button>
                    )}
                </div>

                {!showAll ? (
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1.3 },
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.3 },
                        }}
                        modules={[Autoplay]}
                    >
                        {data?.map((game) => (
                            <SwiperSlide key={game.id}>
                                <div className='relative rounded-2xl overflow-hidden group'>
                                    <img
                                        src={game.img}
                                        alt={game.name}
                                        className='w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition'>
                                        <p className='text-lg font-semibold'>
                                            {game.name}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {data?.map((game) => (
                            <div
                                key={game.id}
                                className='bg-[#1c1c28] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform'
                            >
                                <img
                                    src={game.img}
                                    alt={game.name}
                                    className='w-full h-60 object-cover'
                                />
                                <p className='text-center py-3 font-semibold'>
                                    {game.name}
                                </p>
                            </div>
                        ))}

                        <div className='col-span-full flex justify-center mt-4'>
                            <button
                                onClick={() => setShowAll(false)}
                                className='bg-[#ff0055] px-6 py-2 rounded-lg hover:bg-[#ff3377] transition text-white'
                            >
                                Yopish
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
