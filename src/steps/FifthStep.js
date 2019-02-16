import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;
const format = 'HH:mm';

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
    disabledHours: () => range(0, 24).splice(0, 8),
    disabledMinutes: () => range(30, 60),
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
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
              showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
            />
            <br />
            <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
            <br />
            <RangePicker
              disabledDate={disabledDate}
              disabledTime={disabledRangeTime}
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [moment('00:00', 'HH:mm'), moment('11:59', 'HH:mm')],
              }}
              format="YYYY-MM-DD HH:mm"
             />
            </div>
      )
  }
}
