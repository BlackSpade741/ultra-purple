import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

async function testRequest () {
  try {
    const result = await fetch("/api", { method: "GET" });
    return await result.text();
  }
  catch (error) {
    return Promise.reject(error);
  }
}

class App extends Component {
  async componentDidMount() {
    const ans = await testRequest();
    console.log(ans);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
      </div>
    );
  }
}

export default App;
