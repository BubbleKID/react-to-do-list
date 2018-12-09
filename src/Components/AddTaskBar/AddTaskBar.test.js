import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import AddTaskBar from './AddTaskBar.js';
import sinon from 'sinon';

it('AddTaskBar renders without crashing', () => {
  const component = shallow(<AddTaskBar />);
  expect(component.exists()).toEqual(true);
});

it('should have default handleAddTask', () => {
  const component = shallow(<AddTaskBar />);
  expect(component.prop('handleAddTask')).toBe(
    component.instance().handleAddTask
  );
});

it('user can input new task via taskiput', () => {
  const wrapper = mount(<AddTaskBar />);
  const Num = wrapper.find('#taskinput');
  Num.simulate('change', { target: { value: 23 } });
  wrapper.update();
  expect(wrapper.find('#taskinput').props().value).toEqual(23);
});

it('call handleAddTask() when user clicked add button', () => {
  const handleAddTask = jest.fn();
  const component = mount(<AddTaskBar handleAddTask={handleAddTask} />);
  expect(handleAddTask.mock.calls.length).toEqual(0);
  component.find('#addBtn').simulate('click');
  expect(handleAddTask.mock.calls.length).toEqual(1);
});
