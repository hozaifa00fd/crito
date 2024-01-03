import React from 'react'
import './Footer.css'
import img_LogotypeWhite from '../../assets/images/LogotypeWhite.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="left">
          <img src={img_LogotypeWhite} alt="crito-logo" />
          <p>Lorem ipsum dolor sit amet consectetur <br /> 
            adipisicing elit. Placeat obcaecati voluptas  <br />
            voluptates! Voluptates laborum nam <br />
            ratione minus necessitatibus, iure <br />
            praesentium.</p>
        </div>
        <div className="right">
          <div>
            <div className="item">
              <h4 >Company</h4>
              <span>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Work</a>
                <a href="#">Career</a>
              </span>
            </div>
            <div className="item">
              <h4>Help</h4>
              <span>
                <a href="#">Customer support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </span>
            </div>
            <div className="item">
              <h4>Resources</h4>
              <span>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
              </span>
            </div>
            <div className="item">
              <h4>Link</h4>
              <span>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#"> Youtube Playlist</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div>
          <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div className="social-media-footer">
            <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer