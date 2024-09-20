import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";
import postman from "postman-collection";
import { CommandBuilder, CommandModule } from "yargs";
import { request as companyRequest } from "../generated-commands/company/get";
import { request as meRequest } from "../generated-commands/users/me";
import { httpRequest } from "../utils/postman-request-command";

const openCommands: Record<string, CommandModule> = {
  time: {
    describe: "View your timesheet",
    builder: (yargs) => yargs.option("week", { alias: "w", type: "boolean" }),
    handler: async (args) =>
      openCompanyUrl(args.week === true ? "time/week" : "time"),
  } as CommandModule<{ week?: boolean }, { week?: boolean }>,
  docs: {
    describe: "Harvest CLI documentation",
    handler: async () => openUrl("https://kgajera.github.io/hrvst-cli"),
  },
  accounts: {
    describe: "Harvest account switcher",
    handler: async () => openUrl("https://id.getharvest.com"),
  },
  api: {
    describe: "Harvest API V2 documentation",
    handler: async () => openUrl("https://help.getharvest.com/api-v2"),
  },
  expenses: {
    describe: "Manage expenses",
    handler: async () => openCompanyUrl("expenses"),
  },
  profile: {
    describe: "Edit your profile",
    handler: async () => {
      const me = await httpRequest(
        meRequest.method,
        new postman.Url(meRequest.url),
      );
      await openCompanyUrl(`people/${me.data.id}`);
    },
  },
  reports: {
    describe: "Run reports",
    handler: async () => openCompanyUrl("reports"),
  },
  status: {
    describe: "View status of Harvest services",
    handler: async () => openUrl("https://www.harveststatus.com"),
  },
};

export const command = "open";
export const description = "Open documentation or Harvest in your browser";

export const builder: CommandBuilder = (yargs) => {
  for (const command in openCommands) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    yargs.command<{}>(
      command,
      openCommands[command].describe || "",
      openCommands[command].builder || (((yargs) => yargs) as CommandBuilder),
      openCommands[command].handler,
    );
  }

  return yargs.version(false);
};

export const handler = async (): Promise<void> => {
  const { command } = await inquirer.prompt({
    name: "command",
    type: "list",
    message: "Which page would you like to open in your browser",
    choices: Object.keys(openCommands).map((c) => ({
      name: `${c}${chalk.gray(` - ${openCommands[c].describe}`)}`,
      value: c,
    })),
  });
  if (command in openCommands) {
    await openCommands[command].handler({ _: [], $0: "" });
  } else {
    console.error(chalk.red(`"${command}" link not found`));
  }
};

async function openUrl(url: string): Promise<void> {
  console.log(chalk.gray(`Opening ${url}`));
  await open(url);
}

async function openCompanyUrl(path: string): Promise<void> {
  const company = await httpRequest(
    companyRequest.method,
    new postman.Url(companyRequest.url),
  );
  await openUrl(`${company.data.base_uri}/${path}`);
}
