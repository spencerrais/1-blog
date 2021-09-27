import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className='nav'>   
            <ul className='nav-list'> 
                <Link to="/">
                <li>
                    <h3>Home</h3>
                </li>
                </Link>
                <Link to="/about">
                <li>
                    <h3>About</h3>
                </li>
                </Link>
                <Link to="/blog">
                <li>
                    <h3>Blog</h3>
                </li>
                </Link>
                <Link to='/work'>
                    <h3>Work</h3>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
