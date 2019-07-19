import React, { Component } from "react";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    // Binds methods to constructor for use in changing of states
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Establishes the initial default state of the component
    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  };

  // Changes the state of todo_description within the component when there is a change initiated in a form
  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  };

  // Changes the state of todo_responsible within the component when there is a change initiated in a form
  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  };

  // Changes the state of todo_priority within the component when there is a change initiated in a form
  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  };

  // Send the data to the database and resets the initial state of the component following submission of form data
  onSubmit(e) {
    e.preventDefault();

    // ADD SUBMIT LOGIC HERE
    console.log(`Form submitted`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Todo </h3>
        {/* Creates form html elements for accessing user input */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
