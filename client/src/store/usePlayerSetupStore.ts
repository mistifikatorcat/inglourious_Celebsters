import {create} from "zustand"

export type PlayerSetupState = {
    name: string
    color: string
    emoji: string
    setName: (name: string) => void
    setColor: (color: string) => void
    setEmoji: (emoji: string) => void

}

