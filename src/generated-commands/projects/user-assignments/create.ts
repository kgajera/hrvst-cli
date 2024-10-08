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
    path: ["v2", "projects", ":project_id", "user_assignments"],
    query: [
      {
        key: "user_id",
        value: "",
        description: "The ID of the user to associate with the project.",
      },
      {
        key: "is_active",
        value: "",
        description:
          "Whether the user assignment is active or archived. Defaults to true.",
        disabled: true,
      },
      {
        key: "is_project_manager",
        value: "",
        description:
          "Determines if the user has project manager permissions for the project. Defaults to false for users with Regular User permissions and true for those with Project Managers or Administrator permissions.",
        disabled: true,
      },
      {
        key: "use_default_rates",
        value: "",
        description:
          "Determines which billable rate(s) will be used on the project for this user when bill_by is People. When true, the project will use the user’s default billable rates. When false, the project will use the custom rate defined on this user assignment.",
        disabled: true,
      },
      {
        key: "hourly_rate",
        value: "",
        description:
          "Rate used when the project’s bill_by is Tasks. Defaults to null when billing by task hourly rate, otherwise 0.",
        disabled: true,
      },
      {
        key: "budget",
        value: "",
        description:
          "Budget used when the project’s budget_by is task or task_fees.",
        disabled: true,
      },
    ],
    variable: [
      {
        key: "project_id",
        value: "",
        description:
          "The ID of the project that you're creating the user assignment for.",
      },
    ],
  },
};
export const { command, aliases, describe, builder, handler } =
  postmanRequestCommand({
    command: "create",
    describe: "Creates a new user assignment object",
    request,
  });
