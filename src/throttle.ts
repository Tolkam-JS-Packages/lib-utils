/**
 * Simple throttle
 *
 * Throttled functions execute and then wait a configurable duration
 * before being eligible to fire again.
 * Throttle is great for realtime endpoints that you only want to allow the user
 * to invoke once per a set period of time.
 *
 * @param  {Function} func
 * @param  {Number}   wait
 * @param  {Object}   options
 * @return {mixed}
 */
export default function throttle(func: Function, wait: number, options: { leading?: boolean, trailing?: boolean } = {}) {
    let context: any, args: any, result: any;
    let timeout: any = null;
    let previous = 0;

    const later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
    };

    return function(...a: any[]) {
        const now = new Date().getTime();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}