import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Work from './pages/Work';
import About from './pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Foot from './components/Foot/Foot';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/blog" component={Blog}/>
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </Switch>
        <Foot />
      </div>
    </Router>
  );
}
export default App;
