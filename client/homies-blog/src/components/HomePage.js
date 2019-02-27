import React, { Component, Fragment } from 'react';
import EventForm from './EventForm'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { getUserInfo } from '../actions/user_actions';
import Weather from './Weather'
import Mood from './Mood'
import { SignupForm } from '.';
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
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    const { classes } = this.props
    const { user } = this.props;
    return (
      <StyledContainer>
        <StyledTypography
          variant='h1'
        >
          {user.userinfo ? `Hello ${user.userinfo.firstName}` : 'make an account dude'}
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

const mapStateToProps = state => ({
  user: state.user,
  errors: state.error
});


export default connect(mapStateToProps, { getUserInfo })(HomePage);
