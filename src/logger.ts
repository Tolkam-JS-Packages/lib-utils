/**
 * Conditionally logs the message into console
 *
 * @param level
 * @param args
 */
function logger(level: 'info' | 'warn' | 'error' | 'log', ...args: any) {
    const url = new URL(window.location.href);

    // @ts-ignore
    if(process.env.NODE_ENV !== 'production' || url.searchParams.get('withlogs') !== null) {
        (typeof self !== 'undefined' ? self : window).console[level].apply(console, args);
    }
}

export default {
    log: logger.bind(logger, 'log'),
    info: logger.bind(logger, 'info'),
    warn: logger.bind(logger, 'warn'),
    error: logger.bind(logger, 'error'),
}