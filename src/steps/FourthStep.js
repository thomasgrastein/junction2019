import React from 'react';
import Webcam from "react-webcam";
import { Button, message } from 'antd';

export default class FourthStep extends React.Component {
  constructor() {
    super();
    this.state = {
      imageData: [],
      taking: false,
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
      this.props.deleteCaptureFromState(e);
  };

  render() {
    const { taking } = this.state;
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div className="webcam-component" style={{opacity: taking ? 0.1 : 1}}>
        <h2>Take an optional picture of your wound, eczema, etc.</h2>
        <Webcam
          audio={false}
          height={395}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
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
    );
  }
}
