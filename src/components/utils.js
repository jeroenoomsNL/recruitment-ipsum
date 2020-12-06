export function shuffleItems(items) {
  return [...items.sort(() => 0.5 - Math.random())];
}

export function randomBetween(min, max) {
  return Math.min(max, Math.floor(Math.random() * max + min));
}
