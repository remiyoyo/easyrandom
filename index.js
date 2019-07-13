/**
 * Returns a random whole number between 0 and 100 inclusive;
 *
 * @return {number} random whole number
 */
function getPercent() {
  return Math.floor(Math.random() * 101);
}

/**
 * Returns a random whole number between 0 and max inclusive
 *
 * @param {number} max maxium random number
 * @return {number} random whole number
 */
function getMax(max) {
  const parsedMax = parseInt(max, 10);

  if (parsedMax === 0) {
    return 0;
  }
  if (isNaN(parsedMax)) {
    return 0;
  }

  return Math.floor(Math.random() * parsedMax);
}

/**
 * Returns a random positive whole number between min and max inclusive
 *
 * @param {number} min minimum random number
 * @param {number} max maxium random number
 * @return {number} random whole number
 */
function getBetween(min, max) {
  const parsedMax = parseInt(max, 10);
  const parsedMin = parseInt(min, 10);

  if (isNaN(parsedMax) || isNaN(parsedMin) || parsedMax <= 0 || parsedMin < 0 || parsedMax < parsedMin) {
    return 0;
  }
  if (parsedMax === parsedMin) {
    return parsedMin;
  }

  const rand = Math.floor(Math.random() * parsedMax);

  return  (rand > parsedMin) ? rand : rand + parsedMin;
}

/**
 * Flips a coin, heads is true, tails is false
 * @return {boolean} boolean
 */
const flipACoin = function () {
  return Math.random() > 0.5;
};

module.exports = {
  flipACoin,
  getBetween,
  getPercent,
  getMax
};
