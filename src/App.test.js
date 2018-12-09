import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});

it('handleAddTask is defined', () => {
  const handleAddTask = jest.fn();
  const component = shallow(<App handleAddTask={handleAddTask} />);
  expect(component.find('AddTaskBar').prop('handleAddTask')).toBe(
    component.instance().handleAddTask
  );
});

it('add new task after User added new task', () => {
  const handleAddTask = jest.fn();
  const component = shallow(<App handleAddTask={handleAddTask} />);
  component.setState({
    taskList: ['React.js', 'Semantic-UI', 'Coffescript', 'Rails']
  });
  component
    .instance()
    .handleAddTask(component.instance().state.taskList, 'PHP');
  expect(component.instance().state.taskList).toEqual([
    'React.js',
    'Semantic-UI',
    'Coffescript',
    'Rails',
    'PHP'
  ]);
});
