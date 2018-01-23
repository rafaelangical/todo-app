import React from 'react'
import Menu from '../template/menu'
import About from '../about/about'
import Todo from '../todo/todo'
import Router from './routes'

export default props =>(
  <div className="container">
    <Menu />
    <Router />
  </div>
)