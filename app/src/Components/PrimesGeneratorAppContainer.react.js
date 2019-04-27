import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrimesListContainer from './PrimesList/PrimesListContainer.react';

const theme = {
  dark: createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      type: 'dark',
    },
  }),
  light: createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      type: 'light',
    },
  })
};

const styles = ({
  dark: {
    backgroundColor: '#000000',
    minHeight: '100vh'
  },
  light: {
    backgroundColor: '#FFFFFF',
    minHeight: '100vh'
  }
});

class PrimesGeneratorAppContainer extends Component {
  render() {
    return (
      <div className={this.props.classes.dark}>
        <MuiThemeProvider theme={theme['dark']}>
          <PrimesListContainer />
        </MuiThemeProvider>
      </div>
    )
  }
}

PrimesGeneratorAppContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimesGeneratorAppContainer);
