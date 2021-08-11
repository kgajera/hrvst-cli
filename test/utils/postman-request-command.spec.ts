import axios from "axios";
import { Url } from "postman-collection";
import { Config } from "../../src/utils/config";
import {
  httpRequest,
  urlArgOptions,
  USER_AGENT,
} from "../../src/utils/postman-request-command";

const mockConfig: Config = {
  accessToken: "test",
  accountId: "test2",
};

jest.mock("../../src/utils/config", () => ({
  getConfig: () => mockConfig,
}));

describe("httpRequest", () => {
  const url = new Url({
    protocol: "https",
    host: ["api", "harvestapp", "com"],
    path: ["v2", "projects", ":project_id"],
    query: [
      {
        key: "client_id",
        value: "",
        description: "The ID of the client to associate this project with.",
      },
      {
        key: "name",
        value: "",
        description: "The name of the project.",
      },
    ],
    variable: [
      {
        key: "project_id",
        value: "",
      },
    ],
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should add query as query string for GET request", async () => {
    const axiosRequest = jest
      .spyOn(axios, "request")
      .mockReturnValue(Promise.resolve());

    await httpRequest("GET", url, {
      client_id: 3871864,
      name: "Test project",
      project_id: 3871865,
    });

    expect(axiosRequest).toHaveBeenCalledWith({
      baseURL: `${url.protocol}://${url.getHost()}`,
      headers: {
        "User-Agent": USER_AGENT,
        Authorization: `Bearer ${mockConfig.accessToken}`,
        "Harvest-Account-ID": mockConfig.accountId,
      },
      method: "GET",
      url: "/v2/projects/3871865?client_id=3871864&name=Test project",
    });
  });

  it.each(["PATCH", "POST", "PUT"])(
    "should add query to body for %s request",
    async (method) => {
      const axiosRequest = jest
        .spyOn(axios, "request")
        .mockReturnValue(Promise.resolve());

      await httpRequest(method, url, {
        client_id: 3871864,
        name: "Test project",
        project_id: 3871865,
      });

      expect(axiosRequest).toHaveBeenCalledWith({
        baseURL: `${url.protocol}://${url.getHost()}`,
        data: "client_id=3871864&name=Test project",
        headers: {
          "User-Agent": USER_AGENT,
          Authorization: `Bearer ${mockConfig.accessToken}`,
          "Harvest-Account-ID": mockConfig.accountId,
        },
        method,
        url: "/v2/projects/3871865",
      });
    }
  );
});

describe("urlArgOptions", () => {
  it("should create yargs options from postman url", () => {
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
        {
          key: "$7b!", // No alias should be created becuase "b" is taken
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
      "$7b!": {
        alias: undefined,
        demandOption: false,
        describe: undefined,
      },
    });
  });
});
