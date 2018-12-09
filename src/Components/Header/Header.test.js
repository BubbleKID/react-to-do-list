import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

it('Header renders without crashing', () => {
  const component = shallow(<Header />);
  expect(component.exists()).toEqual(true);
});
