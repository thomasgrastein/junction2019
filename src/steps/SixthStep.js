import React from 'react';
import doctor from './doctor.jpg';


export default class SixthStep extends React.Component {


  render() {
      return (
          <div>
              <h1>Thanks</h1>
              <h3>Your appointment has been booked!</h3>
              <img src={doctor} alt="Doctor" width={500}/>
          </div>
      )
  }
}
