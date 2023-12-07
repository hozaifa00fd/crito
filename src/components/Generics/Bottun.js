import React from 'react'

const Bottun = ({ text, url }) => {
  return (
    <a className="btn" href={url}>
        {text} 
        <i className="fa-solid fa-arrow-up"></i>
    </a>
  )
}

export default Bottun