import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar/NavBar';
import Home from "../src/pages/Home";
import AboutPage from './pages/AboutPage';
import CokkiePage from './pages/CokkiePage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='w-full h-[12vh]'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-bohesa' element={<AboutPage />} />
        <Route path='/Cokkie-bohesa' element={<CokkiePage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
