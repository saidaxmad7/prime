"use client";

import { api } from "@/api";
import { urls } from "@/constants/urls";
import { Banners } from "@/types/interfaces";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
    const { data, error, isLoading } = useQuery<Banners[]>({
        queryKey: [urls.banners.getList],
        queryFn: () => api(urls.banners.getList),
    });

    if (isLoading) return <p className="text-center text-gray-400">Yuklanmoqda...</p>;
    if (error) return <p className="text-center text-red-500">Xatolik: {(error as Error).message}</p>;

    return (
        <section className="pt-6 pb-6">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="rounded-2xl overflow-hidden shadow-xl"
                >
                    {data?.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[480px]">
                                <img
                                    src={banner.img}
                                    alt={banner.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
