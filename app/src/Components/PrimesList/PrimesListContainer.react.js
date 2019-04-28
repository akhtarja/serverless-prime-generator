import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PrimesListHeader from './PrimesListHeader.react';
import PrimesList from './PrimesList.react';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4
  }
})

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
        {seq: 6, value: 13, timeStamp: "today"}
      ]
    };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <PrimesListHeader />
        <PrimesList
          primes={this.state.primes}
        />
      </div>
    )
  }
}

export default withStyles(styles)(PrimesListContainer);
