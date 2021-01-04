import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Menu = () => {
  return (
    <React.Fragment>
      <List component='nav'>
        <ListItem button>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Work' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default Menu;
