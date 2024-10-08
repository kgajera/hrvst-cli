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
    path: [
      "v2",
      "projects",
      ":project_id",
      "task_assignments",
      ":task_assignment_id",
    ],
    variable: [
      {
        key: "project_id",
        value: "",
        description:
          "The ID of the project that contains the task assignments you're deleting.",
      },
      {
        key: "task_assignment_id",
        value: "",
        description: "The ID of the task assignment you're deleting.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "delete",
    describe: "Delete a task assignment",
    request,
  });
