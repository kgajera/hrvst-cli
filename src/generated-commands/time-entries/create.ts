/**
 * This file was generated by running `bun run generate` and should NOT be modified.
 */
import postmanRequestCommand, {
  Request,
} from "../../utils/postman-request-command";

export const request: Request = {
  method: "POST",
  url: {
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "time_entries"],
    query: [
      {
        key: "project_id",
        value: "",
        description: "The ID of the project to associate with the time entry.",
      },
      {
        key: "task_id",
        value: "",
        description: "The ID of the task to associate with the time entry.",
      },
      {
        key: "spent_date",
        value: "",
        description:
          "The ISO 8601 formatted date on which the time entry was spent.",
      },
      {
        key: "user_id",
        value: "",
        description:
          "The ID of the user to associate with the time entry. Defaults to the currently authenticated user’s ID.",
        disabled: true,
      },
      {
        key: "hours",
        value: "",
        description:
          "The current amount of time tracked. If provided, the time entry will be created with the specified hours and is_running will be set to false. If not provided, hours will be set to 0.0 and is_running will be set to true.",
        disabled: true,
      },
      {
        key: "notes",
        value: "",
        description: "Any notes to be associated with the time entry.",
        disabled: true,
      },
      {
        key: "external_reference[id]",
        value: "",
        description: "The ID of the service's equivalent of a task, card, etc.",
        disabled: true,
      },
      {
        key: "external_reference[group_id]",
        value: "",
        description:
          "The ID of the service's equivalent of a project, board, etc.",
        disabled: true,
      },
      {
        key: "external_reference[permalink]",
        value: "",
        description: "The URL of where the time is being tracked.",
        disabled: true,
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new time entry object",
    request,
  });
