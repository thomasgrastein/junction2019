import React, { Component } from 'react';
import { Button, Layout, List, Steps, Row, Col, Icon } from 'antd';
import logo from './logo2.svg';
import Webcam from "react-webcam";

import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import FourthStep from './steps/FourthStep';
import FifthStep from './steps/FifthStep';
import SixthStep from './steps/SixthStep'

import { ExampleFunction } from './Functions';

import './App.scss';

const {
  Header, Footer, Content,
} = Layout;
const Step = Steps.Step;


class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [],
      current: 2,
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

  addCaptureToState = (imageSrc) => {
    this.setState({
        pics: [...this.state.pics, imageSrc]
    }, () => this.sendImagesToFilio())
  };

  removeCaptureFromState = (e) => {
      this.setState(prevState => ({
          pics: prevState.pics.filter(image => image !== e)
      }));
  };

  sendImagesToFilio = () => {
      let data = {"file": this.state.pics[0]};
      fetch('https://Fileiostefan.skliarovV1.p.rapidapi.com/uploadFile', {
          method: 'POST',
          headers: {
              "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a",
              "Content-Type": "application/x-www-form-urlencoded",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
          },
          body: JSON.stringify(data)
      }).then(r => console.log(r)).catch(e => console.log(e))
  }


  render() {
      let steps = [{
        title: 'Point',
          icon: <Icon type="user" />,
        content: <FirstStep />,
      }, {
        title: 'Describe',
        icon: <Icon type="form" />,
        content: <SecondStep />,
      }, {
        title: 'Camera',
        icon: <Icon type="camera" />,
        content: <FourthStep addCaptureToState={this.addCaptureToState} removeCaptureFromState={this.removeCaptureFromState}/>,
      }, {
        title: 'Diagnosis',
        icon: <Icon type="file" />,
        content: <ThirdStep />,
      }, {
          title: 'Book',
          icon: <Icon type="calendar" />,
          content: <FifthStep/>,
      }, {
          title: 'Done',
          icon: <Icon type="smile" />,
          content: <SixthStep/>
      }];

    const { current } = this.state;
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
