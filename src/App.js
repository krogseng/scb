import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">

          <p>This is where I have added my beginning sentence.</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
<body>
<Square>
          <p>Talking about the square</p>
        </Square>
</body>
      </div>
    );
  }
}

export default App;
