const defaultState = {
  player: {
    authKey: null
  },
  games: [],
  selectedGame: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_GAME":
      return  {
        ...state,
        nextGameIndex: state.nextGameIndex + 1,
        games: [
          ...state.games,
          { id: state.nextGameIndex, name: action.name, status: 'Waiting' }
        ]
      };
    case "SELECT_GAME_FROM_LIST":
      return {
        ...state,
        selectedGame: state.games[action.index].id
      };
    case "ADD_PLAYER_INFORMATION":
      return {
        ...state,
        player: {
          ...state.player,
          authKey: action.authKey
        }
      };
    case "SET_GAME_LIST":
      return {
        ...state,
        games: action.games
      };
    default:
      return state;
  }
};

module.exports = reducer;
