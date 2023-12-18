import './About.css'
import React from 'react'
import img_daria from '../../assets/images/daria.jpg'

const About = () => {
  return (
    <section className="about">
        <div className="about-left">
            <img src= {img_daria} />
            <div className="about-left-box">
                <p>Samantha Brown, <span>Founder</span></p>
                <span>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</span>
            </div>
        </div>
        <div className="container-about-right">
            <div>
                <h6>About Company</h6>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div>
                    <a href="#">Learn More<i className="fa-solid fa-arrow-right"></i></a>
                    <a href="#"><span>&#8227;</span>Intro Video</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About