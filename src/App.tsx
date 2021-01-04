import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import Home from './Home';
import theme from './theme';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
