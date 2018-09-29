const blessed = require("blessed");

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
  top: 0,
  left: "center",
  width: "100%-2",
  height: 1,
  tags: true,
  content: "{center}{bold}Help{/bold}{/center}",
  style: {
    fg: "white",
    border: {
      fg: "#f0f0f0"
    }
  }
});
view.append(title);

const keys = [
  { key: "Q", description: "Exit" },
  { key: "H", description: "Help view" },
  { key: "Esc", description: "Start view" },
  { key: "N", description: "New game view" },
  { key: "G", description: "Game view" }
];

const keyList = blessed.table({
  top: "center",
  left: "center",
  width: "40%",
  height: "50%",
  tags: true,
  border: {
    type: "line"
  },
  rows: keys.map(item => [`{bold}${item.key}{/bold}`, `${item.description}`])
});
view.append(keyList);

module.exports = {
  target: view,
  mount: () => {
    view.focus();
  },
  unmount: () => {},
  update: () => {}
};
