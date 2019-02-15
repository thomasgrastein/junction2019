import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo2.svg';
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
        "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a"
      }
    }).then(res => res.json()).then(r => {
      this.setState({zones: r}, () => {
        console.log(r);
      })
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Button onClick={() => this.getResultsFromZones()}>Klik her</Button>
          <a
            className="App-link"
            href="https://www.facebook.com/messages/t/erik.poerksen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React by asking Erik
          </a>
        </header>
      </div>
    );
  }
}

export default App;
