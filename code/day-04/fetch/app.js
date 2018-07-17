// Get user for a username
// https://jsonplaceholder.typicode.com/users/?username=Samantha

// Get posts for a particular user id
// https://jsonplaceholder.typicode.com/users/3/posts

// Get comments for a particular post id
// https://jsonplaceholder.typicode.com/posts/21/comments

// let p = new Promise((resolve, reject) => {
//   // Make a request to the server
//   // If the request is successful
//   //    resolve()
//   // If the request is failed
//   //    reject()

//   setTimeout(() => {
//     // console.log('request is fulfilled.');
//     reject('request failed');
//     // resolve({
//     //   id: 1,
//     //   name: 'naveen'
//     // });
//   }, 3000);
// });

// console.log('p:', p);

// p.then((data) => {
//   console.log('Long running request succeeded.', data);

// });
// p.catch((error) => {
//   console.log('Long running request failed.', error);

// });

// const username = 'Samantha';
// xhrGet(`https://jsonplaceholder.typicode.com/users/?username=${username}`)
//   .then(function (users) {
//     console.log('users:', users);
//     const userId = users[0].id;

//     return xhrGet(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//   })
//   .then((posts) => {
//     console.log('posts:', posts);
//     const postId = posts[0].id;

//     return xhrGet(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
//   })
//   .then((comments) => {
//     console.log('comments:', comments);
//     // Arrow function syntax
//     const emails = comments.map(comment => comment.email);

//     console.log('emails:', emails);
//   })
//   .catch((error) => {
//     console.log('Error:', error.message);
//   });

// // more tasks;
// console.log('continuing with my other tasks');


var a = 10;
console.log(a);
console.log(typeof a);

a = 'hello';
console.log(a);
console.log(typeof a);