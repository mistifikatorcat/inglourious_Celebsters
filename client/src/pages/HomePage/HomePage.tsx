import { PageShell } from "../../components/layout/PageShell";
import { Panel } from "../../components/layout/Panel";
import { GameTitle } from "../../components/home/GameTitle";
import { PlayerSetupForm } from "../../components/home/PlayerSetupForm";
import { JoinRoomForm } from "../../components/home/JoinRoomForm";

export function HomePage() {
  return (
    <PageShell>
      <Panel className="w-full max-w-xl space-y-6">
        <GameTitle />
        <PlayerSetupForm />
        <JoinRoomForm />
      </Panel>
    </PageShell>
  );
}