import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import '../template/customCss.css'

const TodoList = props => {

  const renderRows = () =>{
    const list = props.list || []
        
    return list.map( todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : '' }>{todo.description}</td>
        <td>
          <IconButton 
            style="sucess" 
            icon="check"
            onClick={() => props.handleMarkAsDone(todo)}
            className="btn"
            hide={todo.done}>
          </IconButton> 
          <IconButton
            style="warning"
            icon="undo"
            onClick={()=> props.handleMarkAsPending(todo)}
            className="btn"
            hide={!todo.done}>
          </IconButton>
          <IconButton 
            style="danger" 
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
            className="btn"
            hide={!todo.done}>
          </IconButton>
        </td>
      </tr>
    ))
  }


  return(

    <table className="table">

      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>

      </thead>

      <tbody>
        {renderRows()}
      </tbody>

    </table>
  )
}

const mapStateToProps = state => ({
  list: state.todo.list
})

export default connect(mapStateToProps)(TodoList)