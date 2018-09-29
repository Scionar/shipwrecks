const debugMsg = require("./utils/debug-msg");
const request = require("./utils/request");
const requestErrorHandling = require("./utils/request-error-handling");

module.exports.addGame = name => ({
  type: "ADD_GAME",
  name
});

module.exports.selectGameFromList = index => ({
  type: "SELECT_GAME_FROM_LIST",
  index
});

const addPlayerInformation = authKey => ({
  type: "ADD_PLAYER_INFORMATION",
  authKey
});
module.exports.addPlayerInformation;

module.exports.addPlayerRequest = () => dispatch => {
  request("post", "/player")
  .then(
    response => {
      debugMsg(response, 'authKey')
      dispatch(addPlayerInformation(response.authKey));
    }
  )
};
