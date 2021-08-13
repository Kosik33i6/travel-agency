import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => {
  return (
    <div>
      <label>
        <input onChange={event => setOptionValue(event.currentTarget.value)} type="text" />
      </label>
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
