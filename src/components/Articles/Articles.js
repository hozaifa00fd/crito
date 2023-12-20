import React from 'react'
import './Articles.css'
import img_woman from '../../assets/images/woman.jpg'
import img_Chat from '../../assets/images/Chat.jpg'
import img_book from '../../assets/images/book.jpg'

const Articles = () => {
  return (
    <section class="articles">
        <div class="article-top">
            <div class="article-top-left">
                <p>Articles & News</p>
                <h2>Get Every Single Article And News</h2>
            </div>
            <div class="article-top-right">
                <a href="#">Browse Articles<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="article-bottom">
            <div>
                <div class="item">
                    <div class="date-img">
                        <img src={img_woman} width="360" height="200" alt="Girl sitting on a chair" />
                        <div class="date">
                            <h4>25</h4>
                            <p>Mar</p>
                        </div>
                    </div>
                    <p>Business</p>
                    <h5>How To Use The Digitalization In The Classroom</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                </div>
                <div class="item">
                    <div class="date-img">
                        <img src={img_Chat} width="360" height="200" alt="Chat-gpt website" />
                        <div class="date">
                            <h4>17</h4>
                            <p>Mar</p>
                        </div>
                    </div>
                    <p>Business</p>
                    <h5>How To Implement Chat GPT In Your Projects</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                </div>
                <div class="item">
                    <div class="date-img">
                        <img src={img_book} width="360" height="200" alt="two books about HTML and CSS and telephone" />
                        <div class="date">
                            <h4>13</h4>
                            <p>Mar</p>
                        </div>
                    </div>
                    <p>Business</p>
                    <h5>The Guide To Support Modern CSS In Design</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, voluptatum.</p>
                </div>
            </div>
        </div>
        <span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </span>

    </section>
  )
}

export default Articles