import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Plan from './pages/Plan'
import Pack from './pages/Pack'
import Menu from './pages/Menu'
import Checkout from './pages/Checkout'
import Pay from './pages/Pay'
import LogIn from './pages/LogIn'
import Join from './pages/Join'
import './index.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/plan' component={Plan} />
          <Route exact path='/pack' component={Pack} />
          <Route exact path='/menu/:restaurantId' component={Menu} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/pay' component={Pay} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/join' component={Join} />
        </Switch>
      </Router>
    )
  }
}
