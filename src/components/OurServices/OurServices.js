import React from 'react'
import ServiceBox from './ServiceBox'
import './OurServices.css'

const OurServices = () => {
  return (
    <section class="services">
        <div>
            <p>Our Services</p>
            <h3>We Provide The Best<br /> Service For Consulting</h3>
            <div>
                <ServiceBox title= "Business Advice" description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url= "services/businessadvice"/>
                <ServiceBox title= "Startup Business" description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url= "services/startupbusiness"/>
                <ServiceBox title= "Financial Advice" description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url= "services/financialbusiness"/>
                <ServiceBox title= "Risk Management" description= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url= "services/riskmanagment"/>
            </div>
            <a href="#">Browse Services<i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </section>
  )
}

export default OurServices