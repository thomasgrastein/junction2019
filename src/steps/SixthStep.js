import React from 'react';
import doctor from './doctor.jpg';
import { Row, Col, Rate, Icon } from 'antd';
import ReactAudioPlayer from 'react-audio-player';

const h2text = "Thanks";
const p1text = "Your appointment has been booked";
const p2text = "You will soon receive an email with an overview of the details of your online consultation.";
const p3text = "We hope that you found the consultation helpful, please rate your experience below!";
const translation = h2text + " " + p1text + " " + p2text + " " + p3text;
const translationRexeg = translation.replace(/\s/g, '+');
export default class SixthStep extends React.Component {
    constructor() {
        super();
        this.state = {
            mp3: null,
        }
    }
    getTextToSpeech = (input) => {

        fetch('https://microsoft-azure-translation-v1.p.rapidapi.com/Speak?text='+ input +'&language=en', {
            headers: {
                "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a"
            }
        }).then(res => this.getStream(res.body.getReader()));
    };

    getStream = (reader) => {
        let result = [];
        let length = 0;
        const buffer = new ArrayBuffer(65536*20);
        let arr = new Uint16Array(buffer);
        // read() returns a promise that resolves
        // when a value has been received
        reader.read().then(function processText({ done, value }) {
            // Result objects contain two properties:
            // done  - true if the stream has already given you all its data.
            // value - some data. Always undefined when done is true.
            if (done) {
                console.log("Stream complete");
                return;
            }

            // value for fetch streams is a Uint8Array
            const chunk = value;
            if (!result) result = chunk;
            else result.push(chunk);
            length += chunk.length;
            arr.set(chunk, length);
            // Read some more, and call this function again
            return reader.read().then(processText);
        });
        console.log(arr);
        let blob = new Blob([arr], { type: 'audio/mp3' });
        console.log(blob);
        let url = window.URL.createObjectURL(blob);
        this.setState({mp3: url});
    };

    render(){
        const {mp3} = this.state;
        return (
            <div className="typ">
                <Row type="flex">
                    <Col style={{ "width": "50%", paddingRight:20 }}>
                        <h2>{h2text}</h2>
                        <h4>{p1text}!</h4>
                        <p>{p2text}</p>
                        <p>{p3text}</p>
                        <Rate character={<Icon type="smile" />} allowHalf></Rate>
                    </Col>
                    <Col style={{ "width": "50%" }}>
                        <img src={doctor} alt="Doctor" style={{"width":"100%"}} />
                    </Col>
                </Row>
                <button onClick={() => this.getTextToSpeech(translationRexeg)}>Read</button>
                {mp3 ? <ReactAudioPlayer
                    src={mp3}
                    autoPlay
                    controls
                /> : null}

            </div>
        )
    }
}
