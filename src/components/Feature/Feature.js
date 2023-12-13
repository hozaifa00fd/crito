import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <section class="feature">
      <div class="feature-left">
        <p>Features</p>
        <h2>Our Accounting is trusted by thousand of companies</h2>
        <a href="#">Learn More<i class= "fa-solid fa-arrow-right"></i></a>
      </div>
      <div class="feature-right">
        <div class="feature-right-items">
          <div>
            <a href="#"><i class="fa-solid fa-handshake"></i></a>
            <h3>Business Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <a href="#"><i class="fa-solid fa-user-tie"></i></a>
            <h3>Startup Business</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <a href="#"><i class="fa-solid fa-chart-line"></i></a>
            <h3>Financial Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <a href="#"><i class="fa-solid fa-certificate"></i></a>
            <h3>Risk Management</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature