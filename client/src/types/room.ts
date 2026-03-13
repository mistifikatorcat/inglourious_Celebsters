import type { Player } from "./player";

export type RoomPhase = "home" | "lobby" | "submission" | "playing"

export type Room = {
    code: string
    maxPlayers: number
    players: Player[]
    phase: RoomPhase
}