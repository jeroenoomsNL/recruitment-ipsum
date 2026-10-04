import { describe, expect, it } from "vitest";
import content from "@/assets/content.json";
import { splitBuzzwords } from "./buzzwords";
import { getStats } from "./stats";

describe("splitBuzzwords", () => {
  it("marks buzzwords case-insensitively and keeps the text intact", () => {
    const text = "An exciting Opportunity, with coffee.";
    const segments = splitBuzzwords(text);
    expect(segments.map((s) => s.text).join("")).toBe(text);
    expect(segments.filter((s) => s.buzz).map((s) => s.text)).toEqual([
      "exciting",
      "Opportunity",
      "coffee",
    ]);
  });

  it("prefers the longest match", () => {
    const buzz = splitBuzzwords("opportunities").filter((s) => s.buzz);
    expect(buzz.map((s) => s.text)).toEqual(["opportunities"]);
  });
});

describe("getStats", () => {
  it("counts the corpus", () => {
    const stats = getStats(content);
    expect(stats.words).toBeGreaterThan(1000);
    expect(stats.sentences).toBeGreaterThan(stats.listItems);
    stats.counters.forEach((c) => expect(c.value).toBeGreaterThan(0));
  });
});
