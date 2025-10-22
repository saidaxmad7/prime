export default function Location() {
  const mapUrl =
    "https://www.google.com/maps/place/%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9+%D0%9C%D0%B8%D1%80/@41.3866188,60.3579787,19.5z/data=!4m6!3m5!1s0x41dfa5f1d6078a6d:0x595292b8e4a357dc!8m2!3d41.3866377!4d60.3583791!16s%2Fg%2F11p0w4h2sl?entry=ttu";

  return (
    <section id="location-section" className="py-10 mt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Bizning Manzil
        </h2>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            title="Детский Мир Хива location"
            src="https://www.google.com/maps?q=41.3866377,60.3583791&z=20&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-transparent cursor-pointer"
            title="Google Maps’da ochish"
          ></a>
        </div>

        <p className="text-gray-300 mt-4">
          📍 Manzil : feruz street 85, Khiva (Детский Мир tepasida)
        </p>
      </div>
    </section>
  );
}
