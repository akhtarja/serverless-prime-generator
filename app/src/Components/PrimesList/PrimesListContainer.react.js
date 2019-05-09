import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PrimesListHeader from './PrimesListHeader.react';
import PrimesList from './PrimesList.react';
import InfoBar from '../InfoBar/InfoBar.react';
import AllPrimesApi from '../../apis/AllPrimesApi';
import { sortBy } from 'underscore';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 12
  }
});

class PrimesListContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    AllPrimesApi.get()
      .then((response) => {
        if (response.error) {
          this.setState({
            loading: false,
            error: true
          });
        } else {
          this.setState({
            primes: sortBy(response, 'value').reverse(),
            loading: false,
            error: false
          });
        }
      })
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        {this.renderPrimesList()}
      </div>
    );
  }

  renderPrimesList() {
    if (this.state.loading) {
      return (
        <InfoBar
          message={'Loading...'}
        />
      );
    } else if (!this.state.loading && !this.state.error && this.state.primes.length !== 0) {
      return (
        <>
          <PrimesListHeader
            firstTimestamp={this.state.primes[this.state.primes.length - 1].timestamp}
            lastTimestamp={this.state.primes[0].timestamp}
            primesCount={this.state.primes.length}
          />
          <PrimesList
            primes={this.state.primes}
          />
        </>
      );
    } else if (!this.state.loading && !this.state.error && this.state.primes.length === 0) {
      return (
        <InfoBar
          message={'No primes have been generated yet.'}
        />
      )
    } else if (this.state.error) {
      return (
        <InfoBar
          message={'Something went wrong! Try refreshing the page.'}
        />
      )
    }
  }
}

export default withStyles(styles)(PrimesListContainer);
