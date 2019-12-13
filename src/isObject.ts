/**
 * Checks if value is object
 *
 * @param {unknown} value
 *
 * @returns {boolean}
 */
export function isObject(value: unknown): boolean {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
}


/**
 * Checks if value is plain object
 *
 * @param {unknown} value
 *
 * @returns {boolean}
 */
export function isPlainObject(value: any): boolean {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }

    const prototype = Object.getPrototypeOf(value);

    return prototype === null || prototype === Object.getPrototypeOf({});
}