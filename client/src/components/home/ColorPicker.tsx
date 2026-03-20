import { PLAYER_COLORS } from "../../lib/constants";
import { usePlayerSetupStore } from "../../store/usePlayerSetupStore";

export function ColorPicker() {
  const color = usePlayerSetupStore((state) => state.color);
  const setColor = usePlayerSetupStore((state) => state.setColor);

  return (
    <div className="flex flex-wrap gap-3">
      {PLAYER_COLORS.map((item) => {
        const isActive = item === color;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setColor(item)}
            className={`h-10 w-10 rounded-full border-2 ${
              isActive ? "border-white" : "border-transparent"
            }`}
            style={{ backgroundColor: item }}
          />
        );
      })}
    </div>
  );
}