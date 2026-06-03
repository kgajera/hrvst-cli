import fs from "fs";
import _ from "lodash";
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
  } catch {
    throw new ConfigNotFoundError();
  }
}

export async function saveConfig(config: Partial<Config>): Promise<void> {
  try {
    const existingConfig = await getConfig();

    await fs.promises.writeFile(
      await configPath(),
      JSON.stringify(Object.assign({}, existingConfig, config)),
      { mode: 0o600 },
    );
  } catch {
    await fs.promises.writeFile(await configPath(), JSON.stringify(config), {
      mode: 0o600,
    });
  }
}

export function getAliasNamesSync(): string[] {
  try {
    const configFilePath = path.join(ospath.home(), ".hrvst", "config.json");
    const config = JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
    const aliases =
      _.get(config, `accountConfig.${config.accountId}.aliases`) || {};
    return Object.keys(aliases);
  } catch {
    throw new ConfigNotFoundError();
  }
}

async function configPath(): Promise<string> {
  const dir = path.join(ospath.home(), ".hrvst");

  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir, { mode: 0o700 });
  }

  return path.join(dir, "config.json");
}
