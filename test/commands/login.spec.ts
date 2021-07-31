import { PORT, handler } from "../../src/commands/login";
import { saveConfig } from "../../src/util/config";
import chalk from "chalk";
import open from "open";
import request from "supertest";

jest.mock("open");
const mockedOpen = open as jest.Mocked<typeof open>;

jest.mock("../../src/util/config");

describe("login", () => {
  const oauthServer = request(`http://localhost:${PORT}`);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should save access token and config", async () => {
    const accessToken = "test_token";
    const accountId = "1576721";
    const scope = `harvest:${accountId}`;

    await handler();

    expect(mockedOpen).toHaveBeenCalledTimes(1);
    expect(mockedOpen).toHaveBeenCalledWith(
      "https://id.getharvest.com/oauth2/authorize?client_id=xqrh-rWpCecJlp9L-i0dwu_K&response_type=token"
    );

    await oauthServer.get(
      `?access_token=${accessToken}&expires_in=1209599&scope=${scope}&token_type=bearer`
    );

    expect(saveConfig).toHaveBeenCalledTimes(1);
    expect(saveConfig).toHaveBeenCalledWith({
      accessToken,
      accountId,
    });
  });

  it("should output error", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error");

    const error = "access_denied";
    await handler();

    expect(mockedOpen).toHaveBeenCalledTimes(1);

    await oauthServer.get(`?error=${error}`);

    expect(saveConfig).not.toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(chalk.red(error));
  });
});
