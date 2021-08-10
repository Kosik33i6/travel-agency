import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};


const OrderOption = ({name, type, ...otherProps}) => {
  console.log('OrderOption otherProps: ', otherProps);
  const OptionComponent = optionTypes[type];
  console.log('OrderOption OptionComponent: ', OptionComponent);
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.node,
  type: PropTypes.string,
};

export default OrderOption;
