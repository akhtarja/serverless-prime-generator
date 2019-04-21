import React, { Component } from 'react';
import PrimesListHeader from './PrimesListHeader.react';
import PrimesList from './PrimesList.react';

class PrimesListContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      primes: [
        {seq: 1, value: 2, timeStamp: "2 days ago"},
        {seq: 2, value: 3, timeStamp: "yesterday"},
        {seq: 3, value: 5, timeStamp: "yesterday"},
        {seq: 4, value: 7, timeStamp: "today"},
        {seq: 5, value: 11, timeStamp: "today"},
        {seq: 6, value: 13, timeStamp: "today"},
      ]
    };
  }

  render() {
    return (
      <div>
        <PrimesListHeader />
        <PrimesList
          primes={this.state.primes}
        />
      </div>
    )
  }
}

export default PrimesListContainer;