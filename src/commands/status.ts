import chalk from "chalk";
import _ from "lodash";
import { verticalTable } from "../utils/table";

type Status =
  | "operational"
  | "under_maintenance"
  | "degraded_performance"
  | "partial_outage"
  | "major_outage";

type StatusResponse = {
  status: {
    description: string;
  };
  components: Array<{
    name: string;
    status: Status;
  }>;
};

export const command = "status";
export const describe = "Check status of Harvest services";

export const handler = async (): Promise<void> => {
  const res = await fetch("https://www.harveststatus.com/api/v2/summary.json");

  if (!res.ok) {
    console.error(
      chalk.red("Failed to fetch status from https://www.harveststatus.com")
    );
    return;
  }

  const data = (await res.json()) as StatusResponse;

  console.log(`\n${data.status.description}: https://www.harveststatus.com\n`);

  const tableData = data.components.reduce(
    (acc: Record<string, string>, c: { name: string; status: Status }) => {
      let status: string;
      const formattedStatus = _.startCase(c.status);

      switch (c.status) {
        case "operational":
          status = chalk.green(formattedStatus);
          break;
        case "under_maintenance":
          status = chalk.blue(formattedStatus);
          break;
        case "degraded_performance":
          status = chalk.yellow(formattedStatus);
          break;
        case "partial_outage":
          status = chalk.hex("#FA5D00")(formattedStatus);
          break;
        case "major_outage":
          status = chalk.red(formattedStatus);
          break;
        default:
          status = formattedStatus;
      }

      acc[c.name] = status;
      return acc;
    },
    {}
  );

  console.log(verticalTable(tableData).toString());
};
