import React, { Component } from 'react';

export default class AddTaskBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: ''
    };

    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
  }

  handleTaskInputChange(e) {
    this.setState({
      taskInput: e.target.value
    });
  }

  render() {
    const { taskInput } = this.state;
    const { taskList, handleAddTask } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Task..."
          id="taskinput"
          value={taskInput}
          onChange={this.handleTaskInputChange}
        />
        <button
          type="button"
          id="addBtn"
          onClick={() => {
            handleAddTask(taskList, taskInput);
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
