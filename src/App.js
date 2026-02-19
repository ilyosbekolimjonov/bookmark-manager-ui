import './App.css';
import Header from './Header/Header';
import Future from './Main/Future/Future';
import Hero from './Main/Hero/Hero';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Future />
      <Footer />
    </div>
  );
}

export default App;