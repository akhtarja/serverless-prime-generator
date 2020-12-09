import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PrimesListItem from './PrimesListItem.react';

const styles = theme => ({
  root: {
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    width: '70%'
  },
  table: {
    minWidth: 700
  }
});

class PrimesList extends Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Value</TableCell>
              <TableCell align="center">Found</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.primes.map((prime, index) => (
              <PrimesListItem prime={prime} key={index} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

PrimesList.propTypes = {
  classes: PropTypes.object.isRequired,
  primes: PropTypes.array.isRequired
};

export default withStyles(styles)(PrimesList);
