import React from 'react';

function Forum() {
  // Replace with API + threads
  const posts = [
    { id: 1, author: 'Alice', content: 'How do I use Redux?' },
    { id: 2, author: 'Bob', content: 'Tips for passing the quiz?' },
  ];

  return (
    <div>
      <h2>Community Forum</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>{post.author}:</strong> {post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Forum;