import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'    // keeps the browser from making a request to server
// NavLink is similiar to Link but adds to class active
// withRouter wraps higher order component and gives it same props as Route component
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

import SearchIcon from '@material-ui/icons/Search'

const Navbar = (props) => {
    return (
        <div id='navbar-container'>
            <AppBar position='static'>
                <Toolbar variant='title' color='inherit'>

                    <Grid
                        justify='space-between'
                        container
                    >

                        <Grid
                            container
                            lg={4}
                            alignItems='center'
                            justify='center'
                        >
                            <Grid item>
                                <Typography variant='h4'>
                                    Homies Blog
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            lg={4}
                            container
                            justify='center'
                        >
                            <Grid
                                container
                                justify='center'
                                alignItems='center'
                                xs={1}
                            >
                                <Grid item>
                                    <SearchIcon />
                                </Grid>
                            </Grid>

                            <Grid item >
                                <TextField style={{ width: '300px' }} ></TextField>
                            </Grid>
                        </Grid>

                        <Grid
                            lg={4}
                            container
                            alignItems='center'
                            justify='center'
                        >
                            <Link to='/'>
                                <Grid item>
                                    <Button >Home</Button>
                                </Grid>
                            </Link>

                            <Link to='/post'>
                                <Grid item>
                                    <Button >Post</Button>
                                </Grid>
                            </Link>

                            <Link to='/feed'>
                                <Grid item>
                                    <Button >Feed</Button>
                                </Grid>
                            </Link>

                            <Grid item>
                                <Button variant='contained'>Logout</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Navbar);