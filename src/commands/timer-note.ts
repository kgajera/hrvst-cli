import { Arguments, CommandBuilder } from "yargs";
import { handler as defaultHandler } from "../generated-commands/time-entries/update";
import { getRunningTimer } from "../utils/timer";

export type NoteArguments = Arguments & {
  overwrite?: boolean;
  notes: string;
};

export const command = "note <notes>";
export const describe = "Append notes to a running time entry";

export const builder: CommandBuilder = (yargs) =>
  yargs
    .positional("notes", {
      describe: "Note to append (default) or set",
      type: "string",
    })
    .options({
      overwrite: {
        alias: "o",
        describe: "Overwrite existing notes",
        type: "boolean",
      },
    })
    .version(false);

export const handler = async (args: NoteArguments): Promise<void> => {
  const timer = await getRunningTimer(
    "You have multiple timers running! Which timer do you want to update?"
  );
  if (timer) {
    if (args.overwrite === true) {
      timer.notes = args.notes;
    } else {
      timer.notes = timer.notes?.length
        ? `${timer.notes}\n\n${args.notes}`
        : args.notes;
    }
    await defaultHandler(
      Object.assign(args, {
        fields: "client.name,hours,id,notes,project.name,spent_date,task.name",
        notes: timer.notes,
        time_entry_id: timer.id,
      })
    );
  }
};
