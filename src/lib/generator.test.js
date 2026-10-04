import { describe, expect, it } from "vitest";
import content from "@/assets/content.json";
import {
  clampAmount,
  generateIpsum,
  generateMail,
  greeting,
  greetingName,
  ipsumToText,
  mailToText,
} from "./generator";

describe("clampAmount", () => {
  it("keeps amounts within range", () => {
    expect(clampAmount("abc")).toBe(1);
    expect(clampAmount(0)).toBe(1);
    expect(clampAmount("12")).toBe(12);
    expect(clampAmount(5000)).toBe(99);
  });
});

describe.each(["en", "nl"])("generateIpsum (%s)", (lang) => {
  const corpus = content[lang];

  it("creates the requested number of paragraphs", () => {
    const output = generateIpsum(corpus, { type: "sentences", amount: 30 });
    expect(output).toHaveLength(30);
    output.forEach((paragraph) => {
      expect(typeof paragraph).toBe("string");
      expect(paragraph).not.toContain("undefined");
    });
    expect(output[0].startsWith(corpus.startSentence)).toBe(true);
  });

  it("creates lists of 4 to 7 items", () => {
    const output = generateIpsum(corpus, {
      type: "listitems",
      amount: 40,
      startWith: false,
    });
    expect(output).toHaveLength(40);
    output.forEach((list) => {
      expect(list.length).toBeGreaterThanOrEqual(4);
      expect(list.length).toBeLessThanOrEqual(7);
      list.forEach((item) => expect(item).toEqual(expect.any(String)));
    });
    expect(output[0][0]).not.toBe(corpus.startListitem);
  });

  it("does not mutate the content", () => {
    const before = [...corpus.sentences];
    generateIpsum(corpus, { amount: 10 });
    expect(corpus.sentences).toEqual(before);
  });

  it("creates a complete mail", () => {
    const mail = generateMail(corpus, { to: "Ada", from: "Bob" });
    expect(mail.salutation).toMatch(/,$/);
    expect(mail.message.length).toBeGreaterThan(0);
    expect(mail.signoff).toEqual(expect.any(String));
    expect(mail.signature).toEqual(expect.any(String));
  });
});

describe("plain text output", () => {
  it("formats lists as dashes", () => {
    expect(ipsumToText([["a", "b"], ["c"]], "listitems")).toBe(
      "- a\n- b\n\n- c",
    );
  });

  it("skips missing opener and closer", () => {
    const text = mailToText({
      salutation: "Hi Ada,",
      opener: null,
      message: "Join us.",
      closer: null,
      signoff: "Cheers,",
      signature: "Bob",
    });
    expect(text).toBe("Hi Ada,\n\nJoin us.\n\nCheers,\nBob");
  });
});

describe("greetings", () => {
  const corpus = content.en;

  it("can address someone by name, or skip the name", () => {
    expect(greeting(corpus, "Ada")).toMatch(/^\S+( \S+)? Ada,$/);
    expect(greeting(corpus, null)).toMatch(/^[^,]+,$/);
    expect(corpus.salutations).toContain(greeting(corpus, null).slice(0, -1));
  });

  it("supports every greeting style", () => {
    expect(greetingName(corpus, "name", "Ada")).toBe("Ada");
    expect(greetingName(corpus, "none", "Ada")).toBeNull();
    expect(corpus.placeholderNames).toContain(
      greetingName(corpus, "placeholder", "Ada"),
    );
    expect(corpus.names).toContain(greetingName(corpus, "wrongName", "Ada"));
  });
});
