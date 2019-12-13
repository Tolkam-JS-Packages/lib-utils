/**
 * Generates array of integers within a range
 *
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 */
export default function range(start: number, stop: number, step = 1) {
    const a = [start];
    let b = start;

    while (b < stop) {
        a.push(b += step);
    }

    return a;
}