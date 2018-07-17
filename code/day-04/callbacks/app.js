// Get user for a username
// https://jsonplaceholder.typicode.com/users/?username=Samantha

// Get posts for a particular user id
// https://jsonplaceholder.typicode.com/users/3/posts

// Get comments for a particular post id
// https://jsonplaceholder.typicode.com/posts/21/comments

const username = 'Samantha';
xhrGet(`https://jsonplaceholder.typicode.com/users/?username=${username}`, (err, users) => {
  if (err) {
    console.log('Error:', err.message);
    return;
  }

  console.log('users:', users);
  const userId = users[0].id;
  xhrGet(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, (err, posts) => {
    if (err) {
      console.log('Error:', err.message);
      return;
    }

    console.log('posts:', posts);
    const postId = posts[0].id;
    xhrGet(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, (err, comments) => {
      if (err) {
        console.log('Error:', err.message);
        return;
      }

      console.log('comments:', comments);
      // const emails = comments.map(function (comment) {
      //   return {
      //     id: comment.id,
      //     email: comment.email
      //   };
      // });

      // Anonymous function syntax
      // const emails = comments.map(function (comment) {
      //   return comment.email;
      // });

      // Arrow function syntax
      const emails = comments.map(comment => comment.email);

      console.log('emails:', emails);
    });
  });
});

// function a() {
//   console.log('a()');
// }

// var b = function () {
//   console.log('b()');
// };

// a();
// b();

// 1
// var double = (n) => {
//   return n * 2;
// }

// 2
// var double = n => {
//   return n * 2;
// }

// 3
// var double = n => n * 2;

// console.log('double:', double(10));