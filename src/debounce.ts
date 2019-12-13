/**
 * Simple debounce
 *
 * Debounced functions do not execute when invoked,
 * they wait for a pause of invocations over a configurable duration before executing;
 * each new invocation restarts the timer.
 * Debounce is great for keypress events; when the user starts typing and then pauses
 * you submit all the key presses as a single event, thus cutting down on the handling invocations.
 *
 * @param  {Function} func
 * @param  {Number}   wait
 * @param  {Boolean}  immediate - whether to call function at the beginning,
 *                                not at the end of timeout
 * @return {void}
 */
export default function debounce<T extends TFunc>(func: T, wait: number, immediate?: boolean) {
    let timeout: any;

    const debounced = function() {
        const context = this, args = arguments;
        clearTimeout(timeout);

        timeout = setTimeout(function() {
            timeout = null;
            if (! immediate) {
                func.apply(context, args);
            }
        }, wait);

        if (immediate && ! timeout) {
            func.apply(context, args);
        }
    };

    return debounced as (...args: Parameters<T>) => ReturnType<T>;
}

type TFunc = (...args: any[]) => any;