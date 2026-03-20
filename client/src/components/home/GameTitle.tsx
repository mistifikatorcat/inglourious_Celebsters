import { PageShell } from "../../components/layout/PageShell";
import { LobbyHeader } from "../../components/lobby/LobbyHeader";
import { PlayerGrid } from "../../components/lobby/PlayerGrid";
import { RoomCodeCard } from "../../components/lobby/RoomCodeCard";
import { EventLog } from "../../components/lobby/EventLog";
import { LobbyActions } from "../../components/lobby/LobbyActions";

export function LobbyPage() {
  return (
    <PageShell>
      <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="space-y-6">
          <LobbyHeader />
          <PlayerGrid />
        </section>

        <aside className="space-y-6">
          <RoomCodeCard />
          <EventLog />
          <LobbyActions />
        </aside>
      </div>
    </PageShell>
  );
}