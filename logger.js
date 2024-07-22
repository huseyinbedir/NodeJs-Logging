const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m" // Scarlet
  },
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m"
  }
};

function extendConsole() {
  console.success = function(message) {
    console.log(colors.fg.green, message, colors.reset);
  };

  console.warning = function(message) {
    console.log(colors.fg.yellow, message, colors.reset);
  };

  console.info = function(message) {
    console.log(colors.fg.blue, message, colors.reset);
  };

  console.danger = function(message) {
    console.log(colors.fg.red, message, colors.reset);
  };
}

module.exports = extendConsole;
