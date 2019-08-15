import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed': ''}>{props.todo.todo_description}</td>
    <td className={props.todo.todo_completed ? 'completed': ''}>{props.todo.todo_responsible}</td>
    <td className={props.todo.todo_completed ? 'completed': ''}>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
    <td>
      <Link to={"/delete/" + props.todo._id}>Delete</Link>
    </td>
  </tr>
);

export default class ViewTodo extends Component {
  constructor(props) {
    super(props);

    // Establishes the initial default state of the component
    this.state = {
      todos: []
    };
  }

  // Retrieves previously submitted values from the backend, following mounting
  componentDidMount() {
    axios
      .get("/todos/")
      .then(res => this.setState({ todos: res.data }))
      .catch(function(error) {
        console.log(error);
      });
  }

    // Retrieves previously submitted values from the backend, following an update
    componentDidUpdate() {
      axios
        .get("/todos/")
        .then(res => this.setState({ todos: res.data }))
        .catch(function(error) {
          console.log(error);
        });
    }

  // Method to map across each JSON object
  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>View Todos</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
