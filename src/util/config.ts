import fs from "fs";
import ospath from "ospath";
import path from "path";

export interface Config {
  accessToken: string;
  accountId: string;
}

export class ConfigNotFoundError extends Error {}

export async function getConfig(): Promise<Config | null> {
  try {
    const config = await fs.promises.readFile(await configPath(), "utf-8");
    return JSON.parse(config);
  } catch (error) {
    return null;
  }
}

export async function saveConfig(config: Config): Promise<void> {
  await fs.promises.writeFile(await configPath(), JSON.stringify(config));
}

async function configPath(): Promise<string> {
  const dir = path.join(ospath.home(), ".hrvst");

  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir);
  }

  return path.join(dir, "config.json");
}
