import React from 'react'

const Categories = ({selectCategory, activeCategory, categoryNames}) => {


  return (
    <div className="categories">
              <ul>
                <li onClick={() => selectCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
                {
                  categoryNames.map((item,index) => {
                  return  <li
                  key = {item}
                  className={activeCategory === index ? 'active' : ''}
                  onClick = {() => selectCategory(index)}>
                        {item}
                        </li>
                  })
                }
              </ul>
            </div>
  )
}

export default Categories
