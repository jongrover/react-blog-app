import React from 'react';
import { Route, Switch } from 'react-router-dom';
import posts from '../../../index.js'
import PostList from '../../../components/PostList/PostList.js';
import Post from '../../../components/Post/Post.js';
import Welcome from '../../Welcome/Welcome.js';
import './AppMain.css';

class AppMain extends React.Component {
  render () {
    return (
      <main className="container-fluid">
        <div className="container">
          <div className="row">
            <PostList posts={posts} />
            <Switch>
              <Route exact path="/"          component={Welcome}    />
              <Route exact path="/posts/:id" render={this._getPost} />
              <Route                         component={Welcome}    />
            </Switch>
          </div>
        </div>
      </main>
    );
  }

  _getPost({match}) {
    const post = posts[parseInt(match.params.id, 10)-1];
    return <Post post={post} />;
  }
}

export default AppMain;
