const blessed = require("blessed");
const carousel = require("../carousel");
const store = require("../store");
const requestErrorHandling = require("../utils/request-error-handling");
const { addGameRequest, getAllGamesRequest, setGames } = require("../actions");
const debugMsg = require("../utils/debug-msg");

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
  content: "{center}{bold}Create new game{/bold}{/center}",
  style: {
    fg: "white",
    border: {
      fg: "#f0f0f0"
    }
  }
});
view.append(title);

const form = blessed.form({
  parent: view,
  keys: true,
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  content: "Create new game"
});

const input = blessed.textbox({
  parent: form,
  mouse: true,
  keys: true,
  inputOnFocus: true,
  padding: {
    left: 1,
    right: 1
  },
  height: 3,
  name: "name",
  border: {
    type: "line"
  }
});

input.on("submit", () => {
  submit.focus();
});

const submit = blessed.button({
  parent: form,
  mouse: true,
  shrink: true,
  keys: true,
  left: 0,
  top: 4,
  shrink: true,
  name: "submit",
  content: "[ submit ]",
  style: {
    focus: {
      bg: "white"
    }
  }
});

submit.on("press", () => {
  form.submit();
});

form.on("submit", data => {
  const gameName = data.name;

  store
    .dispatch(addGameRequest(gameName))
    .then(() => store.dispatch(getAllGamesRequest()))
    .then(response => store.dispatch(setGames(response.games)))
    .then(() => {
      carousel.show("welcomeView");
    });
});

module.exports = {
  target: view,
  mount: () => {
    input.focus();
  },
  unmount: () => {
    form.reset();
  },
  update: () => {}
};
