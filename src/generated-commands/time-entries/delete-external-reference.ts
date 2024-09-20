/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "DELETE",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "time_entries", ":time_entry_id", "external_reference"],
    variable: [
      {
        key: "time_entry_id",
        value: "",
        description:
          "The ID of the time entry whose external reference you're deleting.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "delete-external-reference",
    describe: "Delete a time entry’s external reference",
    request,
  });
