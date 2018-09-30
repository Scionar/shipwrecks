const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const reducer = require("./reducer");
const debugMsg = require("./utils/debug-msg");

const store = createStore(reducer, applyMiddleware(thunk));

// store.subscribe(() => {
//   debugMsg(JSON.stringify(store.getState()), 'state');
// });

module.exports = store;
