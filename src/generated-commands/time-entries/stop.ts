/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../util/postman-request-command";

export const request: Request = {
  method: "PATCH",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "time_entries", ":time_entry_id", "stop"],
    variable: [
      {
        key: "time_entry_id",
        value: "",
        description: "The ID of the time entry you're stopping.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "stop",
    describe:
      "Stopping a time entry is only possible if it’s currently running",
    request,
  });