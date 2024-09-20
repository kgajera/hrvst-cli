/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../../utils/postman-request-command";

export const request: Request = {
  method: "PATCH",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "contacts", ":contact_id"],
    query: [
      {
        key: "client_id",
        value: "",
        description: "The ID of the client associated with this contact.",
        disabled: true,
      },
      {
        key: "first_name",
        value: "",
        description: "The first name of the contact.",
        disabled: true,
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
    variable: [
      {
        key: "contact_id",
        value: "",
        description: "The ID of the contact you're updating.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "update",
    describe:
      "Updates the specific contact by setting the values of the parameters passed",
    request,
  });
