import React from 'react'

export default props =>{

  return(

    <table className="table">

      <thead>

        <tr>
          <th>Descrição</th>
        </tr>
        
      </thead>

      <tbody>
        {renderRows()}
      </tbody>

    </table>
  )
}