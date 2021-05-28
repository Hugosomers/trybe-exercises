import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.fire = this.fire.bind(this);
    this.water = this.water.bind(this);
    this.wind = this.wind.bind(this);
    this.counter = this.counter.bind(this);
    this.countTwo = this.countTwo.bind(this);

    this.state = {
      clicks: 0,
      clicksFire: 0,
      clicksTwo: 0,
    }
  }

  fire() {
    console.log('Fire')
    this.setState((lastState, _props) => ({
      clicksFire: lastState.clicksFire +1,
    }));
  }
  
  water() {
    console.log(this);
    console.log('Water')
  }
  
  wind() {
    console.log('Wind')
  }

  counter(event) {
    this.setState((lastState, _props) => ({
      clicks: lastState.clicks + 1,
    }));

    if ((this.state.clicks + 1) % 5 === 0) {
      event.target.style.backgroundColor = 'red';
      console.log(event.target.style.backgroundColor);
    } else {
      event.target.style.backgroundColor = 'blue';
      console.log(event.target.style.backgroundColor);
    }

  }

  countTwo() {
    this.setState((actualState) => ({
      clicksTwo: actualState.clicksTwo + 1,
    }));
  }

  render() {

    return (
      <div>
        <button onClick={this.fire}>Fire</button>
        <button onClick={this.water}>Water</button>
        <button onClick={this.wind}>Wind</button>
        <button onClick={this.counter}>{this.state.clicks}</button>
        <p>Fire was clicked: {this.state.clicksFire} times</p>
        <button onClick={this.countTwo} style={(this.state.clicksTwo % 2 === 0) ? {color: 'blue'} : {color: 'green'}}>Second button: {this.state.clicksTwo}</button>
      </div>
    );
  }
}

export default App;
