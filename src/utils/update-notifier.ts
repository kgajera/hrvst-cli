import updateNotifier from "update-notifier";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../../package.json");

export default function (): void {
  const notifier = updateNotifier({
    pkg,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 7, // one week
  });

  notifier.notify({ isGlobal: true });
}
