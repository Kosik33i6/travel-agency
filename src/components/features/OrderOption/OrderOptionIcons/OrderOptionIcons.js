import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../common/Icon/Icon';
import {formatPrice} from '../../../../utils/formatPrice';
import styles from '../OrderOption.module.scss';


const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => {
  console.log('OrderOptionIcons-------------', 'required: ', required, 'values: ', values, 'currentvalue: ', currentValue);
  return (
    <div>
      {required ? '' : (
        <div onClick={() => setOptionValue('')}>
          <Icon name='times-circle'/>
          <div>none</div>
        </div>
      )}
      {values.map(value => (
        <div
          key={value.id}
          className={styles.icon}
          onClick={() => setOptionValue(value.id)}
        >
          <Icon name={value.icon}/>
          <div>{value.name}</div>
          <div>{formatPrice(value.price)}</div>
        </div>
      ))}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;
