const screen = require("../screen");

module.exports = (msg, identifier = 'Debug') => {
  screen.debug(`${identifier}: ${msg}`);
};
