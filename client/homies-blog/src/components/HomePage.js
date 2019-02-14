import React, { Component, Fragment } from 'react';
import EventForm from './EventForm'
import { SignupForm } from '.';
import styled from 'styled-components'
import { connect } from 'react-redux';
import {
  withStyles,
  Typography,
  Grid,
} from '@material-ui/core'

const styles = theme => ({
  Typography: {
    textAlign: 'center',
    marginTop: 20
  },
})

class HomePage extends Component {
  render() {
    const { classes } = this.props
    const { user } = this.props;
    return (
      <Fragment>
        <Grid>
          <Typography
            variant='h1'
            className={classes.Typography}
          >
            {user.userinfo ? `Hello ${user.userinfo.firstName}` : 'make an account dude'}
          </Typography>
        </Grid>

        <Grid>
          <EventForm />
        </Grid>

      </Fragment>
    );

  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.error
});


export default connect(mapStateToProps)(withStyles(styles)(HomePage));