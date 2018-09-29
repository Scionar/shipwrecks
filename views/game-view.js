const blessed = require("blessed");
const store = require("../store");

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
  shrink: true,
  height: 1,
  tags: true,
  content: "{center}{bold}Game{/bold}{/center}"
});

const ownGameBoard = blessed.box({
  parent: view,
  top: "center",
  left: "center",
  shrink: true
});

const setBoardContent = () => {
  let board = "";
  board += "    A  B  C  D  E  F  G  H  I  J \n";
  board += " 1 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 2 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 3 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 4 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 5 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 6 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 7 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 8 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += " 9 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n";
  board += "10 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]";
  ownGameBoard.setContent(board);
};

const noGameSelectedText = blessed.text({
  parent: view,
  top: "center",
  left: "center",
  shrink: true,
  height: 1,
  content: "No game selected",
  style: {
    fg: "white"
  }
});

const toggleBoardAndText = () => {
  const selectedGame = store.getState().selectedGame;

  if (selectedGame !== null && selectedGame !== undefined) {
    setBoardContent();
    noGameSelectedText.hide();
    ownGameBoard.show();
  } else {
    noGameSelectedText.show();
    ownGameBoard.hide();
  }
};

const update = () => {
  toggleBoardAndText();
};

module.exports = {
  target: view,
  mount: () => {
    ownGameBoard.focus();
  },
  unmount: () => {},
  update
};
