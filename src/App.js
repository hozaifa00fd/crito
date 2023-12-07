import './App.css';
import Featue from './components/Feature/Featue';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Featue />
      </main>
      <Footer />
    </div>
  );
}

export default App;
