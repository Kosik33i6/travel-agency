/* eslint-disable */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({setOptionValue}) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        // onChange={(date) => setOptionValue(setStartDate(date))}
      />
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
