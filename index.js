/**
 * Returns a random whole number between 0 and 100 inclusive;
 *
 * @return {number} random whole number
 */
const getPercent = () => Math.floor(Math.random() * 101);

/**
 * Returns a random whole number between 0 and max inclusive
 *
 * @param {number} max maxium random number
 * @return {number} random whole number
 */
const getMax = function (max) {
  const parsedMax = Math.floor(parseInt(max, 10));

  if (parsedMax === 0) {
    return 0;
  }
  if (isNaN(parsedMax)) {
    return 0;
  }

  return Math.floor(Math.random() * parsedMax + 1);
};

/**
 * Returns a random positive whole number between min and max inclusive
 *
 * @param {number} min minimum random number
 * @param {number} max maxium random number
 * @return {number} random whole number
 */
const getBetween = function (min, max) {
  const parsedMax = Math.floor(parseInt(max, 10));
  const parsedMin = Math.floor(parseInt(min, 10));

  if (isNaN(parsedMax) || isNaN(parsedMin) || parsedMax <= 0 || parsedMin < 0 || parsedMax < parsedMin) {
    return 0;
  }
  if (parsedMax === parsedMin) {
    return parsedMin;
  }

  const rand = Math.floor(Math.random() * parsedMax + 1);

  return (rand > parsedMin) ? rand : rand + parsedMin;
};

/**
 * Flips a coin, heads is true, tails is false
 * @return {boolean} boolean
 */
const flipACoin = () => Math.random() > 0.5;

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

/**
 * Returns a random string in the characterset ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
 *
 * @param {number} length specify the length of the string defaults to 7
 */
const getString = (length = 7) => getStringWithCustomCharacterSet(length);

/**
 * Returns a random string in the characterset ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
 *
 * @param {number} length specify the length of the string defaults to 7
 */
const getStringNonNumeric = (length = 7) => getStringWithCustomCharacterSet(length, alpha);

/**
 * Returns a random string with custom character set
 *
 * @param {number} length specify the length of the string defaults to 7
 * @param {string} charSet specify the charSet defaults to alpha numeric
 */
const getStringWithCustomCharacterSet = (length = 7, charSet = alpha + '0123456789') => {
  if (length < 1) {
    return '';
  }
  if (charSet.length === 1) {
    return charSet.repeat(length);
  }

  let str = '';
  for (let i = 0; i < length; i ++) {
    // because of inclusive max
    const position = getMax(charSet.length - 1);
    str += charSet.charAt(position);
  }
  return str;
};

module.exports = {
  flipACoin,
  getBetween,
  getPercent,
  getMax,
  getString,
  getStringWithCustomCharacterSet,
  getStringNonNumeric
};
