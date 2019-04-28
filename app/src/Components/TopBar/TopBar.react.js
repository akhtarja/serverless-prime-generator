import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DarkTheme from '@material-ui/icons/Brightness3';
import LightTheme from '@material-ui/icons/WbSunny';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class TopBar extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position='sticky' color='default'>
          <Toolbar>
            <Typography variant='h6' color='inherit' className={this.props.classes.root}>
              Prime Number Generator
            </Typography>
            <IconButton
              onClick={this.props.changeTheme}
              color="inherit"
            >
              {this.renderThemeIcon()}
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  renderThemeIcon() {
    if (this.props.theme === 'dark') {
      return(<LightTheme />)
    } else {
      return(<DarkTheme />)
    }
  }
}

TopBar.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);