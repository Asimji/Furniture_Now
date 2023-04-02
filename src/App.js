import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import Router from './RouterComponent/Router';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
