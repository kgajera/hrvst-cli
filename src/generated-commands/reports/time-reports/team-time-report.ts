/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "reports", "time", "team"],
    query: [
      {
        key: "from",
        value: "",
        description:
          "Only report on expenses with a spent_date on or after the given date.",
      },
      {
        key: "to",
        value: "",
        description:
          "Only report on expenses with a spent_date on or before the given date.",
      },
      {
        key: "page",
        value: "",
        description:
          "The page number to use in pagination. Use `all` to retrieve all pages.",
        disabled: true,
      },
      {
        key: "per_page",
        value: "",
        description:
          "The number of records to return per page. Can range between 1 and 2000.",
        disabled: true,
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "team-time-report",
    describe:
      "Team Time Report shows the hours and billable information for each user where tracked time is present for a given timeframe",
    request,
  });
