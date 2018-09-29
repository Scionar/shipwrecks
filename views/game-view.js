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

var ownGameBoard = blessed.box({
  parent: view,
  top: "center",
  left: "center",
  shrink: true
});

var setBoardContent = () => {
  let board = '';
  board += '    A  B  C  D  E  F  G  H  I  J \n';
  board += ' 1 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 2 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 3 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 4 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 5 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 6 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 7 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 8 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += ' 9 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n';
  board += '10 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]';
  ownGameBoard.setContent(board);
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
    ownGameBoard.show();
  } else {
    noGameSelectedText.show();
    ownGameBoard.hide();
  }
};

module.exports = {
  target: view,
  mount: () => {
    toggleBoardAndText();
    ownGameBoard.focus();
  },
  unmount: () => {}
};
