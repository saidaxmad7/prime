import GameClient from "@/components/game/GameClient";

interface GamePageProps {
  params: {
    id: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  const { id } = params;
  return <GameClient id={id} />;
}
