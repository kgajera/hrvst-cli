import { Url } from "postman-collection";
import { urlArgOptions } from "../../src/utils/postman-request-command";

test("create yargs options from postman url", () => {
  const url = new Url({
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "projects", ":project_id"],
    query: [
      {
        key: "client_id",
        value: "",
        description: "The ID of the client to associate this project with.",
        disabled: false, // Required option
      },
      {
        key: "name",
        value: "",
        description: "The name of the project.",
        // Require option when 'disabled' is omitted
      },
      {
        key: "is_billable",
        value: "",
        description: "Whether the project is billable or not.",
        disabled: true,
      },
      {
        key: "is_active", // Should not use duplicate "i" alias
        value: "",
        description: "Whether the project is active or not.",
        disabled: true,
      },
      {
        key: "$7b", // Should only use letters for alias
        value: "",
        disabled: true,
      },
    ],
    variable: [
      {
        key: "project_id",
        value: "",
        description: "The ID of the project you're retrieving.",
      },
    ],
  });
  const options = urlArgOptions(url);
  expect(options).toMatchObject({
    project_id: {
      alias: "p",
      demandOption: true,
      describe: "The ID of the project you're retrieving.",
    },
    client_id: {
      alias: "c",
      demandOption: true,
      describe: "The ID of the client to associate this project with.",
    },
    name: {
      alias: "n",
      demandOption: true,
      describe: "The name of the project.",
    },
    is_billable: {
      alias: "i",
      demandOption: false,
      describe: "Whether the project is billable or not.",
    },
    is_active: {
      alias: "s",
      demandOption: false,
      describe: "Whether the project is active or not.",
    },
    $7b: {
      alias: "b",
      demandOption: false,
      describe: undefined,
    },
  });
});
