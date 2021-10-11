import React from 'react'
import {Button, Menu, Layout} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, FolderOutlined, LineChartOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <header>
            <nav className="nav-container">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="menu-btn">
                    <MenuOutlined />
                </label>
                <Link to="/" className="logo">Spencer Raisanen</Link>
                <ul className="nav-links">
                    <li><Link to="/work" className="nav-link-item">Work</Link></li>
                    <li><Link to="/about" className="nav-link-item">About</Link></li>
                    <li className="contact"><Link to="/contact" className="contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
