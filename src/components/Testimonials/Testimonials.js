import React from 'react'
import './Testimonials.css'
import img_KristinePalmer from '../../assets/images/KristinePalmer.jpg'
import img_MarkAubrei from '../../assets/images/MarkAubrei.jpg'
import img_KimberlyHansen from '../../assets/images/KimberlyHansen.jpg'
import img_JustinWillioman from '../../assets/images/JustinWillioman.jpg'
import img_CassandraWarren from '../../assets/images/CassandraWarren.jpg'
import img_AmandaTulling from '../../assets/images/AmandaTulling.jpg'
import img_JackMcDogglas from '../../assets/images/JackMcDogglas.jpg'

const Testimonials = () => {
  return (
    <section class="team-testimonials">
        <div class="team">
            <div class="team-top">
                <div class="team-top-left">
                    <p>Meet Our Team</p>
                    <h2>Experienced Team Members</h2>
                </div>
                <div class="team-top-right">
                    <a href="#">Browse Team<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="team-bottom">
                <div class="members">
                    <div class="member">
                        <img src={img_KristinePalmer} alt="Team member" />
                        <h4>Kristine Palmer</h4>
                        <p>Cheif Operation Officer</p>
                    </div>
                    <div class="member">
                        <img src={img_MarkAubrei} alt="Team member" />
                        <h4>Mark Aubri</h4>
                        <p>Senior Consultant</p>
                    </div>
                    <div class="member">
                        <img src={img_KimberlyHansen} alt="Team member" />
                        <h4>Kimberly Hansen</h4>
                        <p>Senior Consultant</p>
                    </div>
                    <div class="member">
                        <img src={img_JustinWillioman} alt="Team member" />
                        <h4>Justin Willioman</h4>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </span>
            </div>
        </div>
        <div class="WhatOurClientSays">
            <p>Testmonial</p>
            <h2>What Our Client Says</h2>
            <div class="wrapper">
                <div class="box">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt 
                        nemo eligendi numquam voluptate"
                    </p>
                    <div class="content">
                        <div class="image">
                            <img src={img_CassandraWarren} />
                        </div>
                        <div class="info">
                            <h4>Cassandra Warren</h4>
                            <p>Buisness Manager,Derfous</p>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt 
                        nemo eligendi numquam voluptate"
                    </p>
                    <div class="content">
                        <div class="image">
                            <img src={img_AmandaTulling} />
                        </div>
                        <div class="info">
                            <h4>Amanda Tulling</h4>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt 
                        nemo eligendi numquam voluptate"
                    </p>
                    <div class="content">
                        <div class="image">
                            <img src={img_JackMcDogglas} />
                        </div>
                        <div class="info">
                            <h4>Jack McDogglas</h4>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="link" href="#">All Reviews<i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </section>
  )
}

export default Testimonials