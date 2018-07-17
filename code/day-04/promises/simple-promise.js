// Simple promise demo

let p = new Promise((resolve, reject) => {
  // Enclose the long running operation here
  // For example, make a server request
  // If the request is successful
  //    call resolve(), optionally you can pass arguments that reach the then() callback
  // If the request is failed
  //    call reject(), optionally you can pass arguments that reach the catch() callback

  setTimeout(() => {
    // console.log('request is fulfilled.');

    // Indicates success
    resolve({
      id: 1,
      name: 'naveen'
    });

    // Indicates failure
    // reject('request failed');

  }, 3000);
});

console.log('p:', p);

// Longer syntax
// p.then((data) => {
//   console.log('Long running request succeeded.', data);
// });
// p.catch((error) => {
//   console.log('Long running request failed.', error);
// });

// Shorter syntax, an example of chaining method calls as well
p
  .then((data) => {
    console.log('Long running request succeeded.', data);
  })
  .catch((error) => {
    console.log('Long running request failed.', error);
  });