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

interface SessionConfig {
  accessToken: string;
  accountId: string;
}

export interface Alias {
  projectId: number;
  taskId: number;
}

export class ConfigNotFoundError extends Error {}

export async function getConfig(): Promise<Config> {
  try {
    const [session, parsedConfig] = await Promise.all([
      readSessionFile(),
      readConfigFile(),
    ]);

    const { accessToken, accountId, ...restConfig } = parsedConfig;

    return {
      accessToken: session.accessToken,
      accountId: session.accountId,
      ...restConfig,
    };
  } catch (error) {
    throw new ConfigNotFoundError();
  }
}

export async function saveConfig(config: Partial<Config>): Promise<void> {
  const { accessToken, accountId, ...rest } = config;

  if (accessToken !== undefined || accountId !== undefined) {
    await writeSessionFile({ accessToken, accountId });
  }

  try {
    const existing = await getConfig();
    const { accessToken, accountId, ...existingRest } = existing;
    await writeConfigFile({ ...existingRest, ...rest });
  } catch {
    await writeConfigFile(rest);
  }
}

export function getAliasNamesSync(): string[] {
  try {
    const sessionFilePath = path.join(ospath.home(), ".hrvst", "session.json");
    const configFilePath = path.join(ospath.home(), ".hrvst", "config.json");

    const session = JSON.parse(fs.readFileSync(sessionFilePath, "utf-8"));
    const config = JSON.parse(fs.readFileSync(configFilePath, "utf-8"));

    const aliases = _.get(config, `accountConfig.${session.accountId}.aliases`) || {};
    return Object.keys(aliases);
  } catch (error) {
    throw new ConfigNotFoundError();
  }
}

async function sessionPath(): Promise<string> {
  const dir = path.join(ospath.home(), ".hrvst");

  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir);
  }

  return path.join(dir, "session.json");
}

async function readSessionFile(): Promise<SessionConfig> {
  const data = await fs.promises.readFile(await sessionPath(), "utf-8");
  return JSON.parse(data);
}

async function writeSessionFile(session: Partial<SessionConfig>): Promise<void> {
  try {
    const existing = await readSessionFile();
    await fs.promises.writeFile(
      await sessionPath(),
      JSON.stringify({ ...existing, ...session }),
    );
  } catch {
    await fs.promises.writeFile(
      await sessionPath(),
      JSON.stringify(session),
    );
  }
}

async function configPath(): Promise<string> {
  const dir = path.join(ospath.home(), ".hrvst");

  if (!fs.existsSync(dir)) {
    await fs.promises.mkdir(dir);
  }

  return path.join(dir, "config.json");
}

async function readConfigFile(): Promise<any> {
  const data = await fs.promises.readFile(await configPath(), "utf-8").catch(() => "{}");
  return JSON.parse(data);
}

async function writeConfigFile(config: any): Promise<void> {
  await fs.promises.writeFile(
    await configPath(),
    JSON.stringify(config),
  );
}
