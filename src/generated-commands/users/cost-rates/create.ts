/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "POST",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "users", ":user_id", "billable_rates"],
    query: [
      { key: "amount", value: "", description: "The amount of the cost rate." },
      {
        key: "start_date",
        value: "",
        description:
          "The date the cost rate is effective. Cannot be a date in the future.",
        disabled: true,
      },
    ],
    variable: [
      {
        key: "user_id",
        value: "",
        description: "The ID of the user that you're creating a cost rate for.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new cost rate object",
    request,
  });
