import React, { Component } from "react";

class btn extends Component {
  render() {
    // console.log(this.props.something);

    return <button onClick={this.props.showAlert}>Button</button>;
  }
}

export default btn;
