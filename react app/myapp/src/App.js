import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/todos";
import Btn from "./components/btn";

class App extends Component {
  state = {
    items: [],
    isLoaded: false,
    something: [
      { id: 1, name: "Bob", completed: false },
      { id: 2, name: "Bee", completed: false },
      { id: 3, name: "Joe", completed: false }
    ]
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  markComplete = id => {
    this.setState({
      todos: this.state.items.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  showAlert = () => {
    alert("hello");
  };

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <div className="lined">
              <img src={logo} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div>
              <h4> Our Sponsors </h4>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    Name: {item.name} | Email: {item.email}{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Sponsors that died are crossed out</h4>
              <h6>Click on Button to confirm their death</h6>
              <ul>
                <Todos
                  something={this.state.items}
                  markComplete={this.markComplete}
                />
              </ul>
            </div>

            <Btn showAlert={this.showAlert} />
          </header>
        </div>
      );
    }
  }
}

export default App;
