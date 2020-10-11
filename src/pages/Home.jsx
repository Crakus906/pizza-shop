import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Catigories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'

import { setCatigories, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzasToCart } from '../redux/actions/cart'

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas( category, sortBy ))
  }, [ category, sortBy]);

  const categiriesNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']

  const sortItems = [{ name: 'популярности', type: 'popular', ored: 'desc' },
                     { name: 'цене', type: 'price', ored: 'desc' },
                     { name: 'алфавиту', type: 'name', ored: 'asc'}]

  const onSelectCategory = useCallback((index) => {
    dispatch(setCatigories(index)) 
  }, [])
  
  const onSelectSortType = useCallback((index) => {
    dispatch(setSortBy(index)) 
  }, [])
  
  const handleAddPizzaToCard = obj => {
    dispatch(addPizzasToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Catigories 
          activeCategory={category} 
          onClickCategory={onSelectCategory} 
          items = {categiriesNames}  
        />
        <SortPopup activeSortType = {sortBy.type} items = {sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ?
          items.map(obj => 
            <PizzaBlock 
              onClickAddPizza={handleAddPizzaToCard} 
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />) : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
        } 
      </div>
    </div> 
  )
}

export default Home
