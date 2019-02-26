import React, { Component, Fragment } from 'react';
import EventForm from './EventForm'
import Weather from './Weather'
import Mood from './Mood'
import { SignupForm } from '.';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {
  Typography,
  Grid,
} from '@material-ui/core'

const StyledContainer = styled.div
  `
  width: 80%;
  margin: auto;
  `
const StyledTypography = styled(Typography)
  `
  text-align: center;
  margin: 25px;
  `

class HomePage extends Component {
  render() {
    return (
      <StyledContainer>
          <StyledTypography
            variant='h1'
          >
            Sup User
          </StyledTypography>
      
        
        <Grid 
          container
          lg={12}
          justify='space-between'
          alignItems='stretch'  
        >
          <Grid item>
            <Weather />
          </Grid>

          <Grid item>
            <Mood />
          </Grid>

          <Grid item>
            <EventForm />
          </Grid>
        </Grid>
      </StyledContainer>
    );

  }
}

export default HomePage;