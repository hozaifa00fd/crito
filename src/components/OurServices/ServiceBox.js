import React from 'react'

const ServiceBox = ({title , description, url}) => {
  return (
    <div className="item">
      <div className="thin-line"></div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>
        <i className="fa-solid fa-arrow-right" href ={url}></i>
      </span>
    </div>  
)
}

export default ServiceBox