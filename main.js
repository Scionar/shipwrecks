var carousel = require("./carousel");
var screen = require("./screen");
var welcomeView = require("./views/welcome-view");
var helpView = require("./views/help-view");
var newGameView = require("./views/new-game-view");
var gameView = require("./views/game-view");

carousel.init(screen);

carousel.add(
  carousel.createViewObject("welcomeView", welcomeView, "escape"),
  carousel.createViewObject("helpView", helpView, ["h", "H"]),
  carousel.createViewObject("newGameView", newGameView, ["n", "N"]),
  carousel.createViewObject("gameView", gameView, ["g", "G"])
);

carousel.show("welcomeView");

carousel.exit(["q", "C-c"]);
