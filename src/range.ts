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
    step = step > 0 ? step : 1;

    while (b < stop) {
        const next = b += step;

        if(next > stop) {
            break;
        }

        a.push(next);
    }

    return a;
}
