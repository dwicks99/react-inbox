import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Toolbar />
        </div>
        <div>
          <MessageList />
        </div>
      </div>
    );
  }
}

export default App;
