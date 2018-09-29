const fetch = require("node-fetch");
const store = require("../store");
const screen = require("../screen");

const serverHost = "http://localhost:3000";
const authKey = store.getState().player.authKey;

const request = (method, url) => {
  return fetch(`${serverHost}${url}`, {
    method,
    headers: {
      "auth-key": authKey
    }
  }).then(
    res => res.json(),
    error => {
      requestErrorHandling(error, "Request error");
    }
  );
};

module.exports = request;
