import React, { Component } from 'react';
import logo from './logo.svg';
import { inject, observer } from 'mobx-react';
import './App.css';

@inject('BirdStore')
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.BirdStore.addBird(this.bird.value);
  };

  render() {
    const { BirdStore } = this.props;

    return (
        <div className="App">
            <h2>U have {BirdStore.birdCount} birds</h2>
            <form onSubmit={ this.handleSubmit }>
                <input
            type="text"
            placeholder="Enter bird"
            ref={ input => (this.bird = input) }
          />
                <button>Add bird</button>
            </form>
        </div>
    );
  }
}

export default App;
