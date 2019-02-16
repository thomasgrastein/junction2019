import React from 'react';
import Webcam from "react-webcam";
import { Button } from 'antd';

export default class FourthStep extends React.Component {
  constructor() {
    super();
    this.state = {
      imageData: [],
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
  };

  delete = (e) => {
      this.setState(prevState => ({
          imageData: prevState.imageData.filter(image => image !== e)
      }));
      this.props.deleteCaptureFromState(e);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div className="webcam-component">
        <Webcam
          audio={false}
          height={485}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={860}
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
