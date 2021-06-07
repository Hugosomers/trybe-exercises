import React, { Component } from 'react'
import './App.css';
import DadJoke from './components/DadJoke';
// import RickAndMorty from './components/RickAndMorty';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <RickAndMorty /> */}
        <DadJoke />
      </div>
    )
  }
}
