import React from 'react'

const Item = ({title , description, img}) => {
  return (
    <div className="item">
        <span className="item-icon">
        <img src= {img} />
        </span>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
    </div>
  )
}

export default Item