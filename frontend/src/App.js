import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import Cards from './Cards/Cards';
import Community from './Community/Community';
import Carousel from './Carousel/Carousel';
import Contact from './Contact/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='w-full h-[12vh]'></div>
      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Services />
            <Cards />
            <Community />
            <About/>
            <Contact/>
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
