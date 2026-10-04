import { BUZZWORD_GROUPS } from "./buzzwords";

const LANGUAGES = ["en", "nl"];

function collect(content, keys) {
  return LANGUAGES.flatMap((lang) => keys.flatMap((key) => content[lang][key]));
}

function countMatching(lines, terms) {
  return lines.filter((line) => {
    const lower = line.toLowerCase();
    return terms.some((term) => lower.includes(term.toLowerCase()));
  }).length;
}

/** Statistics about the full Recruitment Ipsum corpus. */
export function getStats(content) {
  const sentences = collect(content, ["openers", "closers", "sentences"]);
  const listItems = collect(content, ["listitems"]);
  const everything = [...sentences, ...listItems];

  return {
    words: everything.join(" ").split(/\s+/).filter(Boolean).length,
    sentences: sentences.length,
    listItems: listItems.length,
    counters: [
      {
        label: "sentences starting with “I”",
        value: everything.filter((line) => /^(I|Ik) /.test(line)).length,
      },
      { label: "questions", value: countMatching(everything, ["?"]) },
      { label: "exclamation marks", value: countMatching(everything, ["!"]) },
      ...BUZZWORD_GROUPS.map(({ label, terms }) => ({
        label,
        value: countMatching(everything, terms),
      })),
    ],
  };
}
