/**
 * Queues and throttles consecutive function calls
 *
 * @param func
 * @param delay
 *
 * @returns {Function}
 */
export default function rateLimiter<T extends TFunc>(func: T, delay: number) {
    let isCalled = false,
        queue: T[] = [];

    const dequeue = () => {
        if (queue.length && !isCalled) {
            isCalled = true;
            queue.shift()!();
            setTimeout(() => {
                isCalled = false;
                dequeue();
            }, delay);
        }
    };

    const limited = function () {
        queue.push(func.bind(this, ...Array.from(arguments)));
        dequeue();
    };

    return limited as (...args: Parameters<T>) => ReturnType<T>;
}

type TFunc = (...args: any[]) => any;