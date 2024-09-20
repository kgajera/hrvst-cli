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
    path: ["v2", "invoice_item_categories"],
    query: [
      {
        key: "name",
        value: "",
        description: "The name of the invoice item category.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new invoice item category object",
    request,
  });
