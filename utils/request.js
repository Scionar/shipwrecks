const fetch = require("node-fetch");
const store = require("../store");
const requestErrorHandling = require("./request-error-handling");

const serverHost = "http://localhost:3000";
const authKey = store.getState().player.authKey;

const request = (method, url, params = {}) => {
  const requestConfig = {
    method,
    headers: { "auth-key": authKey }
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
