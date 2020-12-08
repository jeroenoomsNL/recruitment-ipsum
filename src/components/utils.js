export function shuffleItems(items) {
  return [...items.sort(() => 0.5 - Math.random())];
}

export function randomBetween(min, max) {
  return Math.min(max, Math.floor(Math.random() * max + min));
}

export function newItemFromArray(array, current) {
  let newItem = current;

  while (newItem === current) {
    const index = Math.floor(Math.random() * array.length);
    newItem = array[index];
  }

  return newItem;
}
