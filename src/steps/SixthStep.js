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
            </div>
        )
    }
}
