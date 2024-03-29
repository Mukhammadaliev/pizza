const initialState = {
  items: [],
  isLoading: false
}

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
   return state = {
      ...state,
      items: action.payload
    }
  }
  return state
}
export default pizzas;