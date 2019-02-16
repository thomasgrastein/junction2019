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

function fetchTimes(){
    fetch('https://data-cache-datacache-calendar-v1.p.rapidapi.com/calendar/reserve', {
        headers: {
            "X-RapidAPI-Key": "6f85909739mshe3c9795d32c34b8p10e5d4jsn9b9185621f4a",
            "Content-Type": "application/json",
        },
        body: {

        }
    }).then(res => res.json()).then(r => {
        this.setState({ zones: r }, () => {
            console.log(r);
            this.setState({working: false});
        })
    })
}


function disabledDateTime() {
  return {
    disabledHours: () => range(0, 8).concat(range(17,24)),
  };
}

export default class FifthStep extends React.Component {

  render() {
      return (
         <div>
            <DatePicker
              format="YYYY-MM-DD HH:mm"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{ format: 'HH:mm', minuteStep: '15' }}
            />
         </div>
         <iframe src="https://www.supersaas.jp/schedule/SimonToft/Doktor" width="600" height="800"> </iframe>
      )
  }
}
