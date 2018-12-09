import React from 'react';
import { shallow } from 'enzyme';
import List from './List.js';

it('List renders without crashing', () => {
  const component = shallow(<List />);
  expect(component.exists()).toEqual(true);
});


