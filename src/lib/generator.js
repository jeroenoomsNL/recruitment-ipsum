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

/** The ways a recruiter addresses you, see `greetingName()`. */
export const GREETING_STYLES = ["name", "none", "placeholder", "wrongName"];

/**
 * The name in the greeting, or null for a plain "Hi,". Recruiters don't
 * always fill in a name: they skip it, leave the placeholder in, or use the
 * name from their previous message.
 */
export function greetingName(content, style, name, random = Math.random) {
  if (style === "name" && name) return name;
  if (style === "placeholder") return pick(content.placeholderNames, random);
  if (style === "wrongName") return pick(content.names, random);
  return null;
}

/** "Hi Jeroen," or just "Hi," */
export function greeting(content, name, random = Math.random) {
  const salutation = pick(content.salutations, random);
  return name ? `${salutation} ${name},` : `${salutation},`;
}

function pickGreetingStyle(hasName, random) {
  const roll = random();
  // with a name it's usually right, without one anything goes
  if (hasName) return roll < 0.8 ? "name" : roll < 0.9 ? "wrongName" : "placeholder";
  return roll < 0.4 ? "none" : roll < 0.75 ? "placeholder" : "wrongName";
}

/**
 * Mixes the given name into a pool of random names, so it shows up most of
 * the time, but not always.
 */
function pickSignature(name, otherName, content, random) {
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
    salutation: greeting(
      content,
      greetingName(content, pickGreetingStyle(Boolean(toName), random), toName, random),
      random,
    ),
    opener: random() < 0.95 ? pick(content.openers, random) : null,
    message: sentences
      .slice(0, randomInt(MIN_LIST_ITEMS, MAX_LIST_ITEMS, random))
      .join(" "),
    closer: random() < 0.95 ? pick(content.closers, random) : null,
    signoff: pick(content.signoffs, random),
    signature: pickSignature(fromName, toName, content, random),
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
