import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Work = () => {
  return (
    <React.Fragment>
      <Typography variant='h3' style={{ textAlign: 'center' }}>
        Work
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Card>
            <CardContent>
              <Typography variant='h3'>
                Work 1
        </Typography>
              <Typography variant='body2'>
                discription discription discription discription
                discription discription discription discription
                discription discription discription discription
                discription discription discription discription
        </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardContent>
              <Typography variant='h3'>
                Work 2
        </Typography>
              <Typography variant='body2'>
                discription discription discription discription
                discription discription discription discription
                discription discription discription discription
                discription discription discription discription
        </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Work;
