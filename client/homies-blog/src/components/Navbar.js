//TODO: FIX POPPER
import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Tab,
  Tabs,
} from '@material-ui/core'
import { logoutUser, clearErrors } from '../actions/user_actions';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search'
import { ErrorBanner } from '.';
import { isEmpty } from 'lodash';
import {
  indigo,
} from '@material-ui/core/colors'


const buttonLight = indigo[200]

const StyledButton = styled(Button)
  `
    color: #333945;
    background: ${buttonLight};
    opacity: 1.0;
    margin: 2px;

    &:hover {
        background: ${indigo[100]};
    }
    `
const StyledTab = styled(Tab)
  `
    color: white;
    &:hover {
        background: #74B9FF;
    }
    &:focus {
        background: inherit;
    }
    `
const BrandTypography = styled(Typography)
  `
    margin-right: 10px; 
    `
const GridContainer = styled(Grid)
  `
    ${
  breakpoint('tablet')
    `
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding
    `
  }
    `

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
      sleep(2500).then(() => this.props.clearErrors())
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

  renderErrorBanner = () => {
    return (
      <ErrorBanner
        errors={this.props.errors}
        dispatch={this.props.clearErrors}
      />
    );
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
            <GridContainer
              container
              direction='column'
              alignItems='center'
              justify='space-between'
              lg={12}
            >

              <Grid item lg>
                <BrandTypography
                  variant='h4'
                >
                  Homies Blog
                  </BrandTypography>
              </Grid>
              <Grid
                item lg
              >
                <Tabs
                  value={this.state.index}   // first item is being underlined (selected) at value 0
                  indicatorColor='secondary'

                >
                  <Link to='/' onClick={() => this.handleClick(0)}>
                    <StyledTab label='Home' />
                  </Link>
                  <Link to='/post' onClick={() => this.handleClick(1)}>
                    <StyledTab label='Post' />
                  </Link>
                  <Link to='/feed' onClick={() => this.handleClick(2)}>
                    <StyledTab label='Feed' />
                  </Link>
                </Tabs>
              </Grid>

              <Grid item lg>
                <Grid
                  container
                  justify='flex-end'
                >
                  {this.props.user.authenticated
                    ?

                    <StyledButton
                      variant='contained'
                      onClick={this.buttonOnClick}
                    >
                      Logout
                    </StyledButton>

                    :
                    <Fragment>
                      <Link to='/login'>
                        <StyledButton variant='contained'>Login</StyledButton>
                      </Link>

                      <Link to='/signup'>
                        <StyledButton variant='contained'>Signup</StyledButton>
                      </Link>
                    </Fragment>
                  }
                </Grid>
              </Grid>

            </GridContainer>
          </Toolbar>
        </AppBar>
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

export default connect(mapStateToProps, { logoutUser, clearErrors })(withRouter(Navbar))
