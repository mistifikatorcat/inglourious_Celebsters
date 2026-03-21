import { Panel } from "../layout/Panel";
import { Button } from "../ui/Button";
import { useRoomStore } from "../../store/useRoomStore";

export function RoomCodeCard() {
  const room = useRoomStore((state) => state.room);

  async function handleCopy() {
    if (!room) {
      return;
    }

    await navigator.clipboard.writeText(room.code);
  }

  if (!room) {
    return null;
  }

  return (
    <Panel className="space-y-3">
      <p className="text-sm text-[var(--text-muted)]">Room code</p>
      <p className="text-3xl font-black tracking-widest text-[var(--accent)]">
        {room.code}
      </p>
      <Button className="w-full" onClick={handleCopy}>
        Copy code
      </Button>
    </Panel>
  );
}