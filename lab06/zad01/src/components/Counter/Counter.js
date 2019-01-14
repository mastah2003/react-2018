import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  constructor() {
    super();
    console.log("constructor()");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate");
    return nextState.count % 2 === 0;
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  handleClick = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  };

  render() {
    console.log("render()");
    const isDisabled = this.state.count >= 20;
    return (
      <div>
        Clicks: {this.state.count}
        <button disabled={isDisabled} onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}

export default Counter;
