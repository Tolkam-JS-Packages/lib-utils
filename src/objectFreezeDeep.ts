/**
 * Freezes object recursively
 *
 * @param object
 */
export default function objectFreezeDeep<T extends object>(object: T): T {
    for (const name of Object.getOwnPropertyNames(object)) {
        const value = object[name];
        object[name] = value && typeof value === 'object' ? objectFreezeDeep(value) : value;
    }

    return Object.freeze(object);
}
/**
 * @deprecated Use objectFreezeDeep() instead
 */
const objectDeepFreeze = objectFreezeDeep;

export { objectDeepFreeze };
