import React, { Component } from 'react';
import './App.css';
import PrimesGeneratorAppContainer from './Components/PrimesGeneratorAppContainer.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimesGeneratorAppContainer />
      </div>
    )
  }
}

export default App;
