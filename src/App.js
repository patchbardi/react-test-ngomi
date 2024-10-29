import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class Message extends Component { 
  render() {
    return <p>{this.props.message}</p>;
  }
}

function MessageFunky(props) {
  return <p>{this.props.message}</p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Bitte Gold ich möchte dein Unterztung
          und ich werde die Änderungen live-reloaded.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
