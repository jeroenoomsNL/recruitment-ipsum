import { describe, expect, it } from "vitest";
import { pickDifferent, randomInt, shuffle } from "./random";

describe("shuffle", () => {
  it("returns a permutation without mutating the input", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(input).toEqual([1, 2, 3, 4, 5]);
    expect([...result].sort()).toEqual(input);
  });
});

describe("randomInt", () => {
  it("includes both bounds", () => {
    expect(randomInt(4, 7, () => 0)).toBe(4);
    expect(randomInt(4, 7, () => 0.9999)).toBe(7);
  });
});

describe("pickDifferent", () => {
  it("never returns the current item when there is a choice", () => {
    for (let i = 0; i < 50; i++) {
      expect(pickDifferent(["a", "b"], "a")).toBe("b");
    }
  });

  it("falls back to the only item", () => {
    expect(pickDifferent(["a"], "a")).toBe("a");
  });
});
