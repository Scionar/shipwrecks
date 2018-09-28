var carousel = require("./carousel");
var screen = require("./screen");
var welcomeView = require("./views/welcome-view");
var helpView = require("./views/help-view");
var newGameView = require("./views/new-game-view");

carousel.init(screen);

carousel.add(
  carousel.createViewObject("welcomeView", welcomeView, "escape"),
  carousel.createViewObject("helpView", helpView, ["h", "H"]),
  carousel.createViewObject("newGameView", newGameView, ["n", "N"])
);

carousel.show("welcomeView");

carousel.exit(["q", "C-c"]);
