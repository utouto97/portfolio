import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avater from '@material-ui/core/Avatar';

import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

const skills = require('./skill.json');

type SkillType = {
  pri: string,
  sec: string,
  icon: string
};

type IconProps = {
  type: string
};

const Icon = (props: IconProps) => {
  switch (props.type) {
    case "code":
      return <CodeIcon />
    case "verified":
      return <VerifiedUserOutlinedIcon />
  }
  return <WorkIcon />
};

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
            {skills.map((skill: SkillType, i: number) => {
              return (<ListItem key={i}>
                <ListItemAvatar>
                  <Avater>
                    <Icon type={skill.icon} />
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
