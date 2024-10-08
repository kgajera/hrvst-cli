/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "DELETE",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "invoice_item_categories", ":invoice_item_category_id"],
    variable: [
      {
        key: "invoice_item_category_id",
        value: "",
        description: "The ID of the invoice item category you're deleting.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "delete",
    describe: "Delete an invoice item category",
    request,
  });
