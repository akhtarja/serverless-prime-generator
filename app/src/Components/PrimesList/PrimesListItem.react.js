import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'

class PrimesListItem extends Component {
  render() {
    return (
      <TableRow key={this.props.prime.value}>
        <TableCell align="center">{this.props.prime.value}</TableCell>
        <TableCell align="center">{moment(this.props.prime.timestamp).fromNow()}</TableCell>
      </TableRow>
    );
  };
}

PrimesListItem.propTypes = {
  prime: PropTypes.object.isRequired
};

export default PrimesListItem;
