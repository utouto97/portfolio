import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Home from './Home';
import theme from './theme';
import GlobalStyle from './globalStyles';
import Work from './Work';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <Header />
        <br />
        <Grid container alignItems='center' justify='center'>
          <Grid item md={6}>
            <Home />
            <br />
            <Work />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
