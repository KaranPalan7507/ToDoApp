import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ToDoList.css';


let index=0;
class ToDoList extends Component {

  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Task"
              ref={(input) => this.getTask = input}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const text = this.getTask.value;
    const data = {
      completed: false,
      key: index++,
      text,
    }
    this.props.dispatch({
      type: 'ADD_TASK',
      data
    });
    
    this.getTask.value = '';
  }
}
export default connect()(ToDoList)