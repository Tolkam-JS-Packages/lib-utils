/**
 * Converts timestamp from/to unix format
 *
 * @param {any}     timestamp
 * @param {boolean} fromUnix
 */
export default function convertTimestamp(timestamp: any, fromUnix: boolean): any {
    const math = Math;
    if(typeof timestamp === 'number' &&  isFinite(timestamp) &&  math.floor(timestamp) === timestamp) {
        timestamp = math.round(timestamp * (fromUnix ? 1e3 : .001));
    }
    return timestamp;
}