import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.css';

class PostList extends React.Component {
  render() {
    const posts = this.props.posts;
    return (
      <nav className="col-3">
        {posts.map( (post) => {
          return <Link to={`/posts/${post.id}`} key={post.id}>{post.title}</Link>
        })}
      </nav>
    );
  }
}

export default PostList;
