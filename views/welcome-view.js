var blessed = require("blessed");

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
view.append(title);

var helpText = blessed.box({
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
view.append(helpText);

var games = [
  { name: "Come here", status: "Waiting" },
  { name: "Dev vs UX", status: "Started" }
];

var gameList = blessed.list({
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
      fg: '#000',
      bg: 'white'
    }
  },
  items: games.map(item => `${item.name} {|} ${item.status}`)
});

view.append(gameList);

module.exports = {
  target: view,
  mount: () => {
    gameList.focus();
  },
  unmount: () => {},
};
