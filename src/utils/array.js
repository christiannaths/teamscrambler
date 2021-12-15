// does not mutate original array
function setValueAtIndex(array, index, value) {
  let arrayCopy = [...array];
  arrayCopy[index] = value;
  return arrayCopy;
}

function shuffleRandom(arr) {
  const copy = [...arr];
  copy.sort(() => {
    const rand = Math.floor(Math.random() * 2) - 1;
    return rand === 0 ? 1 : -1;
  });

  return copy;
}

export { setValueAtIndex, shuffleRandom };
