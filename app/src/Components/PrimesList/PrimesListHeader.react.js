import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        {/* <Typography variant='h5' component='h3'>
          Prime Number Generator
        </Typography> */}
        <Typography component='p'>
          As a math person, I have always been fascinated by prime numbers. Once every hour, this application picks a new number, checks if it's a prime, and records it here if so.
        </Typography>
        <br />
        <Typography component='p'>
          The first prime was generated on _____. The most recent prime was generated on _____.
        </Typography>
      </Paper>
    );
  }
}

PrimesListHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimesListHeader);
