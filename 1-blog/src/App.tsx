import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{color:'white'}}>
                        Spencer Raisanen <br />
                        2021 
                    </Typography.Title>
                </div>
            </div>
        </div>
    )
}

export default App;