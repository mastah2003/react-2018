import React, { Component } from "react";
import Counter from "./components/Counter/Counter";

class App extends Component {
  state = {
    counterIsVisible: true
  };

  showCounter = () => {
    this.setState({
      counterIsVisible: true
    });
  };

  hideCounter = () => {
    this.setState({
      counterIsVisible: false
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showCounter}>SHOW</button>
        <button onClick={this.hideCounter}>HIDE</button>
        {this.state.counterIsVisible && <Counter />}
      </div>
    );
  }
}

export default App;
