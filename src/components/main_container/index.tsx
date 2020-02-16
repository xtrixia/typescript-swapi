import React from 'react';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import { Link, RouteComponentProps } from 'react-router-dom';

import '../index.css';

interface MainContainerProps extends RouteComponentProps {}

const MainContainer = () => {
  return (
    <Grid container className='App'>
      <Grid item xs={12} className='App-header'>
        <Typography variant='h3' style={{ fontFamily: 'starjedi' }}>
          Welcome to Swapil
        </Typography>

        <Grid item xs={6}>
          <ButtonBase className='App-button'>
            <Link to='/people'>Check people</Link>
          </ButtonBase>

          <ButtonBase className='App-button'>
            <Link to='/planets'>Visit planet</Link>
          </ButtonBase>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContainer;
