import fs from "fs";
import ospath from "ospath";
import path from "path";

export interface Config {
  accessToken: string;
  accountId: string;
}

export async function getConfig(): Promise<Config> {
  const config = await fs.promises.readFile(await configPath(), "utf-8");
  return JSON.parse(config);
}

export async function saveConfig(config: Config): Promise<void> {
  await fs.promises.writeFile(await configPath(), JSON.stringify(config));
}

async function configPath(): Promise<string> {
  const dir = path.join(ospath.home(), ".hrvst");

  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir);
  }

  const file = path.join(dir, "config.json");

  if (!fs.existsSync(file)) {
    await fs.promises.writeFile(file, "{}");
  }

  return file;
}
