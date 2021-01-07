import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';

import headerImg from './header.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(4),
      backgroundImage: `url(${headerImg})`,
      backgroundSize: 'cover',
      textAlign: 'center',
    },
    twittericon: {
      margin: theme.spacing(1),
      color: '#FFFFFF',
      backgroundColor: '#1DA1F2',
      "&:hover": {
        color: '#1DA1F2'
      }
    },
    githubicon: {
      margin: theme.spacing(1),
      color: '#FFFFFF',
      backgroundColor: '#000000',
      "&:hover": {
        color: '#000000'
      }
    },
    blogicon: {
      margin: theme.spacing(1),
      color: '#FFFFFF',
      backgroundColor: '#2DBE60',
      "&:hover": {
        color: '#2DBE60'
      }
    },
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container direction='column' spacing={2}>
        <Grid container item justify='center'>
          <Grid item>
            <Typography variant='h2'>
              First Last
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <Grid item>
            <Typography variant='h5'>
              bio bio bio bio bio <br />
              bio bio bio bio bio <br />
              bio bio bio bio bio <br />
              bio bio bio bio bio <br />
              bio bio bio bio bio <br />
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <Grid item>
            <IconButton className={classes.twittericon} component='a' href='https://twitter.com'>
              <TwitterIcon />
            </IconButton>
            <IconButton className={classes.githubicon} component='a' href='https://twitter.com'>
              <GitHubIcon />
            </IconButton>
            <IconButton className={classes.blogicon} component='a' href='https://twitter.com'>
              <BookIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper >
  );
};

export default Header;
