import React, { useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';

import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';

import headerImg from './header.jpg';
import Menu from './Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
    headerPaper: {
      backgroundImage: `url(${headerImg})`,
      backgroundSize: 'cover'
    },
    noDecoration: {
      textDecoration: 'none'
    }
  })
);

const Header = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (menuOpen: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setMenuOpen(menuOpen);
    };

  return (
    <React.Fragment>
      <Drawer anchor='left' open={menuOpen} onClose={toggleMenu(false)}>
        <Menu />
      </Drawer>
      <AppBar position='static' color='default'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={toggleMenu(!menuOpen)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper className={classes.headerPaper}>
        <Grid container direction='column' spacing={2}>
          <Grid container item alignItems='center' justify='center'>
            <Grid item md={6}>
              <Typography variant='h3'>
                Firstname Lastname
              </Typography>
              <Typography variant='h5'>
                bio bio bio bio bio <br />
                bio bio bio bio bio <br />
                bio bio bio bio bio <br />
                bio bio bio bio bio <br />
                bio bio bio bio bio <br />
              </Typography>
            </Grid>
          </Grid>
          <Grid container item alignItems='center' justify='center'>
            <Grid item md={5}>
              <Link display='block' variant='body2' href='https://twitter.com'>
                <Grid container direction='row' spacing={1} alignItems='center'>
                  <Grid item><TwitterIcon fontSize='small' /></Grid>
                  <Grid item>@xyzxyz12</Grid>
                </Grid>
              </Link>
              <Link display='block' variant='body2' href='https://github.com'>
                <Grid container direction='row' spacing={1} alignItems='center'>
                  <Grid item><GitHubIcon fontSize='small' /></Grid>
                  <Grid item>xyzxyz12</Grid>
                </Grid>
              </Link>
              <Link display='block' variant='body2' href='https://qiita.com'>
                <Grid container direction='row' spacing={1} alignItems='center'>
                  <Grid item><BookIcon fontSize='small' /></Grid>
                  <Grid item>あいうえお</Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment >
  );
};

export default Header;
