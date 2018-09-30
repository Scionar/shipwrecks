const blessed = require("blessed");
const carousel = require("../carousel");
const store = require("../store");
const screen = require("../screen");
const {
  selectGameFromList,
  getAllGamesRequest,
  setGames,
  joinGame
} = require("../actions");

const view = blessed.box({
  top: "center",
  left: "center",
  width: "100%",
  height: "100%",
  tags: true,
  border: {
    type: "line"
  },
  style: {
    fg: "white",
    border: {
      fg: "#f0f0f0"
    }
  }
});

const title = blessed.box({
  parent: view,
  top: 0,
  left: "center",
  width: "100%-2",
  height: 1,
  tags: true,
  content: "{center}{bold}ShipWrecks{/bold}{/center}",
  style: {
    fg: "white",
    border: {
      fg: "#f0f0f0"
    }
  }
});

const helpText = blessed.box({
  parent: view,
  bottom: 0,
  left: "center",
  width: "100%-4",
  height: 1,
  content: "Press H for help",
  style: {
    fg: "white",
    border: {
      fg: "#f0f0f0"
    }
  }
});

const gameList = blessed.list({
  parent: view,
  top: "center",
  left: "center",
  width: "70%",
  height: "50%",
  tags: true,
  interactive: true,
  mouse: true,
  keys: true,
  style: {
    selected: {
      fg: "#000",
      bg: "white"
    }
  },
  items: []
});

gameList.on("select", (item, index) => {
  store.dispatch(selectGameFromList(index));
  store.dispatch(joinGame(index)).then(() => {
    carousel.show("gameView");
  });
});

const noGamesText = blessed.text({
  parent: view,
  top: "center",
  left: "center",
  shrink: true,
  height: 1,
  content: "No games available",
  style: {
    fg: "white"
  }
});

const setGameListItems = () => {
  gameList.setItems(getGameListItems());
};

const getGameListItems = () =>
  store.getState().games.map(item => `${item.name} {|} ${item.status}`);

const toggleListAndText = () => {
  if (getGameListItems().length) {
    setGameListItems();
    noGamesText.hide();
    gameList.show();
  } else {
    noGamesText.show();
    gameList.hide();
  }
};

const update = done => {
  store
    .dispatch(getAllGamesRequest())
    .then(response => store.dispatch(setGames(response.games)))
    .then(() => {
      toggleListAndText();
      done();
    });
};

module.exports = {
  target: view,
  mount: () => {
    gameList.focus();
  },
  unmount: () => {},
  update
};
