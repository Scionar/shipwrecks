const debugMsg = require("./utils/debug-msg");
const request = require("./utils/request");
const requestErrorHandling = require("./utils/request-error-handling");

module.exports.setGames = games => ({
  type: "SET_GAME_LIST",
  games
});

module.exports.getAllGamesRequest = () => dispatch => {
  return request("get", "/game");
};

module.exports.addGameRequest = name => dispatch => {
  return request("post", "/game", { jsonBody: { name } });
};

module.exports.selectGameFromList = index => ({
  type: "SELECT_GAME_FROM_LIST",
  index
});

module.exports.addPlayerInformation = authKey => ({
  type: "ADD_PLAYER_INFORMATION",
  authKey
});

module.exports.addPlayerRequest = () => dispatch => {
  return request("post", "/player");
};
