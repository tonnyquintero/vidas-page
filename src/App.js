import Nav from '../src/components/Nav.jsx'
import NavMobile from '../src/components/NavMobile.jsx'
import Services from '../src/components/Services.jsx'
import Contact from '../src/components/Contact.jsx'
import About from '../src/components/About.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css';

function App() {
  return (
    <>
    <NavMobile />
    <Nav />
    <Header />
    <About />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
