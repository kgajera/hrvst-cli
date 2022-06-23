import chalk from "chalk";
import inquirer, { ChoiceOptions } from "inquirer";
import { Url } from "postman-collection";
import { request as meRequest } from "../generated-commands/users/me";
import { request as assignmentsRequest } from "../generated-commands/users/project-assignments/me";
import { request as timeEntriesRequest } from "../generated-commands/time-entries/list";
import { httpRequest } from "./postman-request-command";
import spinner from "./spinner";
import { Arguments } from "yargs";

interface ProjectAssignment {
  id: number;
  project: Reference;
  task_assignments: TaskAssignment[];
}

interface Reference {
  id: number;
  name: string;
}

interface TaskAssignment {
  id: number;
  task: Reference;
}

export interface TimeEntry {
  client: Reference;
  id: number;
  notes: string;
  project: Reference;
  task: Reference;
  timer_started_at: string;
}

type TaskChoices = (projectId: number) => ChoiceOptions[] | undefined;

type AssignmentArguments = Arguments & {
  project_id?: number;
  task_id?: number;
};

/**
 * Fetch project and task assignments choices for creating a time entry
 *
 * @returns An object containing ChoiceOptions for project and task assignments
 */
export async function getAssignmentChoices(): Promise<{
  projectChoices: ChoiceOptions[];
  taskChoices: TaskChoices;
}> {
  const assignments = await getProjectAssignments();
  const projectChoices: ChoiceOptions[] = [];
  const projectTaskAssignments: Record<number, TaskAssignment[]> = {};
  const taskChoices: TaskChoices = (projectId) =>
    projectTaskAssignments[projectId]?.map((a) => referenceToChoice(a.task));

  for (const assignment of assignments) {
    if (assignment.task_assignments?.length) {
      projectChoices.push(referenceToChoice(assignment.project));

      projectTaskAssignments[assignment.project.id] =
        assignment.task_assignments;
    }
  }

  return { projectChoices, taskChoices };
}

/**
 * Get current local time in ISO format
 *
 * @returns Date in ISO format
 */
export function getCurrentLocalISOString(): string {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  return new Date(Date.now() - timezoneOffset).toISOString().slice(0, -1);
}

/**
 * Gets `project_id` and `task_id` from prompts if not provided through command
 *
 * @param args
 * @returns Args containing project_id and task_id
 */
export async function normalizeProjectAndTaskAssignment(
  args: AssignmentArguments
): Promise<AssignmentArguments> {
  const { projectChoices, taskChoices } = await spinner(() =>
    getAssignmentChoices()
  );
  let argTaskChoices: ChoiceOptions[] | undefined;

  if (args.project_id) {
    // Task choices if a project argument was provided
    argTaskChoices = taskChoices(args.project_id);

    // Bail if no tasks are found for the given project id argument
    if (!argTaskChoices?.length) {
      throw new Error(
        `No task assignments found for project id: ${args.project_id}`
      );
    }
  }

  // Prompt for project_id and task_id if not given as arguments
  const answers = await inquirer.prompt([
    {
      name: "project_id",
      type: "list",
      message: "Select a project:",
      choices: projectChoices,
      when: !args.project_id,
    },
    {
      name: "task_id",
      type: "list",
      message: "Select a task:",
      choices: (answers) => argTaskChoices || taskChoices(answers.project_id),
      when: !args.task_id,
    },
  ]);

  return Object.assign(args, answers);
}

/**
 * Get all project assignments
 *
 * @returns Array of project assignments
 */
async function getProjectAssignments(): Promise<ProjectAssignment[]> {
  const assignments: ProjectAssignment[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const { data } = await httpRequest(
      assignmentsRequest.method,
      new Url(assignmentsRequest.url),
      {
        page,
      }
    );
    assignments.push(...data.project_assignments);
    page = data.page;
    totalPages = data.total_pages;
  } while (page < totalPages);

  return assignments;
}

/**
 * Get a running time entry. If multiple time entries are found, prompt the
 * user to select one.
 *
 * @param promptMessage Message to use for prompt, if necessary
 * @returns TimeEntry
 */
export async function getRunningTimer(
  promptMessage: string
): Promise<TimeEntry | undefined> {
  const timers = await spinner(() => getRunningTimers());
  let timer: TimeEntry;

  // Bail if there are no running timers
  if (!timers.length) {
    console.error(chalk.yellow("You have no running timers!"));
    return;
  }

  if (timers.length > 1) {
    // Prompt user to select a time entry if there are multiple running timers
    const answers = await inquirer.prompt([
      {
        name: "timer",
        type: "list",
        message: promptMessage,
        choices: timers.map((t) => ({
          name: `[${new Date(t.timer_started_at).toLocaleString()}] ${
            t.client.name
          } -> ${t.project.name} -> ${t.task.name}`,
          value: t,
        })),
      },
    ]);

    timer = answers.timer;
  } else {
    timer = timers[0];
  }

  return timer;
}

/**
 * Find time entries that are running for the authenticated user
 *
 * @returns Array of time entries
 */
export async function getRunningTimers(): Promise<TimeEntry[]> {
  const meResponse = await httpRequest(
    meRequest.method,
    new Url(meRequest.url)
  );
  const timersResponse = await httpRequest(
    timeEntriesRequest.method,
    new Url(timeEntriesRequest.url),
    {
      is_running: true,
      user_id: meResponse.data.id,
    }
  );
  return timersResponse.data.time_entries;
}

/**
 * Maps a reference object to a yargs option
 *
 * @param reference Any object with an id and name field
 * @returns yargs choice option
 */
function referenceToChoice(reference: Reference): ChoiceOptions {
  return {
    name: reference.name,
    value: reference.id,
  };
}