import fs from "fs";
import ospath from "ospath";
import path from "path";

export interface Config {
  accessToken: string;
  accountId: string;
  accountConfig: Record<string, AccountConfig>;
}

export interface AccountConfig {
  aliases: Record<string, Alias>;
}

export interface Alias {
  projectId: number;
  taskId: number;
}

export class ConfigNotFoundError extends Error {}

export async function getConfig(): Promise<Config> {
  try {
    const config = await fs.promises.readFile(await configPath(), "utf-8");
    return JSON.parse(config);
  } catch (error) {
    throw new ConfigNotFoundError();
  }
}

export async function saveConfig(config: Partial<Config>): Promise<void> {
  try {
    const existingConfig = await getConfig();

    await fs.promises.writeFile(
      await configPath(),
      JSON.stringify(Object.assign({}, existingConfig, config)),
    );
  } catch (error) {
    await fs.promises.writeFile(await configPath(), JSON.stringify(config));
  }
}

async function configPath(): Promise<string> {
  const dir = path.join(ospath.home(), ".hrvst");

  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir);
  }

  return path.join(dir, "config.json");
}
