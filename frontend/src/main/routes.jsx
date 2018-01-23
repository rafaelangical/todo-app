import React from 'react'
import ReactDOM from 'react-dom'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'
import { Router, Route, Link, browserHistory } from 'react-router';

export default props => (
  <Router history={browserHistory}>
    <Route path='/todo' component={Todo} />
    <Route path='/about' component={About} />
  </Router>
)