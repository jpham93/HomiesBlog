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

import SearchIcon from '@material-ui/icons/Search'

const styles = (theme) => ({
    Button: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    TextField: {
        width: 250,
        marginLeft: 20,  
    },
    SearchIcon : {
        marginLeft: 30,  
    },
    Tab: {
        color: 'white',
        '&:hover' : {
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
            index : 0,
        }
    }

    handleClick = (value) => {
        this.setState({ 
            index: value
        })
    }

    render() {
        const { classes } = this.props

        return(
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
                                    <Typography  variant='h4'>
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
                                    <Link to='/' onClick={ () => this.handleClick(0) }>
                                        <Tab label='Home' className={classes.Tab} />
                                    </Link>                                
                                    <Link to='/post' onClick={ () => this.handleClick(1) }>
                                        <Tab label='Post' className={classes.Tab} />
                                    </Link>                                
                                    <Link to='/feed' onClick={ () => this.handleClick(2)}>
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
                                    <Button variant='contained' className={classes.Button}>Logout</Button>
                                </Grid>
                            </Grid>
                            
                        </Grid>

                        
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(Navbar))