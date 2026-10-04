/**
 * Returns a shuffled copy of `items` (Fisher–Yates). The input is never mutated.
 */
export function shuffle(items, random = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Random integer between `min` and `max`, both inclusive. */
export function randomInt(min, max, random = Math.random) {
  return min + Math.floor(random() * (max - min + 1));
}

/** Random item from `items`. */
export function pick(items, random = Math.random) {
  return items[Math.floor(random() * items.length)];
}

/** Random item from `items` that differs from `current` (when possible). */
export function pickDifferent(items, current, random = Math.random) {
  const options = items.filter((item) => item !== current);
  return pick(options.length ? options : items, random);
}
