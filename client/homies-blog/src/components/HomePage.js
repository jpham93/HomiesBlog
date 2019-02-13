import React, { Component, Fragment } from 'react';
import EventForm from './EventForm'
import { SignupForm } from '.';
import styled from 'styled-components'
import {
  withStyles,
  Typography,
  Grid,
} from '@material-ui/core'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
  label {
    color: darkblue;
  }
  AuthForm {
    max-width: 50%;
    display: block;
  }
`;

const styles = theme => ({
  Typography: {
    textAlign: 'center',
    marginTop: 20
  },
})

class HomePage extends Component {
  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Grid>
          <Typography
            variant='h1'
            className={classes.Typography}
          >
            Sup User
          </Typography>
        </Grid>

        <Grid>
          <EventForm />
        </Grid>

      </Fragment>
    );

  }
}

export default withStyles(styles)(HomePage);