import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar.js';

it('SearchBar renders without crashing', () => {
  const component = shallow(<SearchBar />);
  expect(component.exists()).toEqual(true);
});
