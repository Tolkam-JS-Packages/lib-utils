/**
 * Throttled functions queue that gets executed
 * a maximum number of times per interval
 *
 * Based on shaunpersad/throttled-queue
 *
 * <code>
 *     // create a queue with at most 5 requests per second
 *     const throttle = throttledQueue(5, 1000);
 *
 *     // use it
 *     throttle(myFnToThrottle);
 * </code>
 *
 * @see https://github.com/shaunpersad/throttled-queue
 *
 * @param maxRequests
 * @param interval
 * @param evenlySpaced
 */
function throttledQueue(maxRequests: number, interval: number, evenlySpaced = false) {

    // all requests should be evenly spaced
    if (evenlySpaced) {
        interval = interval / maxRequests;
        maxRequests = 1;
    }

    if (interval < 200) {
        console.warn('An interval of less than 200ms can create performance issues.');
    }

    const queue: Function[] = [];
    let lastCalled = Date.now();
    let timeout: number | undefined;

    /**
     * Gets called at a set interval to remove items from the queue.
     * This is a self-adjusting timer,
     * since the browser's setTimeout is highly inaccurate.
     */
    const dequeue = function() {
        const threshold = lastCalled + interval;
        const now = Date.now();

        // Adjust the timer if it was called too early
        if (now < threshold) {
            clearTimeout(timeout);
            timeout = setTimeout(dequeue, threshold - now);
            return;
        }

        const callbacks = queue.splice(0, maxRequests);
        for(let i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }

        lastCalled = Date.now();
        if (queue.length) {
            timeout = setTimeout(dequeue, interval);
        } else {
            timeout = undefined;
        }
    };

    return function enqueue(callback: Function) {
        queue.push(callback);
        if (!timeout) {
            timeout = setTimeout(dequeue, interval);
        }
    };
}