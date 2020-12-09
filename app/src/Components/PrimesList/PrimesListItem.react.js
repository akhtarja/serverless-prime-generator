import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ToolTip from '@material-ui/core/Tooltip';
import moment from 'moment';

const styles = {
  root: {}
};

class PrimesListItem extends Component {
  render() {
    return (
      <TableRow
        key={this.props.prime.value}
        className={this.props.classes.root}
      >
        <TableCell align="center">{this.props.prime.value}</TableCell>
        <TableCell align="center">
          <ToolTip
            title={moment(this.props.prime.timestamp)
              .local()
              .format('dddd, MMMM Do YYYY, ha')}
          >
            <div>{moment(this.props.prime.timestamp).fromNow()}</div>
          </ToolTip>
        </TableCell>
      </TableRow>
    );
  }
}

PrimesListItem.propTypes = {
  prime: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimesListItem);
