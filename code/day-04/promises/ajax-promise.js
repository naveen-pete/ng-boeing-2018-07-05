/**
 * Function to execute an HTTP GET Ajax request
 * 
 * url {string} URL to which Ajax call is to be made
 * cb {function} Callback function which is called when HTTP call resulted in 
 *    successful response or failure. The callback is passed the error as first argument 
 *    (or null if no error) and response as second argument - in case of error, 
 *    the underlying XMLHttpRequest object is passed. The response is assumed to be in JSON format 
 *    and is parsed and sent.
 */

// xhrGet('http://localhost:3000/customers', function(err, result) {})
// xhrGet('http://localhost:3000/customers', function(err, result) {}, 'POST')

function xhrGet(url) {
  const p = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.onload = function () {
      console.log(`xhrGet() onload - Response received, status: ${this.status}, statusText: ${this.statusText}.`);
      if (this.status >= 200 && this.status < 400) {
        var result = JSON.parse(this.responseText);

        // cb(null, result);
        resolve(result);
      } else {
        // cb(new Error('No data available!'));
        reject(new Error('No data available!'));
      }
    };

    req.onerror = function (e) {
      console.log('xhrGet() onerror - Error: ', e);

      // cb(new Error('Request failed!'));
      reject(new Error('Request failed!'));
    };

    req.open('GET', url, true);
    req.send();
    console.log('xhrGet() - Request sent to server!');

  });

  return p;
}