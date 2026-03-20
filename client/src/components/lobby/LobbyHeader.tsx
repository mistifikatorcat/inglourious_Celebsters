import { useRoomStore } from "../../store/useRoomStore";

export function LobbyHeader() {
  const room = useRoomStore((state) => state.room);

  if (!room) {
    return null;
  }

  return (
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
        Room
      </p>
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-black text-[var(--accent)]">{room.code}</h2>
        <p className="text-sm text-[var(--text-muted)]">
          {room.players.length}/{room.maxPlayers} players
        </p>
      </div>
    </header>
  );
}