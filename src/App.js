import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      zones: {},
    }
  }

  getResultsFromZones = () => {
    fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb', {
      headers:{
        "X-RapidAPI-Key": "0ca1127a6emsh44f8aed7c48d5dap1866d1jsn90e23b40f29e"
      }
    }).then(res => res.json()).then(r => {
      console.log(r);
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={() => this.getResultsFromZones()}>Klik her</Button>
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
