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
    mainScreen.append(arg.view);

    // Set key to show this view
    mainScreen.key(arg.key, (ch, key) => {
      show(arg.name);
      mainScreen.render();
    });

    // Push to array
    viewArray.push(arg);
  });
};

/**
 * Show only one view defined by it's name. Hide all others.
 *
 * @param {string} name - Name of the view which is shown
 */
var show = name => {
  viewArray.forEach(item => {
    item.name === name ? item.view.show() : item.view.hide();
  });
};

module.exports = {
  init,
  add,
  show
};