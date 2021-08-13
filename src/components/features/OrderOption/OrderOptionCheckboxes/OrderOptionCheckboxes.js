import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption.module.scss';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => {
  // console.log('currentValue: ', currentValue);
  return (
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label key={value.id}>
          <input
            value={value.id}
            type="checkbox"
            onChange={event => (setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked)))}
          />
          {value.name} &#36;{value.price}
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;
