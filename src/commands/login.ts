import axios from "axios";
import fs from "fs";
import open from "open";
import http from "http";
import querystring from "querystring";
import { setProfile } from "../util/config";
import { USER_AGENT } from "../util/postman-request-command";

const BASE_URL = "https://id.getharvest.com";

export const command = "login";
export const description = "Log into Harvest";
export const builder = {};

export const handler = async (): Promise<void> => {
  const CLIENT_ID = "xqrh-rWpCecJlp9L-i0dwu_K";

  const server = http
    .createServer(async (req, res) => {
      const queryString = req.url?.split("?")[1] || "";
      const query = querystring.parse(queryString);
      const accessToken = query.access_token as string;
      const accounts = await getAccounts(accessToken);

      await setProfile({
        accessToken,
        accounts: accounts.map((account) => ({
          id: account.id,
          name: account.name,
        })),
      });

      const html = await fs.promises.readFile("static/index.html", "utf-8");

      res.write(html);
      res.end();

      req.socket.end();
      req.socket.destroy();
      server.close();
    })
    .listen(5006);

  open(
    `${BASE_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`
  );
};

async function getAccounts(accessToken: string): Promise<
  {
    id: number;
    name: string;
    product: "harvest";
  }[]
> {
  const response = await axios.get(`${BASE_URL}/api/v2/accounts`, {
    headers: {
      "User-Agent": USER_AGENT,
      Authorization: "Bearer " + accessToken,
    },
  });
  const accounts = response.data.accounts;
  return accounts;
}
