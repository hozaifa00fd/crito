import './App.css';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Logocontainer from './components/Logocontainer/Logocontainer';

function App() {
  return (
    <div className='wrapper'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <Header />
      <Logocontainer />
      <main>
        <Feature />
      </main>
      <Footer />
    </div>
  );
}

export default App;
