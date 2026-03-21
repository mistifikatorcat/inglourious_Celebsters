import { HomePage } from "../pages/HomePage";
import { LobbyPage } from "../pages/LobbyPage";
import { useRoomStore } from "../store/useRoomStore";

export default function App() {
  const phase = useRoomStore((state) => state.phase);

  if (phase === "lobby") {
    return <LobbyPage />;
  }

  return <HomePage />;
}