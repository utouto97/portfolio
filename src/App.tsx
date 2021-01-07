import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import GlobalStyle from './globalStyles';
import theme from './theme';
import Header from './Header';
import Work from './Work';
import Skills from './Skills';


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
        <Grid container direction='column' spacing={4}>
          <Grid item> <Header /> </Grid>
          <Grid item> <Skills /> </Grid>
          <Grid item> <Work /> </Grid>
        </Grid>
        <IconButton className={classes.totop} onClick={scrollTop}>
          <ArrowUpwardIcon />
        </IconButton>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
