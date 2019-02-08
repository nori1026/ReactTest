import React, { Component } from "react";

export class name extends Component {
  getStyle = () => {
    return {
      background: "#000",
      padding: "50px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  changeColor = () => {
    return {
      color: this.props.todo.completed ? "red" : "skyblue"
    };
  };

  render() {
    // console.log(this.props.todo.id);
    const { id, name } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          style={{ transform: "scale(2)", margin: 20 + "px" }}
          onChange={this.props.markComplete.bind(this, id)}
        />

        <a
          style={this.changeColor()}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}, Target number {id}
        </a>
      </div>
    );
  }
}

export default name;
