import LogT from 'logt';

const LOG_TAG = '🧿';
const logger = new LogT('verbose');
// logger.readConsole();

// See documentation for `readConsole()` for usage
// uncomment following line if you want to override default console methods
// logger.readConsole();

type LogFn = (message: any, ...parts: any[]) => void;

export const error: LogFn = (...args) => logger.error(LOG_TAG, ...args);
export const warn: LogFn = (...args) => logger.warn(LOG_TAG, ...args);
export const info: LogFn = (...args) => logger.info(LOG_TAG, ...args);
export const verbose: LogFn = (...args) => logger.verbose(LOG_TAG, ...args);
export const debug: LogFn = (...args) => logger.debug(LOG_TAG, ...args);
export const silly: LogFn = (...args) => logger.silly(LOG_TAG, ...args);

export default logger;
