var screen = require('./screen');
var carousel = require('./carousel');
var welcomeView = require('./views/welcome-view');
var helpView = require('./views/help-view');

carousel.init(screen);

carousel.add(
  { name: 'welcomeView', view: welcomeView, key: 'escape' },
  { name: 'helpView', view: helpView, key: ['h', 'H'] }
);

carousel.show('welcomeView');

// Quit on Escape, q, or Control-C.
screen.key(['q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Render the screen.
screen.render();
