var blessed = require('blessed');

var view = blessed.box({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0'
    },
  }
});

var title = blessed.box({
  top: 0,
  left: 'center',
  width: '100%-2',
  height: 1,
  tags: true,
  content: '{center}{bold}ShipWrecks{/bold}{/center}',
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0'
    },
  }
});
view.append(title);

var helpText = blessed.box({
  bottom: 0,
  left: 'center',
  width: '100%-4',
  height: 1,
  content: 'Press H for help',
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0'
    },
  }
});
view.append(helpText);

module.exports = view;
