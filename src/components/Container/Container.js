import React from 'react'
import img_logotype from '../../assets/images/logotype.svg'
import './Container.css'
import Bottun from '../Generics/Bottun'

const Container = () => {
  return (
        <div className="container">
        <img src={img_logotype} alt="Crito logotype" />
        <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
        <div className="menu">
            <div className="top-menu">
                <div className="contact-info">
                    <div className="child">
                        <i className="fa-solid fa-phone-volume"></i> 
                        +46 (8) 121 470 50
                    </div>
                    <div className="child">
                        <i className="fa-regular fa-envelope"></i>                            
                        info@crito.com
                    </div>
                    <div className="child last">
                        <i className="fa-solid fa-location-dot"></i>                           
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <a className="active" href="home.html">Home</a>
                    <a href="Service.html">Service</a>
                    <a href="News.html">News</a>
                    <a href="Contact.html">Contact</a>
                </nav>
                <Bottun text= "Login" url="Login" />
            </div>
        </div>
    </div>
  )
}

export default Container