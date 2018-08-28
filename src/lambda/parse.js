const request = require('request');

export function handler(event, context, callback) {
  const url = event.queryStringParameters;

  request(url, (err, res, body) => {
    if (err) {
      return callback(null, { statusCode: 200, body: err });
    }

    callback(null, { statusCode: 200, body });
  });
};
