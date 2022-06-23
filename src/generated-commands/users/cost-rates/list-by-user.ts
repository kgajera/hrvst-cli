/**
 * This file was generated by running `yarn generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "GET",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "users", ":user_id", "cost_rates"],
    query: [
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
          "The number of records to return per page. Can range between 1 and 100.",
        disabled: true,
      },
    ],
    variable: [
      {
        key: "user_id",
        value: "",
        description: "The ID of the user whose cost rates you're retrieving.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "list-by-user",
    describe:
      "Returns a list of cost rates for the user identified by `USER_ID`",
    request,
  });