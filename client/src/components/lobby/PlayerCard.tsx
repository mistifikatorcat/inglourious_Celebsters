import { Badge } from "../ui/Badge";
import type { Player } from "../../types/player";

type PlayerCardProps = {
  player: Player;
};

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-panel)] p-5">
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
          style={{ backgroundColor: player.color }}
        >
          {player.emoji ?? "🙂"}
        </div>

        <div>
          <p className="text-lg font-bold">{player.name}</p>
          <div className="mt-1 flex gap-2">
            {player.isHost && <Badge>HOST</Badge>}
            {player.isReady && <Badge>READY</Badge>}
          </div>
        </div>
      </div>
    </div>
  );
}