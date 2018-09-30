const fetch = require("node-fetch");
const store = require("../store");
const requestErrorHandling = require("./request-error-handling");
const debugMsg = require("./debug-msg");

const serverHost = "http://localhost:3000";

const request = (method, url, params = {}) => {
  const authKey = store.getState().player.authKey;
  const requestConfig = {
    method,
    headers: { "Auth-key": authKey }
  };

  if (params.jsonBody) {
    requestConfig.body = JSON.stringify(params.jsonBody);
    requestConfig.headers["Content-type"] = "application/json";
  }

  const requestUrl = `${serverHost}${url}`;
  return fetch(requestUrl, requestConfig).then(
    res => res.json(),
    error => {
      requestErrorHandling(error, `Request error (${requestUrl})`);
    }
  );
};

module.exports = request;
