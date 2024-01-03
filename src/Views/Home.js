import React from 'react'
import '../index.css'
import Header from '../components/Header/Header';
import Feature from '../components/Feature/Feature';
import Footer from '../components/Footer/Footer';
import Logocontainer from '../components/Logocontainer/Logocontainer';
import About from '../components/About/About';
import OurServices from '../components/OurServices/OurServices';
import Choose from '../components/Choose/Choose';
import ProjectnCases from '../components/ProjectnCases/ProjectnCases';
import Testimonials from '../components/Testimonials/Testimonials';
import Articles from '../components/Articles/Articles';
import Update from '../components/Update/Update';
import Showcase from '../components/Showcase/Showcase';


const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Showcase />
      <Logocontainer />
      <main>
        <Feature />
        <About />
        <OurServices />
        <Choose />
        <ProjectnCases />
        <Testimonials />
        <Articles />
        <Update />
      </main>
      <Footer />
    </div>
  )
}

export default Home