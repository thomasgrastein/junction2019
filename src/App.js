import React, { Component } from 'react';
import logo from './Kenko.svg';

import { Button, Layout, List, Steps, Row, Col, Icon, message } from 'antd';


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
      symptoms: [],
      description: {
        age: null,
        gender: null,
        pain:  0,
        previous: null,
        first: null,
        activities: [],
        elaboration: null,
      },
      diagnosis: [],
      webcamEnabled: false,
    }
  }

  next = () => {
    const { current, description, symptoms } = this.state;
    if (current === 0) {
      if(!symptoms || symptoms.length === 0) {
        message.error("You must pick at least one symptom");
        return;
      }
    }
    if (current === 1) {
      if(!description.activities || !description.gender) {
        message.error("Age and gender must be submitted");
        return;
      };
    } 
    const newCurrent = current + 1;
    this.setState({ current: newCurrent });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  addCaptureToState = (imageSrc) => {
    var image = {
        key: 123,
        image: imageSrc
    }
    this.setState({
      pics: [...this.state.pics, image]
  }, () => this.sendDataToEmailServer())
  };

  removeCaptureFromState = (e) => {
    this.setState(prevState => ({
      pics: prevState.pics.filter(image => image !== e)
    }));
  };

  addListToState = (obj) => {
    this.setState(prevState => ({
      symptoms: [...prevState.symptoms, obj]
    }));
  }

  updateListInState = (arr) => {
    this.setState({ symptoms: arr });
  }

  sendDataToEmailServer = () => {
    let data = {
      from: "mrdoctor@savinglives.com",
      to: "au2019.junction2019@gmail.com",
      subject: "summarydiagnosis",
      symptoms: this.state.symptoms,
      images: this.state.pics,
    }
    fetch('http://localhost:7000/send', {
      method: "POST",
      mode: 'no-cors',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(r => console.log(JSON.stringify(data)));
  }

  updateDescription = (description) => {
    this.setState({description});
  }

  updateDiagnosis = (diagnosis) => {
    console.log(diagnosis);
    this.setState({diagnosis});
  }

  enableWebcam = () => {
      this.setState({ webcamEnabled: true })
  }

  render() {
    const { current, symptoms, description } = this.state;
    let steps = [{
      title: 'Point',
      icon: <Icon type="user" />,
      content: <FirstStep
        addListToState={this.addListToState}
        updateListInState={this.updateListInState}
        symptoms={symptoms} />,
    }, {
      title: 'Describe',
      icon: <Icon type="form" />,
      content: <SecondStep description={description} updateDescription={this.updateDescription} />,
    }, {
      title: 'Picture',
      icon: <Icon type="camera" />,
      content: <FourthStep
            addCaptureToState={this.addCaptureToState}
            removeCaptureFromState={this.removeCaptureFromState}
            imageData={this.state.pics}
            next={this.next}
            enableWebcam={this.enableWebcam}
            webcamState={this.state.webcamEnabled}/>,
    }, {
      title: 'Report',
      icon: <Icon type="file" />,
      content: <ThirdStep symptoms={symptoms} description={description} updateDiagnosis={this.updateDiagnosis} />,
    }, {
      title: 'Book',
      icon: <Icon type="calendar" />,
      content: <FifthStep />,
    }, {
      title: 'Done',
      icon: <Icon type="smile" />,
      content: <SixthStep />
    }];

    return (
      <div className="App">
        <Layout>
          <Header style={{ position: "sticky", top: 0, zIndex: 10, marginBottom: 100 }}>
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Row className="steps" type="flex" justify="center" align="middle" style={{ background: "#f0f2f5" }}>
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
                <Button className="button-prev" type="primary" onClick={() => this.prev()} disabled={current === 0 ? true : false}><Icon type="left" />Previous</Button>
              </Col>
              <Col span={1} />
              <Col span={2}>
                <Button className="button-next" type="primary" onClick={() => this.next()}>{(current === steps.length - 1) ? "Finish" : "Next"} <Icon type="right" /></Button>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
