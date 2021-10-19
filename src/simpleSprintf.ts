/**
 * Replaces %s and %d placeholders in a string
 *
 * @param str
 * @param args
 */
export default function simpleSprintf(str: string, ...args: any[]) {
    let i = 0;
    return str.replace(/%s|%d/g, () => args[i++]);
}
