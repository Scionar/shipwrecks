const defaultState = {
  games: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_GAME":
      return {
        ...state,
        games: [
          ...state.games,
          { name: action.name, status: 'Waiting' }
        ]
      };
    default:
      return state;
  }
};

module.exports = reducer;
