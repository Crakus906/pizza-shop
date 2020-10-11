import React from 'react'
import PropTypes from 'prop-types'

function Catigories({ activeCategory, items, onClickCategory }) { 

  return (
    <div className = "categories">
      <ul>
        <li className = {activeCategory === null ? 'active' : ''} onClick = {() => onClickCategory(null)} >Все</li>
        {items.map((name, index) => (
          <li
            className = {activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            key={`${name}_${index}`}>
              {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
Catigories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func
}

Catigories.defaultProps = {
  activeCategory: null, items: [],
}

export default Catigories;