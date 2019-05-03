import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DarkTheme from '@material-ui/icons/Brightness3';
import LightTheme from '@material-ui/icons/WbSunny';
import ToolTip from '@material-ui/core/Tooltip';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class HeaderBar extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position='sticky' color='default'>
          <Toolbar>
            <Typography variant='h6' color='inherit' className={this.props.classes.grow}>
              Prime Number Generator
            </Typography>
            <ToolTip title={this.themeToggleToolTip()}>
              <IconButton
                onClick={this.props.changeTheme}
                color='inherit'
              >
                {this.renderThemeIcon()}
              </IconButton>
            </ToolTip>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  renderThemeIcon() {
    if (this.props.theme === 'dark') {
      return(<LightTheme />)
    } else {
      return(<DarkTheme />)
    }
  }

  themeToggleToolTip() {
    if (this.props.theme === 'dark') {
      return('Light mode');
    } else {
      return('Dark mode');
    }
  }
}

HeaderBar.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
