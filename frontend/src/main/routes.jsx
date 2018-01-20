import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
)