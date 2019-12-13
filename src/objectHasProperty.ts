/**
 * Checks if object has property even if it does not have a prototype
 *
 * @param object
 * @param prop
 *
 * @returns {boolean}
 */
export default function objectHasProperty(object: object, prop: string|number): boolean {
    return Object.prototype.hasOwnProperty.call(object, prop);
}