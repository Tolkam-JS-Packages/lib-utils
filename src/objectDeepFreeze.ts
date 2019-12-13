/**
 * Freezes object recursively
 *
 * @param object
 */
export default function objectDeepFreeze<T extends object>(object: T): T {
    for (const name of Object.getOwnPropertyNames(object)) {
        const value = object[name];
        object[name] = value && typeof value === 'object' ? objectDeepFreeze(value) : value;
    }

    return Object.freeze(object);
}