import React from 'react';
import Webcam from "react-webcam";

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
      <div>
        <Webcam
          audio={false}
          height={500}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>

        {this.state.imageData ?
            <div>
                {this.state.imageData.map((image) => {
                  return (
                      <div>
                          <img src={image}/>
                          <button onClick={() => this.delete(image)}>Delete</button>
                      </div>
                  );
                })}
            </div>
        : null }

      </div>
    );
  }
}
