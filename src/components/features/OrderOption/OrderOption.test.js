import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const expectedName = 'Lorem ipsum';
    const expectedType = 'text';
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component).toBeTruthy();
  });

});
