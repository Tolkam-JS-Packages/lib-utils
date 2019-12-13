/**
 * Remove object properties found in keys array
 *
 * @param  {Object} obj
 * @param  {Array}  keys
 * @return {Object}
 */
export default function omit<T>(obj: T, keys: string[]): T {
    const target: any = {};

    for (let i in obj) {
        if (keys.indexOf(i) >= 0) {
            continue;
        }

        if (!Object.prototype.hasOwnProperty.call(obj, i)) {
            continue;
        }

        target[i] = obj[i];
    }

    return target;
}