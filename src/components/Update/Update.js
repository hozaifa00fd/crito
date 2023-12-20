import React from 'react'
import './Update.css'
import img_Background from '../../assets/images/Background.svg'

const Update = () => {
  return (
    <section class="update">
        <div>
            <h2>Get News Update By Signup</h2>
            <div>
                <input type="text" placeholder="username@domain.com" />
                <a href="#">Subscribe<i class="fa-solid fa-arrow-right"></i></a>
                <img src={img_Background} />
            </div>
        </div>
    </section>
  )
}

export default Update