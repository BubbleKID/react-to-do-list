import React from 'react';
import { shallow } from 'enzyme';
import ListView from './ListView';

it('ListView renders without crashing', () => {
  const taskList = ['React.js', 'Semantic-UI', 'Coffescript', 'Rails'];
  const component = shallow(<ListView taskList={taskList}/>);
  expect(component.exists()).toEqual(true);
});
