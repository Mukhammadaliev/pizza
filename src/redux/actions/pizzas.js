import axios from "axios";

export const fetchPizzas = (category, sortBy) => dispatch => {
  axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}`).then(({data}) => {
    dispatch(setPizzas(data))
  })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
});