import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, FolderOutlined, LineChartOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar style={{backgroundColor: '#fde3cf'}}>SR</Avatar>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Home</Link>
                </Typography.Title>
                {/*<Button className="menu-control-container">
                </Button>*/}
            </div>
            <Menu theme="dark">
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
