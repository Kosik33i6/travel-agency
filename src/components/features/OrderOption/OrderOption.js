import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown/OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons/OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber/OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes/OrderOptionCheckboxes';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};


const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  console.log('OrderOption current value: ', otherProps.currentValue);
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.node,
  type: PropTypes.string,
  id: PropTypes.any,
  setOrderOption: PropTypes.func,
};

export default OrderOption;
