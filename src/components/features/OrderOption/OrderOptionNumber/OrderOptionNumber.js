import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption.module.scss';
// import {formatPrice} from '../../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => {
  // console.log('OrderOptionNumber: ' );
  // console.log('currentValue: ', currentValue);
  // console.log('limits: ', limits);
  return (
    <div className={styles.number}>
      <input
        type="number"
        className={styles.inputSmall}
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
        min={limits.min}
        max={limits.max}
      />
      <span>Price: {price}</span>
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;
