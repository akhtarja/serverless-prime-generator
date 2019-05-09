import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: 'auto',
    minWidth: 700,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '70%'
  }
});

class PrimesListHeader extends Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Typography component='p'>
          As a math person, I have always been fascinated by prime numbers. Once every hour, this application picks a new number, checks if it's a prime, and records it here if so.
        </Typography>
        <br />
        <Typography component='p'>
          A total of {this.props.primesCount} prime numbers have been found so far. The first was found {moment(this.props.firstTimestamp).fromNow()}. The most recent was found {moment(this.props.lastTimestamp).fromNow()}.
        </Typography>
      </Paper>
    );
  }
}

PrimesListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  firstTimestamp: PropTypes.number.isRequired,
  lastTimestamp: PropTypes.number.isRequired,
  primesCount: PropTypes.number.isRequired
};

export default withStyles(styles)(PrimesListHeader);
