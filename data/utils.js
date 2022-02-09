const randomFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const rollAllTables = (rolls) => {
  if (!rolls) {
    return null;
  }
  return rolls.map((roll) => {
    return { rollName: roll.name, value: randomFromArray(roll.options) };
  });
};
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rollNdX = (n, x) => {
  let i = 0;
  let total = 0;
  while (i < n) {
    total = total + randomIntFromInterval(1, x);
    i++;
  }
  return total;
};

const camelize = (str) => {
  return str
    .replace("'", "")
    .replace("-", "")
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

export {
  randomFromArray,
  rollAllTables,
  camelize,
  rollNdX,
  randomIntFromInterval,
};
