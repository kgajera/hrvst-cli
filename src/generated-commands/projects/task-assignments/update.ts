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
    path: [
      "v2",
      "projects",
      ":project_id",
      "task_assignments",
      ":task_assignment_id",
    ],
    query: [
      {
        key: "is_active",
        value: "",
        description:
          "Pass true to only return active task assignments and false to return inactive task assignments.",
        disabled: true,
      },
      {
        key: "update_since",
        value: "",
        description:
          "Only return task assignments that have been updated since the given date and time.",
        disabled: true,
      },
      { key: "", value: "" },
    ],
    variable: [
      {
        key: "project_id",
        value: "",
        description:
          "The ID of the project that contains the task assignments you're updating.",
      },
      {
        key: "task_assignment_id",
        value: "",
        description: "The ID of the task assignment you're updating.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "update",
    describe:
      "Updates the specific task assignment by setting the values of the parameters passed",
    request,
  });
