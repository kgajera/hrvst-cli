import axios from "axios";
import { Url } from "postman-collection";
import { Config } from "../../src/utils/config";
import commandModule, {
  httpRequest,
  urlArgOptions,
  USER_AGENT,
} from "../../src/utils/postman-request-command";
import { verticalTable } from "../../src/utils/table";

const mockConfig: Partial<Config> = {
  accessToken: "test",
  accountId: "test2",
};

jest.mock("../../src/utils/config", () => ({
  getConfig: () => mockConfig,
}));

const args = (args = {}) =>
  Object.assign(
    {
      $0: "",
      _: [],
    },
    args
  );

describe("postman-request-command", () => {
  describe("handler", () => {
    const { handler } = commandModule({
      command: "test",
      describe: "test",
      request: {
        method: "GET",
        url: {
          protocol: "https",
          host: ["api", "harvestapp", "com"],
          path: ["v2", "time_entries"],
          query: [
            {
              key: "page",
              value: "",
              description: "The page number to use in pagination.",
              disabled: true,
            },
            {
              key: "per_page",
              value: "",
              description:
                "The number of records to return per page. Can range between 1 and 100. (Default: 100)",
              disabled: true,
            },
          ],
        },
      },
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should default to table output", async () => {
      const data = {
        id: 2,
        hours: 4.5,
      };
      jest.spyOn(axios, "request").mockReturnValue(Promise.resolve({ data }));
      const consoleSpy = jest.spyOn(console, "log");

      await handler(args());

      expect(consoleSpy).toHaveBeenCalledWith(verticalTable(data).toString());
    });

    it("should output json", async () => {
      const data = [
        {
          id: 2,
          hours: 4.5,
        },
      ];
      jest.spyOn(axios, "request").mockReturnValue(Promise.resolve({ data }));
      const consoleSpy = jest.spyOn(console, "log");

      await handler(
        args({
          output: "json",
        })
      );

      expect(consoleSpy).toHaveBeenCalledWith(JSON.stringify(data, null, 2));
    });

    it("should output json object with specified fields", async () => {
      const data = {
        id: 2,
        hours: 4.5,
        project: {
          id: 4,
          name: "Test",
        },
      };
      jest.spyOn(axios, "request").mockReturnValue(Promise.resolve({ data }));
      const consoleSpy = jest.spyOn(console, "log");

      await handler(
        args({
          fields: "hours,project.name",
          output: "json",
        })
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        JSON.stringify(
          {
            hours: 4.5,
            project: {
              name: "Test",
            },
          },
          null,
          2
        )
      );
    });

    it("should output json array with specified fields", async () => {
      const data = [
        {
          id: 2,
          hours: 4.5,
          project: {
            id: 4,
            name: "Test",
          },
        },
      ];
      jest.spyOn(axios, "request").mockReturnValue(Promise.resolve({ data }));
      const consoleSpy = jest.spyOn(console, "log");

      await handler(
        args({
          fields: "hours,project.name",
          output: "json",
        })
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        JSON.stringify(
          [
            {
              hours: 4.5,
              project: {
                name: "Test",
              },
            },
          ],
          null,
          2
        )
      );
    });

    it("should return all of pages when --page=all", async () => {
      const pagedResponses = [];
      const timeEntries = [];
      const totalPages = 4;

      for (let i = 1; i <= totalPages; i++) {
        const timeEntry = {
          id: i,
          hours: i * 2,
          project: {
            id: 23,
            name: "Test",
          },
        };
        timeEntries.push(timeEntry);
        pagedResponses.push({
          time_entries: [timeEntry],
          page: i,
          next_page: i === totalPages ? null : i + 1,
        });
      }

      const axiosSpy = jest
        .spyOn(axios, "request")
        .mockReturnValueOnce(Promise.resolve({ data: pagedResponses[0] }))
        .mockReturnValueOnce(Promise.resolve({ data: pagedResponses[1] }))
        .mockReturnValueOnce(Promise.resolve({ data: pagedResponses[2] }))
        .mockReturnValueOnce(Promise.resolve({ data: pagedResponses[3] }));

      const consoleSpy = jest.spyOn(console, "log");

      await handler({
        $0: "",
        _: [],
        page: "all",
        output: "json",
      });

      expect(axiosSpy).toHaveBeenCalledTimes(totalPages);
      expect(consoleSpy).toHaveBeenCalledWith(
        JSON.stringify(timeEntries, null, 2)
      );
    });
  });

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
          "Content-Type": "application/json",
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
            "Content-Type": "application/json",
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
});
