const carousel = require("./carousel");
const screen = require("./screen");
const store = require('./store');
const { addPlayerRequest } = require('./actions');
const welcomeView = require("./views/welcome-view");
const helpView = require("./views/help-view");
const newGameView = require("./views/new-game-view");
const gameView = require("./views/game-view");

store.dispatch(addPlayerRequest());

carousel.init(screen);

carousel.add(
  carousel.createViewObject("welcomeView", welcomeView, "escape"),
  carousel.createViewObject("helpView", helpView, ["h", "H"]),
  carousel.createViewObject("newGameView", newGameView, ["n", "N"]),
  carousel.createViewObject("gameView", gameView, ["g", "G"])
);

carousel.show("welcomeView");

carousel.exit(["q", "C-c"]);
