import React from 'react'
import '../index.css'
import img_visit from '../assets/images/visit.png'
import img_call from '../assets/images/call.png'
import img_email from '../assets/images/email.png'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MyContact from '../components/MyContact/MyContact'




const Contacts  = () => {
  return (
    <div className= 'wrapper'>
      <Header />
      <main>
        <div className='Navbar'>
          <nav>
            <a href="home.html">Home</a>
            <a className="active" href="Contact.html">Contact</a>
          </nav>
          <h1>Let's Connect</h1>
        </div>
        <div className='children'>
          <div className='child-1'>
            <img src={img_visit} alt="Location icon" />
            <div>
              <h2>Visit us</h2>
              <p>Sveavägen 31 <br />111 34 STOCKHOLM</p>
            </div>
          </div>
          <div className='child-2'>
            <img src={img_call} alt="Call icon" />
            <div>
            <h2>Call us</h2>
            <p>+46 (8) 121 470 50 <br /> +46 (8) 121 470 51</p>
            </div>
          </div>
          <div className='child-3'>
            <img src={img_email} alt="Email icon" />
            <div>
              <h2>Email us</h2>
              <p>info@crito.com <br /> support@crito.com</p>
            </div>
          </div>
        </div>
        <MyContact />
      </main>
      <Footer />
    </div>
  )
}

export default Contacts