import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import ListView from './Components/ListView/ListView.js';
import AddTaskBar from './Components/AddTaskBar/AddTaskBar.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: ['React.js', 'Semantic-UI', 'Coffescript', 'Rails']
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(taskList, value) {
    return this.setState({
      taskList: taskList.concat(value)
    });
  }

  render() {
    const { taskList } = this.state;

    return (
      <div className="App">
        <Header />
        <SearchBar />
        <ListView taskList={taskList} />
        <AddTaskBar taskList={taskList} handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}

export default App;
