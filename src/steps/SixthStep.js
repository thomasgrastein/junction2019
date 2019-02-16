import React from 'react';
import doctor from './doctor.jpg';


export default class SixthStep extends React.Component {


  render() {
      return (
          <div className="typ">
              <h2>Thanks</h2>
              <p>Your appointment has been booked!</p>
              <p>You will soon receive an email with an overview of the details of your online consultation.</p>
              <img src={doctor} alt="Doctor" width={500}/>
          </div>
      )
  }
}
