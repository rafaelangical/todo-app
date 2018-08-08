import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
//import axios from  'axios'

//const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{


  //TUDO ESTA SENDO PASSADO AGORA POR PROPS ATRAVÉS DO REDUX xD
   
  //constructor(props){
  //  super(props)
  //  this.state={
  //    description: '',
  //    list: []
  //  }
  //  this.handleAdd = this.handleAdd.bind(this)
  //  this.handleChange = this.handleChange.bind(this)
  //  this.handleRemove = this.handleRemove.bind(this)
  //  this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
  //  this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
  //  this.handleSearch = this.handleSearch.bind(this)
  //  this.handleClear = this.handleClear.bind(this)
  //  this.refresh()
//
  //}
//
  //refresh(description = '') {
  //  const search = description ? `&description__regex=/${description}/` : ''
  //  axios.get(`${URL}?Sort=-createdAt${search}`)
  //    .then( resp => this.setState({...this.state, description, list: resp.data }))
  //}
//
  //handleSearch(){
  //  console.log("clicou")
  //  this.refresh(this.state.description)
  //}
//
  //handleChange(e) {
  //  this.setState({...this.state, description: e.target.value })
  //  console.log(e.target.value)
  //}
//
  //handleAdd() {
  //  const description = this.state.description
  //  axios.post(URL, { description })
  //    .then(resp => this.refresh())
  //}
//
  //handleClear(){
  //  this.refresh()
  //}
//
  //handleRemove(todo){
  //  axios.delete(`${URL}/${todo._id}`)
  //    .then(resp => this.refresh(this.state.description))
  //}
//
  //handleMarkAsDone(todo){
  //  axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
  //    .then(resp => this.refresh(this.state.description))
  //}
  //handleMarkAsPending(todo){
  //  axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
  //    .then(resp => this.refresh(this.state.description))
  //}
//
//
  render(){
    return(
      <div>
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm />
        <TodoList /> 
      </div>
    )
  }
}
