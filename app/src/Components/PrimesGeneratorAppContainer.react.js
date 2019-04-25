import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrimesListContainer from './PrimesList/PrimesListContainer.react';
import '../App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <PrimesListContainer />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
