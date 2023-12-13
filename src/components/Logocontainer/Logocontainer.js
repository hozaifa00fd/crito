import React from 'react'
import './Logocontainer.css'
import img_paperz from '../../assets/images/paperz.svg'
import img_dorfus from '../../assets/images/dorfus.svg'
import img_martino from '../../assets/images/martino.svg'
import img_square from '../../assets/images/square.svg'
import img_gobona from '../../assets/images/gobona.svg'


const Logocontainer = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        <img src={img_paperz} alt="designed text" />
        <img src={img_dorfus} alt="designed text" />
        <img src={img_martino} alt="designed text" />
        <img src={img_square} alt="designed text" />
        <img src={img_gobona} alt="designed text" />
      </div>
    </div>
  )
}

export default Logocontainer