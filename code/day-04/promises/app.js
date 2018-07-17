// Get user for a username
// https://jsonplaceholder.typicode.com/users/?username=Samantha

// Get posts for a particular user id
// https://jsonplaceholder.typicode.com/users/3/posts

// Get comments for a particular post id
// https://jsonplaceholder.typicode.com/posts/21/comments

const username = 'Samantha';
xhrGet(`https://jsonplaceholder.typicode.com/users/?username=${username}`)
  .then(function (users) {
    console.log('users:', users);
    const userId = users[0].id;

    return xhrGet(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  })
  .then((posts) => {
    console.log('posts:', posts);
    const postId = posts[0].id;

    return xhrGet(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  })
  .then((comments) => {
    console.log('comments:', comments);
    // Arrow function syntax
    const emails = comments.map(comment => comment.email);

    console.log('emails:', emails);
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });

// Promises do not block, they initiate the long running operations
// and continue with the next tasks.
// ...more tasks
console.log('Continuing with my other tasks');