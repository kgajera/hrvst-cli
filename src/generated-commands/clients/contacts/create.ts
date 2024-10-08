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
    path: ["v2", "contacts"],
    query: [
      {
        key: "client_id",
        value: "",
        description: "The ID of the client associated with this contact.",
      },
      {
        key: "first_name",
        value: "",
        description: "The first name of the contact.",
      },
      {
        key: "last_name",
        value: "",
        description: "The last name of the contact.",
        disabled: true,
      },
      {
        key: "title",
        value: "",
        description: "The title of the contact.",
        disabled: true,
      },
      {
        key: "email",
        value: "",
        description: "The contact’s email address.",
        disabled: true,
      },
      {
        key: "phone_office",
        value: "",
        description: "The contact’s office phone number.",
        disabled: true,
      },
      {
        key: "phone_mobile",
        value: "",
        description: "The contact’s mobile phone number.",
        disabled: true,
      },
      {
        key: "fax",
        value: "",
        description: "The contact’s fax number.",
        disabled: true,
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new contact object",
    request,
  });
