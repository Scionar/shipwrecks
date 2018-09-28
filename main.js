var carousel = require('./carousel');
var screen = require('./screen');
var welcomeView = require('./views/welcome-view');
var helpView = require('./views/help-view');

carousel.init(screen);

carousel.add(
  { name: 'welcomeView', view: welcomeView, key: 'escape' },
  { name: 'helpView', view: helpView, key: ['h', 'H'] }
);

carousel.show('welcomeView');

carousel.exit(['q', 'C-c']);
