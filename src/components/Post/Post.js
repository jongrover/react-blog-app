import React from 'react';
import './Post.css';

class Post extends React.Component {
  render() {
    const post = this.props.post;
    if (post) {
      return (
        <section className="col-9">
          <h2>{post.title}</h2>
          <p><small>{post.date}</small></p>
          <p>{post.body}</p>
          <p><small>&mdash; {post.author}</small></p>
        </section>
      );
    } else {
      return (
        <section className="col-9">
          <h2>Error</h2>
          <p>No post was found.</p>
        </section>
      );
    }
  }
}

export default Post;
