import inquirer from "inquirer";
import open from "open";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { handler } from "../../src/commands/open";
import * as postmanRequest from "../../src/utils/postman-request-command";

vi.mock("open");
const mockedOpen = open;

describe("open", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should open accounts", async () => {
    vi.spyOn(inquirer, "prompt").mockReturnValue(
      Promise.resolve({ command: "accounts" })
    );
    await handler();
    expect(mockedOpen).toHaveBeenCalledTimes(1);
    expect(mockedOpen).toHaveBeenCalledWith("https://id.getharvest.com");
  });

  it("should open api docs", async () => {
    vi.spyOn(inquirer, "prompt").mockReturnValue(
      Promise.resolve({ command: "api" })
    );
    await handler();
    expect(mockedOpen).toHaveBeenCalledTimes(1);
    expect(mockedOpen).toHaveBeenCalledWith(
      "https://help.getharvest.com/api-v2"
    );
  });

  it("should open cli docs", async () => {
    vi.spyOn(inquirer, "prompt").mockReturnValue(
      Promise.resolve({ command: "docs" })
    );
    await handler();
    expect(mockedOpen).toHaveBeenCalledTimes(1);
    expect(mockedOpen).toHaveBeenCalledWith(
      "https://kgajera.github.io/hrvst-cli"
    );
  });

  describe("open account links", () => {
    const COMPANY_BASE_URI = "https://company.harvestapp.com";
    const ID = 2;

    beforeEach(() => {
      vi.spyOn(postmanRequest, "httpRequest").mockReturnValue(
        Promise.resolve({ data: { base_uri: COMPANY_BASE_URI, id: ID } } as any)
      );
    });

    it.each(["expenses", "reports", "time"])(
      "should open %s",
      async (command) => {
        vi.spyOn(inquirer, "prompt").mockReturnValue(
          Promise.resolve({ command })
        );
        await handler();
        expect(mockedOpen).toHaveBeenCalledTimes(1);
        expect(mockedOpen).toHaveBeenCalledWith(
          `${COMPANY_BASE_URI}/${command}`
        );
      }
    );

    it("should open profile", async () => {
      vi.spyOn(inquirer, "prompt").mockReturnValue(
        Promise.resolve({ command: "profile" })
      );
      await handler();
      expect(mockedOpen).toHaveBeenCalledTimes(1);
      expect(mockedOpen).toHaveBeenCalledWith(
        `${COMPANY_BASE_URI}/people/${ID}`
      );
    });
  });
});
