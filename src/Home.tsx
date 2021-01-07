import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <React.Fragment>
      <Grid container direction='column' spacing={3}>
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant='h3'>
            Profile
            </Typography>
        </Grid>
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant='h5'>
            略歴
            </Typography>
          <Typography variant='body1'>
            阿呆大学　工学部　工学科<br />
            馬鹿大学大学院　工学研究科　工学専攻<br />
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant='h5'>
            資格・試験
            </Typography>
          <Typography variant='body1'>
            基本情報技術者試験　合格<br />
            応用情報技術者試験　合格<br />
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment >
  );
};

export default Home;
