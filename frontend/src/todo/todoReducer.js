const INITIAL_STATE = {
  description: 'Ler Livro',
  list: [{
    _id: 1,
    description: 'Descricao 1',
    done: true
  }, {
    _id: 2,
    description: 'Descricao 2',
    done: false
  }, {
    _id: 3,
    description: 'Descricao 3',
    done: false
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    default:
      return state
  }
}