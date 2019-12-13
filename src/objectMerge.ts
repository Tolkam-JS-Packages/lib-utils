import { isObject } from './isObject'

/**
 * Merges two objects
 *
 * Passes values by reference only, no deep cloning
 *
 * @param target
 * @param source
 */
export default function objectMerge(target: object, source: object) {
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!target[key] || !isObject(target[key])) {
                    target[key] = source[key];
                }
                objectMerge(target[key], source[key]);
            } else {
                Object.assign(target, {[key]: source[key]});
            }
        });
    }

    return target;
}