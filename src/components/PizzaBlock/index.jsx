import React, { useState,} from 'react';
import PropTypes from 'prop-types'
import  classNames from 'classnames';
import Button from '../Button';

function PizzaBlock({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount}) {
  const availableTypes = ['тонкое','традиционное']; 
  const availableSizes = [ 26, 30, 40]
  const [activeSize, setActiveSize] = useState(0) // хук що вибирає розмір піцци
  const [activeType, setActiveType] = useState(types[0]) // хук вибирає між кнопкою 'тонкое','традиционное'.

  const onSeletcType = (index) => {  // хук вибирає між кнопкою 'тонкое','традиционное'.
    setActiveType(index)
  }
  const onSeletcSize = (index) => {   // хук що вибирає розмір піцци
    setActiveSize(index)  
  }

  const addPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: availableTypes[activeType],
      size: availableSizes[activeSize],
    }
    onClickAddPizza(obj)
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" /> {/*відбаження фото */}
        <h4 className="pizza-block__title">{name}</h4> {/*відображення імені*/}
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (                                                                              
            
            <li
              key={type}
              onClick={() => onSeletcType(index)} 
              className={classNames({                                      //вибирає між кнопкою 'тонкое','традиционное'.
                active: activeType === index,
                disabled: !types.includes(index)
              })}>
              {type}
            </li>        
          ))}                                                                                                            
        </ul>
        <ul>
          {availableSizes.map((size, index) => (                                                                             
            <li
              key={size}
              onClick={() => onSeletcSize(index)} 
              className={classNames({                         //вибирає розмір піцци
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}>
              {size} см. 
            </li>         
          ))}   
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div> {/*вивди ціну*/}
        <Button className="button--add" onClick={addPizza} outline>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
          </svg>
          <span>Добавить</span>
          {addedCount &&<i>{addedCount}</i>}
        </Button>
      </div>
    </div> 
  )
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,                          // перевіряє чи правильні данні занесенні в базу данних
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
}

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
}

export default PizzaBlock
