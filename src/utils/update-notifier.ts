import updateNotifier from "update-notifier";
import pkg from "../../package.json" with { type: "json" };

export default function (): void {
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 7, // one week
  });

  notifier.notify({ isGlobal: true });
}
