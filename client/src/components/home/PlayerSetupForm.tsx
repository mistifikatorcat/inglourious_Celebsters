import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { ColorPicker } from "./ColorPicker";
import { EmojiPicker } from "./EmojiPicker";
import { usePlayerSetupStore } from "../../store/usePlayerSetupStore";
import { useRoomStore } from "../../store/useRoomStore";

export function PlayerSetupForm() {
  const name = usePlayerSetupStore((state) => state.name);
  const color = usePlayerSetupStore((state) => state.color);
  const emoji = usePlayerSetupStore((state) => state.emoji)
  const setName = usePlayerSetupStore((state) => state.setName);
  const setPhase = useRoomStore((state) => state.setPhase);
  const setRoom = useRoomStore((state) => state.setRoom);

  function handleCreateRoom() {
    if (!name.trim()) {
      return;
    }

    setRoom({
      code: "FYFG9",
      maxPlayers: 4,
      phase: "lobby",
      players: [
        {
          id: "you",
          name,
          color,
          emoji,
          isHost: true,
          isReady: false,
        },
      ],
    });

    setPhase("lobby");
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <div className="space-y-2">
        <p className="text-sm font-medium">Choose your color</p>
        <ColorPicker />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Choose your emoji</p>
        <EmojiPicker />
      </div>

      <Button className="w-full" onClick={handleCreateRoom}>
        Start game
      </Button>
    </div>
  );
}