import React, { Component } from "react";
import Todo from "./lower/name";

class todos extends Component {
  render() {
    console.log(this.props.something);

    return this.props.something.map(todo => (
      <Todo todo={todo} markComplete={this.props.markComplete} />
    ));
  }
}

export default todos;
