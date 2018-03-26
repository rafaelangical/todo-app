const INITIAL_STATE = {
  description: '',
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
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}