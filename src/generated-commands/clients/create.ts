/**
 * This file was generated by running `npm run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "POST",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "clients"],
    query: [
      {
        key: "name",
        value: "",
        description: "A textual description of the client.",
      },
      {
        key: "is_active",
        value: "",
        description:
          "Whether the client is active, or archived. Defaults to true.",
        disabled: true,
      },
      {
        key: "address",
        value: "",
        description:
          " A textual representation of the client’s physical address. May include new line characters.",
        disabled: true,
      },
      {
        key: "currency",
        value: "",
        description:
          "The currency used by the client. If not provided, the company’s currency will be used. See a list of supported currencies: https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/",
        disabled: true,
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new client object",
    request,
  });