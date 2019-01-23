import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'    // keeps the browser from making a request to server
                                                            // NavLink is similiar to Link but adds to class active
const Navbar = (props) => {                             // withRouter wraps higher order component and gives it same props as Route component
    return(
        <nav className='nav-wrapper blue darken-4'>
            <div className='container'>
                <a href='#' className='brand-logo'>Homies Blogs</a> 
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li> 
                    <li><Link to='#'>Post</Link></li>
                    <li><Link to='#'>Message</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)