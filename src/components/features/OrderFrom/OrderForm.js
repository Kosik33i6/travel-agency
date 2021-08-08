import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
// import styles from './OrderForm.scss';

const OrderForm = ({tripCost, options}) => {
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary
          tripCost={tripCost}
          options={options}
        />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
