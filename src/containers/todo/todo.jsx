import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTasks, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';
import './todo.css';

class ToDo extends Component {
  state = {
    taskText: '',
  }
  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }
  addTasks = (evt) => {
    console.log(evt)
    const { taskText } = this.state;
    if (taskText.length > 3 && evt.type === 'click') {
      const { addTasks } = this.props;
      addTasks((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });
    }
    if (taskText.length > 3 && evt.key === 'Enter') {
      const { addTasks } = this.props;
      addTasks((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onClick={this.addTasks} onKeyPress={this.addTasks} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTasks, removeTask, completeTask, changeFilter })(ToDo);












//
