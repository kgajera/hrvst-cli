import postman from "postman-collection";
import { Arguments, CommandBuilder } from "yargs";
import { handler as defaultStopHandler } from "../generated-commands/time-entries/stop";
import { request as updateRequest } from "../generated-commands/time-entries/update";
import { httpRequest } from "../utils/postman-request-command";
import spinner from "../utils/spinner";
import { getNotes, getRunningTimer } from "../utils/timer";

export type StopTimerArguments = Arguments & {
  editor?: boolean;
  notes?: string;
  overwrite?: boolean;
};

export const command = "stop";
export const describe = "Stop a running time entry";

export const builder: CommandBuilder = (yargs) => {
  return yargs
    .options({
      editor: {
        alias: "e",
        description: "Launch editor to add notes",
        type: "boolean",
      },
      notes: {
        alias: "n",
        description: "Any notes to be associated with the time entry",
        type: "string",
      },
      overwrite: {
        alias: "o",
        describe: "Overwrite existing notes",
        type: "boolean",
      },
    })
    .version(false);
};

export const handler = async (args: StopTimerArguments): Promise<void> => {
  const timer = await getRunningTimer(
    "You have multiple timers running! Which timer do you want to stop?",
  );
  if (timer) {
    const notes = await getNotes(args, timer.notes);

    if (notes.length) {
      await spinner(async () =>
        httpRequest(updateRequest.method, new postman.Url(updateRequest.url), {
          notes,
          time_entry_id: timer.id,
        }),
      );
    }

    await defaultStopHandler(
      Object.assign(
        {
          fields:
            "client.name,hours,id,is_running,notes,project.name,spent_date,task.name",
        },
        args,
        { time_entry_id: timer.id },
      ),
    );
  }
};
