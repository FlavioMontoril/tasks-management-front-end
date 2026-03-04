import { cn } from "../lib/utils";
import type { TaskStatus } from "../mock/tasks";

export function StatusBadge({ status }: { status: TaskStatus }) {
  const styles: Record<TaskStatus, string> = {
    OPEN: "bg-blue-500/10 text-blue-500",
    IN_PROGRESS: "bg-yellow-500/10 text-yellow-500",
    DONE: "bg-green-500/10 text-green-500",
    CANCELED: "bg-red-500/10 text-red-500",
  };

  return (
    <div
      className={cn(
        "px-3 py-1 rounded-full text-xs font-medium",
        styles[status],
      )}
    >
      {status}
    </div>
  );
}
