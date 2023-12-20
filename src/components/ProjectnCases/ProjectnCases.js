import React from 'react'
import Cases from './Cases'
import './ProjectnCases.css'
import img_Business from '../../assets/images/Business.jpg'
import img_Resposive from '../../assets/images/Resposive.jpg'
import img_Employee from '../../assets/images/Employee.jpg'
import img_Laptop from '../../assets/images/Laptop.jpg'

const ProjectnCases = () => {

    const projects = [
        { img: img_Business, alt:"a man reading a business magazine", title:"Grow your business", text:"Read More", url:"services.html"},
        { img: img_Resposive, alt:"picture of glases and laptop and a watch", title:"Why your client needs a responsive website", text:"Read More", url:"services.html"},
        { img: img_Employee, alt:"a man reading a business magazine", title:"Educate your employees to get better results", text:"Read More", url:"services.html"},
        { img: img_Laptop, alt:"image of a laptop", title:"Business Insights is a important piece of your business", text:"Read More", url:"services.html"}
    ]



  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Lets Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                {
                    projects.map((project, index) => (
                        <Cases key= {index} img= {project.img} alt={project.alt} title={project.title} text={project.text} url={project.url} />))
                }

                
            </div>
            <div className="a-link">
                <a className="link" href="#">All Recent Projects<i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>  
    </section>
  )
}

export default ProjectnCases