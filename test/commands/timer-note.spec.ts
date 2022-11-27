import { afterEach, describe, expect, it, vi } from "vitest";
import { handler, NoteArguments } from "../../src/commands/timer-note";
import * as timerUtils from "../../src/utils/timer";
import * as timeEntryUpdateCommand from "../../src/generated-commands/time-entries/update";

const args = (args: Partial<NoteArguments>): NoteArguments => ({
  _: [],
  $0: "",
  notes: "",
  ...args,
});

const spyOnGetRunningTimer = (timeEntry: Partial<timerUtils.TimeEntry> = {}) =>
  vi.spyOn(timerUtils, "getRunningTimer").mockReturnValue(
    Promise.resolve({
      client: null,
      id: 1,
      notes: null,
      project: null,
      task: null,
      timer_started_at: null,
      ...timeEntry,
    } as any)
  );

describe("note", () => {
  const handlerSpy = vi
    .spyOn(timeEntryUpdateCommand, "handler")
    .mockImplementation(() => Promise.resolve());

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should append note by default", async () => {
    spyOnGetRunningTimer({
      notes: "Existing note",
    });

    await handler(
      args({
        notes: "New note",
      })
    );

    expect(handlerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        notes: "Existing note\n\nNew note",
        time_entry_id: 1,
      })
    );
  });

  it("should append note without new lines when existing value is null", async () => {
    spyOnGetRunningTimer({
      notes: null,
    });

    await handler(
      args({
        notes: "New note",
      })
    );

    expect(handlerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        notes: "New note",
        time_entry_id: 1,
      })
    );
  });

  it("should overwrite existing note with --overwrite option", async () => {
    spyOnGetRunningTimer({
      notes: "Existing note",
    });

    await handler(
      args({
        notes: "New note",
        overwrite: true,
      })
    );

    expect(handlerSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        notes: "New note",
        time_entry_id: 1,
      })
    );
  });
});
