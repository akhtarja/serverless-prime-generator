import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class PrimesListItem extends Component {
  render() {
    return (
      <TableRow key={this.props.prime.seq}>
        <TableCell align="center">{this.props.prime.seq}</TableCell>
        <TableCell align="center">{this.props.prime.value}</TableCell>
        <TableCell align="center">{this.props.prime.timeStamp}</TableCell>
      </TableRow>
    )
  };
}

PrimesListItem.propTypes = {
  prime: PropTypes.object.isRequired
};

export default PrimesListItem;
