export default function About() {
    return (
        <section className='mt-10'>
            <div className='container'>
                <div className='flex gap-10 items-center'>
                    <h1 className='text-4xl text-[var(--primary-color)]'>
                        Biz haqimizda
                    </h1>
                    <a>Koproq ma'lumot</a>
                </div>
                <div className='flex gap-4 mt-4'>
                    <p className='w-[60%] text-[var(--text-color)]'>
                        Prime Game-Club — bu o‘yin dunyosiga kirish eshigingiz!
                        🔥
                        <p className="mt-2">
                            Biz Xivada joylashgan eng qulay o‘yin klubimiz, bu
                            yerda do‘stlar bilan birgalikda o‘ynash,
                            raqobatlashish va dam olish uchun barcha sharoitlar
                            yaratilgan. Eng so‘nggi o‘yinlar, kuchli
                            kompyuterlar, yorqin atmosfera va musobaqalarga boy
                            tunlar — bularning barchasi Prime’da sizni
                            kutmoqda!
                        </p>
                        <p className="mt-2">
                            Keling va o‘zingizni haqiqiy gamer sifatida his
                            eting 💪
                        </p>
                    </p>
                    <div className='w-[40%]'>
                        <img className='w-full h-full' src='' alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
}
