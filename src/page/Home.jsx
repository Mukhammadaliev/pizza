import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'
import { setCategory, setSortBy } from '../redux/actions/filter'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const Home = () => {


  const pizzas = useSelector(({pizzasReducer}) => pizzasReducer.items)
  const category = useSelector(({filtersReducer}) => filtersReducer.category)
  const sortBy = useSelector(({filtersReducer}) => filtersReducer.sortBy)
  const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);


  const selectCategory = (index) => {
    dispatch(setCategory(index))
  }
  const selectSortPopup = (type) => {
    dispatch(setSortBy(type))
  }

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };


  return (
    <div className="container">
      <div className="content__top">
        <Categories selectCategory={selectCategory} activeCategory={category} categoryNames={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup sortBy={sortBy} selectSortPopup={selectSortPopup} sortItems={[
          {name: 'популярности', type: 'popular'},
          {name: 'цене', type: 'price'},
          {name: 'алфавиту', type: 'name'}]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas &&
          pizzas.map(pizza =>(
            <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={pizza.name} {...pizza} addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home
