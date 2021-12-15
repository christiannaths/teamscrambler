// does not mutate original array
function setValueAtIndex(array, index, value) {
  let arrayCopy = [...array];
  arrayCopy[index] = value;
  return arrayCopy;
}

export { setValueAtIndex };
