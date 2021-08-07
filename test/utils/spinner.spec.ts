import ora from "ora";
import spinner from "../../src/utils/spinner";

const mockStart = jest.fn();
const mockStop = jest.fn();

jest.mock("ora", () =>
  jest.fn().mockImplementation(() => ({
    start: mockStart,
    stop: mockStop,
  }))
);

describe("spinner", () => {
  afterEach(() => {
    jest.clearAllMocks();
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
      fail("spinner should have thrown error");
    } catch (error) {
      expect(mockStop).toHaveBeenCalledTimes(1);
    }
  });
});
