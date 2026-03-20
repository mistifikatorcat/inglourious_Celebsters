import { create } from "zustand";
import type { Room, RoomPhase } from "../types/room";
import type { LobbyEvent } from "../types/lobby";

type RoomState = {
  phase: RoomPhase;
  room: Room | null;
  roomCode: string;
  events: LobbyEvent[];
  setPhase: (phase: RoomPhase) => void;
  setRoom: (room: Room) => void;
  setRoomCode: (roomCode: string) => void;
  addEvent: (event: LobbyEvent) => void;
};

export const useRoomStore = create<RoomState>((set) => ({
  phase: "home",
  room: null,
  roomCode: "",
  events: [],
  setPhase: (phase) => set({ phase }),
  setRoom: (room) => set({ room }),
  setRoomCode: (roomCode) => set({ roomCode }),
  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, event],
    })),
}));