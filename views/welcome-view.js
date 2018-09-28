var blessed = require("blessed");
var carousel = require("../carousel");
var store = require("../store");
var screen = require("../screen");
var { selectGameFromList } = require('../actions');

var view = blessed.box({
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

var title = blessed.box({
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

var helpText = blessed.box({
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

var gameList = blessed.list({
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
  screen.debug(index);
  carousel.show('gameView');
});

var noGamesText = blessed.text({
  parent: view,
  top: "center",
  left: "center",
  shrink: true,
  height: 1,
  content: 'No games available',
  style: {
    fg: "white"
  }
});

var setGameListItems = () => {
  gameList.setItems(getGameListItems());
};

var getGameListItems = () =>
  store.getState().games.map(item => `${item.name} {|} ${item.status}`);

var toggleListAndText = () => {
  if (getGameListItems().length) {
    setGameListItems();
    noGamesText.hide();
    gameList.show();
  } else {
    noGamesText.show();
    gameList.hide();
  }
};

module.exports = {
  target: view,
  mount: () => {
    toggleListAndText();
    gameList.focus();
  },
  unmount: () => {}
};
