/**
 * Recruiter vocabulary. Used for the statistics on the About page and for
 * the "highlight buzzwords" marker on generated text.
 */
export const BUZZWORD_GROUPS = [
  { label: "“interesting” mentions", terms: ["interesting", "interessant"] },
  {
    label: "“your profile” mentions",
    terms: ["your profile", "je profiel", "jouw profiel"],
  },
  {
    label: "“opportunity” mentions",
    terms: [
      "opportunity",
      "opportunities",
      "challenge",
      "challenges",
      "uitdaging",
      "mogelijkheid",
      "mogelijkheden",
    ],
  },
  { label: "coffee mentions", terms: ["coffee", "koffie"] },
  { label: "agile mentions", terms: ["scrum", "agile"] },
  { label: "Tesla mentions", terms: ["tesla"] },
];

const HIGHLIGHT_TERMS = [
  ...BUZZWORD_GROUPS.flatMap((group) => group.terms),
  "exciting",
  "passionate",
  "rockstar",
  "ninja",
  "dream",
  "unique",
  "uniek",
  "fantastic",
  "fantastisch",
  "uitdagend",
  "uitdagende",
];

const escape = (term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Longest terms first, so "opportunities" wins over "opportunity".
const pattern = new RegExp(
  `(${[...HIGHLIGHT_TERMS]
    .sort((a, b) => b.length - a.length)
    .map(escape)
    .join("|")})`,
  "gi",
);

/**
 * Splits text into segments: `{ text, buzz }` where `buzz` marks a buzzword.
 */
export function splitBuzzwords(text) {
  // split() with a capturing group puts the matches on the odd indices
  return text
    .split(pattern)
    .map((part, index) => ({ text: part, buzz: index % 2 === 1 }))
    .filter((segment) => segment.text);
}
