/**
 * @description Returns a random number given two boundaries
 * @param min {Number} - lower boundary
 * @param max {Number} - upper bondary
 * @returns {Number}
 */
export const randomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * max) + min;
