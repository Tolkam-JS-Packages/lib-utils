import objectHasProperty from './objectHasProperty';

/**
 * Gets object value by path
 *
 * @param {object} obj
 * @param {string} path
 * @param {unknown} def
 * @param {string} split
 *
 * @return {unknown}
 */
export default function objectPath(obj: object, path: string, def?: unknown, split: string = '.') {
    return path
        .split(split)
        .reduce((o, i) => o != null && objectHasProperty(o, i) ? o[i] : def, obj);
}
