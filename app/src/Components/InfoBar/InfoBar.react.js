import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 15
  }
});

class InfoBar extends Component {
  render() {
    return (
      <div>
        <Snackbar className={this.props.classes.root}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          message={this.props.message}
          open={true}
        />
      </div>
    );
  }
}

InfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired
}

export default withStyles(styles)(InfoBar);