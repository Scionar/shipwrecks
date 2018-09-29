const { createStore, applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default;
const reducer = require("./reducer");

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

module.exports = store;
