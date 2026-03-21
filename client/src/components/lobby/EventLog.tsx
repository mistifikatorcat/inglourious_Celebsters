import { Panel } from "../layout/Panel";
import { useRoomStore } from "../../store/useRoomStore";

export function EventLog() {
  const events = useRoomStore((state) => state.events);

  return (
    <Panel className="space-y-3">
      <p className="text-sm font-medium text-[var(--text-muted)]">Event log</p>

      <div className="space-y-2 text-sm">
        {events.length === 0 ? (
          <p className="text-[var(--text-muted)]">No events yet...</p>
        ) : (
          events.map((event) => (
            <p key={event.id} className="text-[var(--text-main)]">
              {event.text}
            </p>
          ))
        )}
      </div>
    </Panel>
  );
}