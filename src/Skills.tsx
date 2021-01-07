import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avater from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

const skills = require('./skill.json');

const Skills = () => {
  return (
    <Grid container direction='column' spacing={2}>
      <Grid container item justify='center'>
        <Grid item>
          <Typography variant='h3'>
            Skills
          </Typography>
        </Grid>
      </Grid>
      <Grid container item justify='center'>
        <Grid item>
          <List>
            {skills.map((skill: any, i: number) => {
              return (<ListItem key={i}>
                <ListItemAvatar>
                  <Avater>
                    <WorkIcon />
                  </Avater>
                </ListItemAvatar>
                <ListItemText primary={skill.pri} secondary={skill.sec} />
              </ListItem>)
            })}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
