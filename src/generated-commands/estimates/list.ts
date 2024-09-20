/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "estimates"],
    query: [
      {
        key: "client_id",
        value: "",
        description:
          "Only return estimates belonging to the client with the given ID.",
        disabled: true,
      },
      {
        key: "updated_since",
        value: "",
        description:
          "Only return estimates that have been updated since the given date and time.",
        disabled: true,
      },
      {
        key: "from",
        value: "",
        description:
          "Only return estimates with an issue_date on or after the given date.",
        disabled: true,
      },
      {
        key: "to",
        value: "",
        description:
          "Only return estimates with an issue_date on or before the given date.",
        disabled: true,
      },
      {
        key: "state",
        value: "",
        description:
          "Only return estimates with a state matching the value provided. Options: draft, sent, accepted, or declined.",
        disabled: true,
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
      { key: "", value: "" },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "list",
    describe: "Returns a list of your estimates",
    request,
  });
