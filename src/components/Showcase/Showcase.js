import React from 'react'
import './Showcase.css'
import img_showcase from '../../assets/images/showcase.svg'
import Bottun from '../Generics/Bottun'

const Showcase = () => {
  return (
    <section className="showcase">
            <div className="content">
                <h1>We Provide The Best Business Solution</h1>
                <p>Establish your vision and value proposition and trun them into testable prototypes.</p>
                <Bottun text="Get Consulting" url="/services/get-consulting" />
                <Bottun text="Learn More" url="/services/consulting" />
            </div>
            <img src={img_showcase.svg} alt="image of a man" />
    </section>
  )
}

export default Showcase