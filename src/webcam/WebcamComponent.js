import React from 'react';
import Webcam from "react-webcam";
import { Button } from 'antd';

export default class WebcamComponent extends React.Component {
  state = {
      imageData: [],
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
        imageData : [...this.state.imageData, imageSrc]
    })
  };

  delete = (e) => {
      this.setState(prevState => ({
          imageData: prevState.imageData.filter(image => image !== e)
      }));
  };


  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div className="webcam-component">
        <h2>Image</h2>
        <p>If you have a condition where you find it easier to explain with pictures, then use the webcam to take a picture for your doctor.</p>

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
