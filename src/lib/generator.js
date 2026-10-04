import { pick, randomInt, shuffle } from "./random";

export const MAX_AMOUNT = 99;
const MAX_PARAGRAPH_LENGTH = 400;
const MIN_LIST_ITEMS = 4;
const MAX_LIST_ITEMS = 7;

/**
 * Endless shuffled stream over `items`: reshuffles once the pool is used up,
 * so every item is shown before any item repeats.
 */
function createDeck(items, random) {
  let pool = [];
  return () => {
    if (!pool.length) pool = shuffle(items, random);
    return pool.pop();
  };
}

export function clampAmount(value) {
  const amount = Number.parseInt(value, 10);
  if (Number.isNaN(amount)) return 1;
  return Math.min(MAX_AMOUNT, Math.max(1, amount));
}

/**
 * Builds Recruitment Ipsum.
 * - type "sentences" returns an array of paragraph strings
 * - type "listitems" returns an array of lists (arrays of strings)
 */
export function generateIpsum(
  content,
  { type = "sentences", amount = 5, startWith = true } = {},
  random = Math.random,
) {
  const draw = createDeck(content[type], random);
  const total = clampAmount(amount);
  const output = [];

  for (let i = 0; i < total; i++) {
    const first = i === 0 && startWith;

    if (type === "listitems") {
      const size = randomInt(MIN_LIST_ITEMS, MAX_LIST_ITEMS, random);
      const items = first ? [content.startListitem] : [];
      while (items.length < size) items.push(draw());
      output.push(items);
    } else {
      const lines = first ? [content.startSentence] : [];
      while (lines.join(" ").length < MAX_PARAGRAPH_LENGTH) lines.push(draw());
      output.push(lines.join(" "));
    }
  }

  return output;
}

/**
 * Mixes the given name into a pool of random names, so it shows up most of
 * the time, but not always. Recruiters get names wrong too.
 */
function pickName(name, otherName, content, random) {
  if (!name) return pick(content.placeholderNames, random);
  const pool = [
    ...content.names,
    ...Array(200).fill(name),
    ...(otherName ? Array(10).fill(otherName) : []),
  ];
  return pick(pool, random);
}

/** Builds a complete recruitment message. */
export function generateMail(
  content,
  { to = "", from = "" } = {},
  random = Math.random,
) {
  const toName = to.trim();
  const fromName = from.trim();
  const sentences = shuffle(content.sentences, random);

  return {
    salutation: `${pick(content.salutations, random)} ${pickName(toName, fromName, content, random)},`,
    opener: random() < 0.95 ? pick(content.openers, random) : null,
    message: sentences
      .slice(0, randomInt(MIN_LIST_ITEMS, MAX_LIST_ITEMS, random))
      .join(" "),
    closer: random() < 0.95 ? pick(content.closers, random) : null,
    signoff: pick(content.signoffs, random),
    signature: pickName(fromName, toName, content, random),
  };
}

/** Plain-text versions for the clipboard. */
export function ipsumToText(output, type) {
  if (type === "listitems") {
    return output
      .map((list) => list.map((item) => `- ${item}`).join("\n"))
      .join("\n\n");
  }
  return output.join("\n\n");
}

export function mailToText(mail) {
  return [mail.salutation, mail.opener, mail.message, mail.closer]
    .filter(Boolean)
    .concat(`${mail.signoff}\n${mail.signature}`)
    .join("\n\n");
}
