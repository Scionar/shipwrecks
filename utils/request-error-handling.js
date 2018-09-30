const screen = require('../screen');

module.exports = (error, identifier) => {
  const identifierMessage = identifier ? identifier : 'Request error';
  const errorMessage = JSON.stringify(error);
  screen.debug(`${identifierMessage}: ${errorMessage}`);
};
