import { getInterval, time } from "../Library/time";

describe("getInterval", () => {
  it("should return 1 second", () => {
    const interval = getInterval(1000, 2000);
    expect(interval).toBe("1 second");
  });

  it("should return 2 seconds", () => {
    const interval = getInterval(1000, 3000);
    expect(interval).toBe("2 seconds");
  });
  it("should return 1 minute", () => {
    const { minute } = time;
    const interval = getInterval(1000 * minute, 2000 * minute);
    expect(interval).toBe("1 minute");
  });
  it("should return 2 minutes", () => {
    const { minute } = time;
    const interval = getInterval(1000 * minute, 3000 * minute);
    expect(interval).toBe("2 minutes");
  });
  it("should return 1 hour", () => {
    const { hour } = time;
    const interval = getInterval(1000 * hour, 2000 * hour);
    expect(interval).toBe("1 hour");
  });
  it("should return 2 hours", () => {
    const { hour } = time;
    const interval = getInterval(1000 * hour, 3000 * hour);
    expect(interval).toBe("2 hours");
  });
  it("should return 1 day", () => {
    const { day } = time;
    const interval = getInterval(1000 * day, 2000 * day);
    expect(interval).toBe("1 day");
  });
  it("should return 2 days", () => {
    const { day } = time;
    const interval = getInterval(1000 * day, 3000 * day);
    expect(interval).toBe("2 days");
  });
});
