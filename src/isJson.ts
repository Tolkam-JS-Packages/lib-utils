/**
 * Checks if string is parsable JSON
 *
 * @param {string} str
 *
 * @return {boolean}
 */
export default function isJson(str: string) {
    try {
        const result = JSON.parse(str);
        const type = Object.prototype.toString.call(result);

        return type === '[object Object]'
            || type === '[object Array]'
            || type === '[object Null]'
            || type === '[object Boolean]'
            || type === '[object Number]'
            || type === '[object String]';
    } catch (err) {
        return false;
    }
}
