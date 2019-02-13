import React, { Component, Fragment } from 'react';
import EventForm from './EventForm'
import {
  withStyles, 
  Typography,
  Grid,
} from '@material-ui/core'

const styles = theme => ({
  Typography : {
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

    )
  }
}

export default withStyles(styles)(HomePage);