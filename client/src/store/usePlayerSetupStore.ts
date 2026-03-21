import {create} from "zustand"

export type PlayerSetupState = {
    name: string
    color: string
    emoji: string
    setName: (name: string) => void
    setColor: (color: string) => void
    setEmoji: (emoji: string) => void

}

export const usePlayerSetupStore = create<PlayerSetupState>((set) => ({
  name: "",
  color: "#f4c542",
  emoji: "😎",
  setName: (name) => set({ name }),
  setColor: (color) => set({ color }),
  setEmoji: (emoji) => set({ emoji }),
}));