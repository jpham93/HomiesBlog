import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'    // keeps the browser from making a request to server
// NavLink is similiar to Link but adds to class active
// withRouter wraps higher order component and gives it same props as Route component
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Grid,
  Tab,
  Tabs,
  withStyles
} from '@material-ui/core'
import { logoutUser, clearErrors } from '../actions/user_actions';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search'
import { ErrorBanner } from '.';
import { isEmpty } from 'lodash';

const styles = (theme) => ({
  Grid: {
    display: 'flex',
  },
  Button: {
    justifyContent: 'space-between',
    color: 'white',
    background: 'blue',
    top: 10,
    right: 10,
  },
  TextField: {
    width: 250,
    marginLeft: 20,
  },
  SearchIcon: {
    marginLeft: 30,
  },
  Tab: {
    color: 'white',
    '&:hover': {
      background: '#74B9FF',
    },
    '&:focus': {
      background: 'inherit',
    }
  }
})

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  componentDidUpdate() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    if (!isEmpty(this.props.errors)) {
      sleep(3000).then(() => this.props.clearErrors())
    }
  }

  handleClick = (value) => {
    this.setState({
      index: value
    })
  }

  buttonOnClick = async () => {
    await this.props.logoutUser(this.props.history);
  }

  render() {
    const { classes } = this.props

    return (
      <div id='navbar-container'>
        <AppBar position='static'>
          <Toolbar variant='title' color='inherit'>

            <Grid
              container
              justify='space-between'
              lg={12}
            >

              <Grid
                container
                lg={4}
                alignItems='center'
                justify='center'
              >
                <Grid item lg>
                  <Typography variant='h4'>
                    Homies Blog
                                    </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                lg={4}
                alignItems='center'
                justify='center'
              >
                <Grid item lg>
                  <Tabs
                    value={this.state.index}   // first item is being underlined (selected) at value 0
                    indicatorColor='secondary'

                  >
                    <Link to='/' onClick={() => this.handleClick(0)}>
                      <Tab label='Home' className={classes.Tab} />
                    </Link>
                    <Link to='/post' onClick={() => this.handleClick(1)}>
                      <Tab label='Post' className={classes.Tab} />
                    </Link>
                    <Link to='/feed' onClick={() => this.handleClick(2)}>
                      <Tab label='Feed' className={classes.Tab} />
                    </Link>
                  </Tabs>
                </Grid>
              </Grid>
              <Grid
                lg={4}
                container
                justify='center'
                alignItems='center'
              >
                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  lg={1}
                >
                  <Grid item sm>
                    <SearchIcon className={classes.SearchIcon} />
                  </Grid>
                </Grid>

                <Grid item lg>
                  <TextField className={classes.TextField}></TextField>
                </Grid>

                <Grid item lg>
                  {this.props.user.authenticated ?
                    <Button
                      variant='contained'
                      className={classes.Button}
                      onClick={this.buttonOnClick}
                    >
                      Logout
                    </Button>
                    :
                    <Grid container>
                      <Grid item>
                        <Link to='/login'>
                          <Button variant='contained' className={classes.Button}>Login</Button>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link to='/signup'>
                          <Button variant='contained' className={classes.Button}>Signup</Button>
                        </Link>
                      </Grid>
                    </Grid>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div id="popper-anchor"></div>
        <ErrorBanner
          errors={this.props.errors}
          dispatch={this.props.clearErrors}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});


export default connect(mapStateToProps, { clearErrors, logoutUser })(withStyles(styles)(withRouter(Navbar)))
