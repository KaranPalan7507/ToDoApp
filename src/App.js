import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoListItem from './ToDoItem';

class App extends Component {
  render() {
    return (
    <div className="App">
        <h1>To Do List</h1>
        <ToDoList/>
        <ToDoListItem />
    </div>
    );
    }
  }
export default App;