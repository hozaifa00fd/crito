import './App.css';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Logocontainer from './components/Logocontainer/Logocontainer';
import About from './components/About/About';
import OurServices from './components/OurServices/OurServices';
import Choose from './components/Choose/Choose';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Logocontainer />
      <main>
        <Feature />
        <About />
        <OurServices />
        <Choose />
      </main>
      <Footer />
    </div>
  );
}

export default App;
