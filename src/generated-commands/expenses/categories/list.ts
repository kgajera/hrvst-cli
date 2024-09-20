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
    path: ["v2", "expense_categories"],
    query: [
      {
        key: "is_active",
        value: "",
        description:
          "Pass true to only return active expense categories and false to return inactive expense categories.",
        disabled: true,
      },
      {
        key: "update_since",
        value: "",
        description:
          "Only return expense categories that have been updated since the given date and time.",
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
    describe: "Returns a list of your expense categories",
    request,
  });
