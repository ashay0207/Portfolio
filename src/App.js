// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/intro';
import About from './Components/About/About';
import Portfolio from './Components/Portflio/Portfolio';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
// import 'bootstrap5/src/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
