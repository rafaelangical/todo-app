import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

  const renderRows = () =>{
    const list = props.list || []
    
    return list.map( todo => (
      <tr>
        <td key={todo._id}>
          { todo.description }
        </td>
        <td>
          <IconButton style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}>
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
          <th>Ações</th>
        </tr>

      </thead>

      <tbody>
        {renderRows()}
      </tbody>

    </table>
  )
}