import ora from "ora";
import { afterEach, describe, expect, it, vi } from "vitest";
import spinner from "../../src/utils/spinner";

const mockStart = vi.fn();
const mockStop = vi.fn();

vi.mock("ora", () => ({
  default: vi.fn().mockImplementation(() => ({
    start: mockStart,
    stop: mockStop,
  })),
}));

describe("spinner", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should display spinner until promise is resolved", async () => {
    await spinner(
      () =>
        new Promise((resolve) => {
          expect(ora).toHaveBeenCalledTimes(1);
          expect(mockStart).toHaveBeenCalledTimes(1);
          expect(mockStop).not.toHaveBeenCalled();
          resolve(null);
          expect(mockStop).toHaveBeenCalledTimes(1);
        })
    );
  });

  it("should stop spinner if an error is thrown", async () => {
    try {
      await spinner(
        () =>
          new Promise(() => {
            expect(ora).toHaveBeenCalledTimes(1);
            expect(mockStart).toHaveBeenCalledTimes(1);
            expect(mockStop).not.toHaveBeenCalled();
            throw new Error("Worker function error");
          })
      );
      expect(false, "spinner should have thrown error").toBeTruthy();
    } catch (error) {
      expect(mockStop).toHaveBeenCalledTimes(1);
    }
  });
});
