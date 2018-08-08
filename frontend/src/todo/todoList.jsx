import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import '../template/customCss.css'
import { bindActionCreators } from 'redux';
import { markAsDone, remove, markAsPending } from './todoActions';

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
            onClick={() => props.markAsDone(todo)}
            className="btn"
            hide={todo.done}>
          </IconButton> 
          <IconButton
            style="warning"
            icon="undo"
            onClick={()=> props.markAsPending(todo)}
            className="btn"
            hide={!todo.done}>
          </IconButton>
          <IconButton 
            style="danger" 
            icon="trash-o"
            onClick={() => props.remove(todo)}
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
const mapDispatchToProps = dispatch => 
  bindActionCreators({ markAsDone, remove, markAsPending }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)