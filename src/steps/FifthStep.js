import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const { MonthPicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().startOf('day');
}


function disabledDateTime() {
  return {
    disabledHours: () => range(0, 8).concat(range(17,24)),
  };
}

export default class FifthStep extends React.Component {

  render() {
      return (
          <div className="calendar-step">
            <h2>Book an apointment</h2>
            <p>If you haven't found what you haven't had your questions answered and want to have an consultation, you can now book an apointment here.</p>
            <DatePicker
              format="YYYY-MM-DD HH:mm"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{ format: 'HH:mm', minuteStep: '15' }}
            />
         </div>

      )
  }
}
