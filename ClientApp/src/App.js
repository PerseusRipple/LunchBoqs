import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Plan from './pages/Plan'
import Pack from './pages/Pack'
import Restaurant from './pages/Restaurant'
import './index.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/plan' component={Plan} />
          <Route exact path='/pack' component={Pack} />
          <Route exact path='/restaurant' component={Restaurant} />
        </Switch>
      </Router>
    )
  }
}
