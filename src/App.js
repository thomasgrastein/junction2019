import React, { Component } from 'react';
import { Button, Layout, List } from 'antd';
import logo from './logo2.svg';
import './App.css';
const {
  Header, Footer, Content,
} = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = {
      zones: [],
    }
  }

  getResultsFromZones = () => {
    fetch('https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb', {
      headers: {
        "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a"
      }
    }).then(res => res.json()).then(r => {
      this.setState({ zones: r }, () => {
        console.log(r);
      })
    })
  };

  render() {
    const { zones } = this.state;
    return (
      <div className="App">
        <Layout>
          <Header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </Header>
          <Content>
            <Button onClick={() => this.getResultsFromZones()}>Klik her</Button>
            <List>
              {zones ? zones.map((e, k) =>
                <List.Item key={k}>{e.Name}</List.Item>
              ) : null}
            </List>

          </Content>
          <Footer>

          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
