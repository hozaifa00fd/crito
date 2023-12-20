import React from 'react'
import './Choose.css'
import img_Frame23 from '../../assets/images/Frame23.svg'
import img_Frame24 from '../../assets/images/Frame24.svg'
import img_Frame25 from '../../assets/images/Frame25.svg'
import img_Frame26 from '../../assets/images/Frame26.svg'
import img_whychooseuse from '../../assets/images/whychooseuse.jpg'
import Item from './Item'

const Choose = () => {
    return (
        <section className="choose">
            <section className="choose">
                <div className="choose-left">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The <br />Best Business <br /> Consulting Agency</h2>
                    <Item img ={img_Frame23} title= "Process Excellence" description= "Lorem ipsum dolor sit amet consectetur." />
                    <Item img ={img_Frame24} title= "Strategic planning" description= "Lorem ipsum dolor sit amet consectetur." />
                    <Item img ={img_Frame25} title= "Experience Design" description= "Lorem ipsum dolor sit amet consectetur." />
                    <Item img ={img_Frame26} title= "Artificial intelligence" description= "Lorem ipsum dolor sit amet consectetur." />
                </div>
                <div className="choose-right">
                    <img src={img_whychooseuse} alt="Two ladies discussting with each other" />
                </div>
            </section>
        </section>
    )
}

export default Choose