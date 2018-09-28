var blessed = require("blessed");
var store = require("../store");

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
  shrink: true,
  height: 1,
  tags: true,
  content: "{center}{bold}Game{/bold}{/center}"
});

var gameBoard = blessed.box({
  parent: view,
  top: "center",
  left: "center",
  shrink: true
});

var setBoardContent = () => {
  let board = '';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]';
  gameBoard.setContent(board);
};

var noGameSelectedText = blessed.text({
  parent: view,
  top: "center",
  left: "center",
  shrink: true,
  height: 1,
  content: 'No game selected',
  style: {
    fg: "white"
  }
});

var toggleBoardAndText = () => {
  const selectedGame = store.getState().selectedGame;

  if (selectedGame !== null && selectedGame !== undefined) {
    setBoardContent();
    noGameSelectedText.hide();
    gameBoard.show();
  } else {
    noGameSelectedText.show();
    gameBoard.hide();
  }
};

module.exports = {
  target: view,
  mount: () => {
    toggleBoardAndText();
    gameBoard.focus();
  },
  unmount: () => {}
};
