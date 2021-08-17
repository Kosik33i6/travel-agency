import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings.js';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
// import styles from './OrderForm.module.scss';


const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  if(options.name && options.contact) {
    const payload = {
      ...options,
      totalCost,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Your name or Contact info is empty');
  }
};

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
      <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
