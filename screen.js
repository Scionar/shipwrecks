var blessed = require("blessed");

// Create a screen object.
var screen = blessed.screen({
  smartCSR: true,
  debug: process.env.DEBUG === "true" ? true : false
});

module.exports = screen;
