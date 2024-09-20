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
    path: ["v2", "users", "me"],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "me",
    describe: "Retrieves the currently authenticated user",
    request,
  });
