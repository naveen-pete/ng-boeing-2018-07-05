/**
 * Function to execute an HTTP GET Ajax request
 * 
 * url {string} URL to which Ajax call is to be made
 */

// This is the promisified version of xhr request that we saw earlier

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