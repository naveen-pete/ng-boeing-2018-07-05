// Get user for a username
// https://jsonplaceholder.typicode.com/users/?username=Samantha

// Get posts for a particular user id
// https://jsonplaceholder.typicode.com/users/3/posts

// Get comments for a particular post id
// https://jsonplaceholder.typicode.com/posts/21/comments

// Example for nested callbacks
// Results in callback hell

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
      // Here Array.map() returns an array of objects with id and email address
      // const emails = comments.map(function (comment) {
      //   return {
      //     id: comment.id,
      //     email: comment.email
      //   };
      // });

      // Anonymous function syntax
      // Here the Array.map() returns an array of strings, only email ids
      // const emails = comments.map(function (comment) {
      //   return comment.email;
      // });

      // Arrow function syntax
      // Does the same thing as lines 44 to 46, this shorter syntax
      const emails = comments.map(comment => comment.email);

      console.log('emails:', emails);
    });
  });
});