import React from 'react'
import {Button, Menu, Layout, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, FolderOutlined, LineChartOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="nav-container">
            <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo-container">
            <Link to="/"><Avatar style={{backgroundColor: '#fde3cf'}}>SR</Avatar>Spencer Raisanen</Link>
                {/*<Button className="menu-control-container">
                </Button>*/}
            </div>
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
            </Layout.Header>
        </div>
    )
}

export default Navbar
