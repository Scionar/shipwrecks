var mainScreen = null;
var viewArray = [];

/**
 * A view object
 * @typedef {Object} View
 * @property {string} name - Name of the view for reference
 * @property {blessed.screen} view - Blessed box object
 * @property {(string | array)} key - Keys to show the view
 */

/**
 * Initialize carousel. Set screen where to attach views.
 *
 * @param {blessed.screen} screen - Main screen where to append views
 */
var init = screen => {
  mainScreen = screen;
};

/**
 * Add views to screen.
 *
 * @param {...View} view - View objects to be attached to screen.
 */
var add = (...args) => {
  args.forEach(arg => {
    // Append to screen
    mainScreen.append(arg.view.target);

    // Set key to show this view
    mainScreen.key(arg.key, (ch, key) => {
      show(arg.name);
    });

    // Push to array
    viewArray.push(arg);
  });
};

/**
 * Show only one view defined by it's name. Hide all others. Run mount and
 * unmount callbacks of views if needed.
 *
 * @param {string} name - Name of the view which is shown
 */
var show = (name, render = true) => {
  viewArray.forEach(item => {
    if (item.name === name && item.shown === false) {
      item.view.target.show();
      item.view.mount();
      item.shown = true;
    } else {
      item.view.target.hide();
      item.view.unmount();
      item.shown = false;
    }
  });

  if (render) mainScreen.render();
};

/**
 * Add keys to close the app.
 *
 * @param {(string | array)} keys - Keys to exit the app
 */
var exit = keys => {
  mainScreen.key(keys, (ch, key) => {
    return process.exit(0);
  });
};

module.exports = {
  init,
  add,
  show,
  exit
};
