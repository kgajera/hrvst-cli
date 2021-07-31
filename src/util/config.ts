import fs from "fs";
import ospath from "ospath";
import path from "path";

export interface Config {
  profile: Profile;
}

export interface Profile {
  accessToken: string;
  accounts: {
    id: number;
    name: string;
  }[];
}

export async function setProfile(profile: Profile): Promise<void> {
  const config = await getConfig();
  config.profile = profile;
  await saveConfig(config);
}

export async function getProfile(): Promise<Profile | null> {
  const config = await getConfig();
  return config.profile;
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
    await fs.promises.writeFile(
      file,
      JSON.stringify({
        profile: null,
      })
    );
  }

  return file;
}
