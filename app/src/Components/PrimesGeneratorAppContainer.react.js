import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrimesListContainer from './PrimesList/PrimesListContainer.react';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <PrimesListContainer />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
