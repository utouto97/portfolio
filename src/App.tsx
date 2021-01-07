import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import Header from './Header';
import Home from './Home';
import theme from './theme';
import GlobalStyle from './globalStyles';
import Work from './Work';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    totop: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

const App = () => {
  const classes = useStyles();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <IconButton className={classes.totop} onClick={scrollTop}>
          <ArrowUpwardIcon />
        </IconButton>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
