import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import Greeting from './Greeting/Greeting';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import Cards from './Cards/Cards';
import People from './People/People';
import Community from './Community/Community';
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Carousel />
            <Services />
            <Cards />
            <Community />
            <About/>

          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
