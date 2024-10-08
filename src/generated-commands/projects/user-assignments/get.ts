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
    path: [
      "v2",
      "projects",
      ":project_id",
      "user_assignments",
      ":user_assignment_id",
    ],
    variable: [
      {
        key: "project_id",
        value: "",
        description:
          "The ID of the project that contains the user assignment you're retrieving.",
      },
      {
        key: "user_assignment_id",
        value: "",
        description: "The ID of the user assignment you're retrieving.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "get",
    describe: "Retrieves the user assignment with the given ID",
    request,
  });
