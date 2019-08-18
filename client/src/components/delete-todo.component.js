import React, { Component } from "react";
import axios from "axios";

export default class DeleteTodo extends Component {

  // Sends post request to backend for a specific id
  componentDidMount() {
    axios.post('/todos/delete/' + this.props.match.params.id).then(res => console.log(res.data));
    this.props.history.push('/view/');
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
      </div>
    );
  }
}
