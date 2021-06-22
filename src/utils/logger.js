/**
 * @author Conner
 * @since 22/06/21
 */

// Logger Class
class Logger {
  static log = (prefix, string) => console.log(`\x1b[94m(${prefix} :: log)\x1b[37m ${string}`);
  static warn = (prefix, string) => console.log(`\x1b[93m(${prefix} :: warn)\x1b[37m ${string}`);
  static error = (prefix, string) => console.log(`\x1b[91m(${prefix} :: error)\x1b[37m ${string}`);
}

export default Logger;