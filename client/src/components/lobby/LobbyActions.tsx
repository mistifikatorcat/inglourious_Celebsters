import { Panel } from "../layout/Panel";
import { Button } from "../ui/Button";
import { useRoomStore } from "../../store/useRoomStore";

export function LobbyActions() {
  const room = useRoomStore((state) => state.room);
  const setRoom = useRoomStore((state) => state.setRoom);

  if (!room) {
    return null;
  }

  const currentRoom = room;
  const currentPlayer = currentRoom.players.find((player) => player.id === "you");

  function handleToggleReady() {
    if (!currentPlayer) {
      return;
    }

    const updatedPlayers = currentRoom.players.map((player) =>
      player.id === "you"
        ? { ...player, isReady: !player.isReady }
        : player
    );

    setRoom({
      ...currentRoom,
      players: updatedPlayers,
    });
  }

  function handleStartGame() {
    console.log("Start game");
  }

  return (
    <Panel className="space-y-3">
      <Button className="w-full" variant="secondary" onClick={handleToggleReady}>
        {currentPlayer?.isReady ? "Unready" : "Ready"}
      </Button>

      {currentPlayer?.isHost && (
        <Button className="w-full" onClick={handleStartGame}>
          Start game
        </Button>
      )}
    </Panel>
  );
}