import React from 'react'
import './Choose.css'
import img_Frame23 from '../../assets/images/Frame23.svg'
import img_Frame24 from '../../assets/images/Frame24.svg'
import img_Frame25 from '../../assets/images/Frame25.svg'
import img_Frame26 from '../../assets/images/Frame26.svg'
import img_whychooseuse from '../../assets/images/whychooseuse.jpg'

const Choose = () => {
    return (
        <section className="choose">
            <section className="choose">
                <div className="choose-left">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The <br />Best Business <br /> Consulting Agency</h2>
                    <div className="item">
                        <span className="item-icon">
                            <img src={img_Frame23} />
                        </span>
                        <div>
                            <p>Process Excellence</p>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                    </div>
                    <div className="item">
                        <span className="item-icon">
                            <img src={img_Frame24} />
                        </span>
                        <div>
                            <p>Strategic planning</p>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                    </div>
                    <div className="item">
                        <span className="item-icon">
                            <img src={img_Frame25} />
                        </span>
                        <div>
                            <p>Experience Design</p>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                    </div>
                    <div className="item">
                        <span className="item-icon">
                            <img src={img_Frame26} />
                        </span>
                        <div>
                            <p>Artificial intelligence</p>
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                        </div>
                    </div>
                </div>
                <div className="choose-right">
                    <img src={img_whychooseuse} alt="Two ladies discussting with each other" />
                </div>
            </section>
        </section>
    )
}

export default Choose