import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Work from './pages/Work';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/work" component={Work} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
