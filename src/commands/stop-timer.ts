import { Arguments, CommandBuilder } from "yargs";
import { handler as defaultHandler } from "../generated-commands/time-entries/stop";
import { getRunningTimer } from "../utils/timer";

export const command = "stop";
export const describe = "Stop a running time entry";

export const builder: CommandBuilder = (yargs) => yargs.version(false);

export const handler = async (args: Arguments): Promise<void> => {
  const timer = await getRunningTimer(
    "You have multiple timers running! Which timer do you want to stop?"
  );
  if (timer) {
    await defaultHandler(
      Object.assign(
        {
          fields:
            "client.name,hours,id,is_running,notes,project.name,spent_date,task.name",
        },
        args,
        { time_entry_id: timer.id }
      )
    );
  }
};
