import React from 'react'
import {Button, Menu, Layout} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, FolderOutlined, LineChartOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-name-container">
                <Link to="/">Spencer Raisanen</Link>
                {/*<Button className="menu-control-container">
                </Button>*/}
            </div>
            <div className="nav-links-container"></div>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/"> Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FolderOutlined />}>
                    <Link to="/work">Work</Link>
                </Menu.Item>
                <Menu.Item icon={<LineChartOutlined />}>
                    <Link to="/cryptos">Charts</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
