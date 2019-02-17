import React, { Component } from 'react';
import { Button, Layout, List, Steps, Row, Col, Icon } from 'antd';
<<<<<<< HEAD

import Webcam from "react-webcam";

import logo from './Kenko.svg';

=======
import logo from './Kenko.svg';
>>>>>>> 11648654a88b885b3d35252b4802ae0a958e604f

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

  addCaptureToState = (imageSrc) => {
    this.setState({
        pics: [...this.state.pics, imageSrc]
    }, () => this.sendDataToEmailServer())
  };

  removeCaptureFromState = (e) => {
      this.setState(prevState => ({
          pics: prevState.pics.filter(image => image !== e)
      }));
  };

<<<<<<< HEAD
  sendDataToEmailServer = () => {
      let data = {
          from: "mrdoctor@savinglives.com",
          to: "ladelunds@gmail.com",
          subject: "summarydiagnosis",
          symptoms: "symptomss",
          images: this.state.pics,
      }
      fetch ('https://junction2019server.herokuapp.com/send',{
          method: "POST",
          mode: 'no-cors',
          header: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      }).then(r => console.log(JSON.stringify(data)));
=======
  sendImagesToFilio = () => {
      let data = this.state.pics[0];
      console.log(data);
>>>>>>> 11648654a88b885b3d35252b4802ae0a958e604f
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
        content: <FourthStep
            addCaptureToState={this.addCaptureToState}
            removeCaptureFromState={this.removeCaptureFromState}
            imageData={this.state.pics}/>,
      }, {
        title: 'Report',
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
