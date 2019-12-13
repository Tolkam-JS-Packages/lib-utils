/**
 * Keep only object properties found in keys array
 *
 * @param  {Object} obj
 * @param  {Array}  keys
 * @return {Object}
 */
export default function keep<T>(obj: T, keys: string[]): T {
    const target: any = {};
    for (let prop in obj) {
        if (keys.indexOf(prop) >= 0 && Object.prototype.hasOwnProperty.call(obj, prop)) {
            target[prop] = obj[prop];
        }
    }
    return target;
}