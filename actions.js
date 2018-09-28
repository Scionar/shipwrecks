module.exports.addGame = name => ({
  type: "ADD_GAME",
  name
});

module.exports.selectGameFromList = index => ({
  type: "SELECT_GAME_FROM_LIST",
  index
});
