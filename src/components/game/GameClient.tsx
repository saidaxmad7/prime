"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

interface Game {
  id: number;
  name: string;
  img: string;
  description: string;
  screenshots?: string[];
  trailer?: string;
}

interface GameClientProps {
  id: string;
}

const fetchGame = async (id: string): Promise<Game> => {
  const res = await fetch(`https://e951707d4d36f9ba.mokky.dev/games/${id}`);
  if (!res.ok) throw new Error("O'yin topilmadi yoki serverda xatolik");
  return res.json();
};

export default function GameClient({ id }: GameClientProps) {
  const { data: game, error, isLoading } = useQuery<Game>({
    queryKey: ["game", id],
    queryFn: () => fetchGame(id),
    enabled: Boolean(id),
  });

  if (isLoading)
    return <p className="text-center text-gray-400 mt-20">⏳ Yuklanmoqda...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-20">
        ❌ {(error as Error).message}
      </p>
    );
  if (!game)
    return <p className="text-center text-gray-400 mt-20">O'yin topilmadi 😕</p>;

  const getYoutubeEmbedUrl = (url: string) =>
    url
      .replace("watch?v=", "embed/")
      .replace("youtu.be/", "youtube.com/embed/")
      .replace("/shorts/", "/embed/");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center py-10 px-3 sm:px-6 md:px-10">
      <div className="max-w-5xl w-full bg-gray-800/60 backdrop-blur-lg p-5 sm:p-8 rounded-2xl shadow-xl border border-gray-700">
        {/* Asosiy rasm */}
        <div className="relative w-full h-60 sm:h-72 md:h-96 mb-6">
          {game.img.startsWith("/") ? (
            <Image
              src={game.img}
              alt={game.name}
              fill
              className="object-contain rounded-xl"
            />
          ) : (
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-full object-contain rounded-xl"
            />
          )}
        </div>

        {/* Nom va tavsif */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          {game.name}
        </h1>
        <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed mb-10">
          {game.description}
        </p>

        {/* Trailer */}
        {game.trailer && (
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">🎬 Trailer</h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
              {game.trailer.includes("youtube.com") ||
              game.trailer.includes("youtu.be") ? (
                <iframe
                  src={getYoutubeEmbedUrl(game.trailer)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={game.trailer}
                  controls
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        )}

        {/* Screenshots */}
        {game.screenshots && game.screenshots.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">🖼 Lavhalar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {game.screenshots.map((shot, index) => (
                <div
                  key={index}
                  className="relative w-full h-32 sm:h-40 md:h-48 overflow-hidden rounded-lg bg-gray-700"
                >
                  {shot.startsWith("/") ? (
                    <Image
                      src={shot}
                      alt={`screenshot-${index}`}
                      fill
                      className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={shot}
                      alt={`screenshot-${index}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orqaga tugmasi */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-white font-semibold shadow-md text-sm sm:text-base"
          >
            ⬅ Orqaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}
