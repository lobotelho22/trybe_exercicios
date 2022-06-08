import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import User from './pages/user';
import Error404 from './pages/Error404';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/user/eduardo'>User</Link>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/user/:name' component={User} />
          <Route path='*' component={Error404} />
        </Switch>
      </Router>
    )
  }
}

export default App;
