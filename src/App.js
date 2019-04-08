import React, { Component } from 'react';
import './App.css';
import { declareModule } from '@babel/types';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      error: false
    }
  }

  increment = e => this.setState({ counter: this.state.counter + 1, error: false })

  decrement = e => {
    const {counter} = this.state

    if (counter === 0) {
      return this.setState({
        error: true
      })
    }

    this.setState({ counter: counter - 1, error: false })
  }

  render() {
    const {counter, error} = this.state
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>The counter is currently {counter}</h1>
        {error && <h2 style={{color: 'red'}} data-test='error-display'>The counter cannot go below 0</h2>}
        <button
          data-test='increment-button'
          onClick={this.increment}
        >
          Increment
        </button>
        <button
          data-test='decrement-button'
          onClick={this.decrement}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
