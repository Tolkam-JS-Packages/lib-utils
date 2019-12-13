/**
 * Gets random integer with defined step
 *
 * @param {Number} min
 * @param {Number} max
 * @param {Number} step
 */
export default function randomIntStep(min: number, max: number, step: number) {
    const math = Math;
    min = math.ceil(min);
    max = math.floor(max);
    return Math.floor(math.random() * ((max - min) / step + 1)) * step + min;
}