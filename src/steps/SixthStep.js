import React from 'react';
import doctor from './doctor.jpg';
import ReactAudioPlayer from 'react-audio-player';

const h2text = "Thanks";
const p1text = "Your appointment has been booked";
const p2text = "You will soon receive an email with an overview of the details of your online consultation.";
const translation = h2text + " " + p1text + " " + p2text + " ";
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
                <h2>{h2text}</h2>
                <p>{p1text}!</p>
                <p>{p2text}</p>
                {translationRexeg}
                <img src={doctor} alt="Doctor" width={500}/>
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
