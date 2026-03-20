import { PLAYER_EMOJIS } from "../../lib/constants";
import { usePlayerSetupStore } from "../../store/usePlayerSetupStore";

export function EmojiPicker() {
  const emoji = usePlayerSetupStore((state) => state.emoji);
  const setEmoji = usePlayerSetupStore((state) => state.setEmoji);

  return (
    <div className="flex flex-wrap gap-2">
      {PLAYER_EMOJIS.map((item) => {
        const isActive = item === emoji;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setEmoji(item)}
            className={`rounded-2xl border px-3 py-2 text-2xl ${
              isActive
                ? "border-[var(--accent)] bg-[var(--bg-panel-alt)]"
                : "border-[var(--border)] bg-[var(--bg-panel)]"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}