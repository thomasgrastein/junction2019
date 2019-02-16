import React from 'react';
import doctor from './doctor.jpg';
import { Row, Col, Rate, Icon } from 'antd';


export default class SixthStep extends React.Component {



  render() {
      return (
          <div className="typ">
            <Row type="flex">
                <Col style={{ "width": "50%", paddingRight:20 }}>
                    <h2>Thanks</h2>
                    <h4>Your appointment has been booked!</h4>
                    <p>You will soon receive an email with an overview of the details of your online consultation.</p>
                    <p>We hope that you found the consultation helpful, please rate your experience below!</p>
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
