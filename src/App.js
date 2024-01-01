import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Lending from './Components/Lending/Lending';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
   <>
   <Navbar />
   <Routes>   
    <Route exact path='/' Component={Lending}/>
    <Route path='/about' Component={About}/>
    <Route path='/skills' Component={Skills}/>
    <Route path='/contact' Component={Contact}/>
   </Routes>
   </>
  );
}

export default App;


// portfoloio link
// https://www.canva.com/p/templates/EAFCa1Va6II-brown-grey-creative-modern-online-portfolio/
// lending page - https://www.canva.com/templates/EAE72TTCgB4-modeling-portfolio-website-in-pastel-pink-pastel-blue-black-colored-experimental-style/
//  ending page - https://www.canva.com/p/templates/EAFhY3LWSjY-beige-minimalist-portfolio-website-desktop-prototype/
// animation - https://alvarotrigo.com/blog/css-text-animations/