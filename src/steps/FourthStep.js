import React from 'react';
import Webcam from "react-webcam";
import { Button, message } from 'antd';

export default class FourthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: props.imageData,
      webcamEnabled: props.webcamState,
    }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
        imageData : [...this.state.imageData, imageSrc]
    })
    this.props.addCaptureToState(imageSrc);
    message.success('Picture has been taken! See it below');
  };

  delete = (e) => {
      this.setState(prevState => ({
          imageData: prevState.imageData.filter(image => image !== e)
      }));
      this.props.removeCaptureFromState(e);
  };

  enableWebcam = () => {
      this.setState({ webcamEnabled: true })
      this.props.enableWebcam();
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
    <div>
     {this.state.webcamEnabled ?
      <div className="webcam-component">
        <h2>Take picture</h2>
        <Webcam
          audio={false}
          height={395}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          style={{
            MozTransform: 'scale(-1, 1)',
            WebkitTransform: 'scale(-1, 1)',
            OTransform: 'scale(-1, 1)',
            transform: 'scale(-1, 1)'
          }}
          width={700}
          videoConstraints={videoConstraints}
        />
        <br/>
        <Button className="capture" size="large" type="primary" shape="circle" icon="camera" onClick={this.capture}></Button>

        {this.state.imageData ?
            <div>
                {this.state.imageData.map((image) => {
                  return (
                      <div>
                          <img src={image}/>
                          <br/>
                          <Button className="image-delete" icon="close" size="small" type="danger" shape="circle" onClick={() => this.delete(image)}></Button>
                      </div>
                  );
                })}
            </div>
        : null }

      </div>
      : <div>
            <h2>Take an optional picture of your wound, eczema, etc.</h2>
            <Button onClick={() => this.enableWebcam()}>Yes</Button>
            <Button onClick={() => this.props.next()}>No</Button>
        </div>}
    </div>
    );
  }
}
