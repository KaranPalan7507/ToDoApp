import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoListItem from './ToDoItem';
import { Router, Link } from "@reach/router"


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ToDoList />
        <Router>
          <ToDoListItem filter="SHOW_ALL" path="/" />
          <ToDoListItem filter="SHOW_PENDING" path="pending" />
          <ToDoListItem filter="SHOW_COMPLETED" path="completed" />
        </Router>
        <nav>
          <Link to="/">All Tasks</Link> |{" "}
          <Link to="pending">Pending Tasks</Link> |{" "}
          <Link to="completed">Completed Tasks</Link>
        </nav>

      </div>
    );
  }
}
export default App;