import chalk from "chalk";
import fs from "fs";
import open from "open";
import http from "http";
import { URLSearchParams } from "url";
import { saveConfig } from "../util/config";

const BASE_URL = "https://id.getharvest.com";
const CLIENT_ID = "xqrh-rWpCecJlp9L-i0dwu_K";
export const PORT = 5006;

export const command = "login";
export const description = "Log into Harvest";
export const builder = {};

export const handler = async (): Promise<void> => {
  const server = http
    .createServer(async (req, res) => {
      const queryString = req.url?.split("?")[1] || "";
      const params = new URLSearchParams(queryString);

      const error = params.get("error");
      if (error) {
        console.error(chalk.red(error));
      } else {
        const accessToken = params.get("access_token");
        const scope = params.get("scope");

        if (accessToken && scope?.match(/^harvest:\d+$/)) {
          await saveConfig({
            accessToken,
            accountId: scope.split(":")[1],
          });
          console.log(
            chalk.green("Success! You are now authenticated with Harvest.")
          );
        } else {
          console.error(
            chalk.red("Error getting access token and account id.")
          );
        }
      }

      const html = await fs.promises.readFile("static/index.html", "utf-8");
      res.write(html);
      res.end();

      req.socket.end();
      req.socket.destroy();
      server.close();
    })
    .listen(PORT);

  open(
    `${BASE_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`
  );
};
