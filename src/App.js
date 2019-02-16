import React, { Component } from 'react';
import { Button, Layout, List, Steps, Row, Col, Icon } from 'antd';
import logo from './logo2.svg';

import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import FourthStep from './steps/FourthStep';
import FifthStep from './steps/FifthStep';

import { ExampleFunction } from './Functions';

import './App.scss';

const {
  Header, Footer, Content,
} = Layout;
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: <FirstStep />,
}, {
  title: 'Second',
  content: <SecondStep />,
}, {
  title: 'Third',
  content: <ThirdStep />,
}, {
  title: 'Fourth',
  content: <FourthStep />,
}, {
  title: 'Fifth',
  content: <FifthStep />,
}];

class App extends Component {
  constructor() {
    super();
    this.state = {
      zones: [],
      current: 0,
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
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
    const { zones, current } = this.state;
    return (
      <div className="App">
        <Layout>
          <Header style={{ position: "sticky", top: 0, zIndex: 10, marginBottom: 100 }}>
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Row className="steps" type="flex" justify="center" align="middle" style={{background: "#f0f2f5" }}>
              <Col span={16}>
                <Steps className="steps" current={current}>
                  {steps.map(item => <Step key={item.title} title={item.title} icon={item.icon} />)}
                </Steps>
              </Col>
            </Row>
          </Header>
          <Content>
            <Row type="flex" justify="center" align="middle">
              <Col span={16}>
                <div className="steps-content">{steps[current].content}</div>
              </Col>
            </Row>

          </Content>
          <Footer style={{ position: 'sticky', width: '100%', bottom: 0, zIndex: 10 }}>
            <Row className="page-navi" type="flex" justify="center">
              <Col span={2}>
                <Button type="primary" onClick={() => this.prev()} disabled={current === 0 ? true : false}><Icon type="left" />Previous</Button>
              </Col>
              <Col span={1} />
              <Col span={2}>
                <Button type="primary" onClick={() => this.next()}>{(current === steps.length - 1) ? "Finish" : "Next"} <Icon type="right" /></Button>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
