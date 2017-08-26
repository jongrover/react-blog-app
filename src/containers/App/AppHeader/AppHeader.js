import React from 'react';
import logo from '../../../images/logo.svg';
import './AppHeader.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Bloggr</h1>
      </header>
    );
  }
}

export default AppHeader;
