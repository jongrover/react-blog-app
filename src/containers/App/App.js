import React from 'react';
import AppHeader from './AppHeader/AppHeader.js';
import AppMain from './AppMain/AppMain.js';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain />
      </div>
    );
  }

}

export default App;
