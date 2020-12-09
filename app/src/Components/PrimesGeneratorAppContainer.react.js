import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrimesListContainer from './PrimesList/PrimesListContainer.react';
import HeaderBar from './HeaderBar/HeaderBar.react';
import FooterBar from './FooterBar/FooterBar.react';

const theme = {
  dark: createMuiTheme({
    typography: {
      useNextVariants: true
    },
    palette: {
      type: 'dark'
    }
  }),
  light: createMuiTheme({
    typography: {
      useNextVariants: true
    },
    palette: {
      type: 'light'
    }
  })
};

const styles = {
  dark: {
    backgroundColor: '#000000',
    minHeight: '100vh'
  },
  light: {
    backgroundColor: '#FFFFFF',
    minHeight: '100vh'
  }
};

class PrimesGeneratorAppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: localStorage.getItem('theme') || 'light'
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  render() {
    return (
      <div
        className={
          this.state.theme === 'dark'
            ? this.props.classes.dark
            : this.props.classes.light
        }
      >
        <MuiThemeProvider theme={theme[this.state.theme]}>
          <HeaderBar theme={this.state.theme} changeTheme={this.changeTheme} />
          <PrimesListContainer />
          <FooterBar />
        </MuiThemeProvider>
      </div>
    );
  }

  changeTheme() {
    if (this.state.theme === 'dark') {
      this.setState({ theme: 'light' });
      localStorage.setItem('theme', 'light');
    } else {
      this.setState({ theme: 'dark' });
      localStorage.setItem('theme', 'dark');
    }
  }
}

PrimesGeneratorAppContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimesGeneratorAppContainer);
