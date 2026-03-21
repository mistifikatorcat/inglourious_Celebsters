import { useRoomStore } from "../../store/useRoomStore";
import { PlayerCard } from "./PlayerCard";
import { EmptySlotCard } from "./EmptySlotCard";

export function PlayerGrid() {
  const room = useRoomStore((state) => state.room);

  if (!room) {
    return null;
  }

  const emptySlots = Math.max(room.maxPlayers - room.players.length, 0);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {room.players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}

      {Array.from({ length: emptySlots }).map((_, index) => (
        <EmptySlotCard key={index} />
      ))}
    </div>
  );
}