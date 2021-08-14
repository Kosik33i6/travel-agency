import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
// import styles from './OrderForm.module.scss';

const OrderForm = ({tripCost, options, setOrderOption}) => {
  // console.log('OrderForm pricing: ', pricing);
  // console.log('OrderForm options: ', options);
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary
          tripCost={tripCost}
          options={options}
        />
      </Col>
      {pricing.map(priceData => (
        <Col key={priceData.id} md={4}>
          <OrderOption
            {...priceData}
            currentValue={options[priceData.id]}
            setOrderOption={setOrderOption}
          />
        </Col>
      ))}
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
