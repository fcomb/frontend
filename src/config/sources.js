import dtHttp from 'dthttp';

function httpCodesMiddleware({ response, resolve, reject }) {
  if (response.status >= 200 && response.status < 300) {
    resolve(response);
  } else {
    reject(response);
  }
}

const api = new dtHttp(`https://api.fcomb.io/v1/`);
api.setHeader(`Content-Type`, `application/json`);
api.applyMiddleware(httpCodesMiddleware);

export { api };
