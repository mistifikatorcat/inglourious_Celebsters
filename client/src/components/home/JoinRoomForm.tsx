import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useRoomStore } from "../../store/useRoomStore";

export function JoinRoomForm() {
  const roomCode = useRoomStore((state) => state.roomCode);
  const setRoomCode = useRoomStore((state) => state.setRoomCode);

  function handleJoinRoom() {
    console.log("Join room:", roomCode);
  }

  return (
    <div className="space-y-3 border-t border-[var(--border)] pt-4">
      <p className="text-center text-sm font-medium text-[var(--text-muted)]">
        Join existing room
      </p>

      <div className="flex gap-3">
        <Input
          placeholder="Room code"
          value={roomCode}
          onChange={(event) => setRoomCode(event.target.value.toUpperCase())}
        />
        <Button onClick={handleJoinRoom}>Join</Button>
      </div>
    </div>
  );
}