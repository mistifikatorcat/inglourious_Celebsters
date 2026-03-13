export type LobbyEvent = {
    id: string
    type: "system" | "chat"
    text: string
    createdAt: number
}