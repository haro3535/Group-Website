import React, { useState, useEffect } from 'react';



import './Carousel.css';
import slidesData from './resources/carouselData.json';

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState('right');

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slidesData.slides.length - 1 : currentIndex - 1;
    setDirection('left');
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slidesData.slides.length - 1 ? 0 : currentIndex + 1;
    setDirection('right');
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    const newDirection = index > currentIndex ? 'right' : 'left';
    setDirection(newDirection);
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (prevIndex !== null) {
      const timer = setTimeout(() => {
        setPrevIndex(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, prevIndex]);

  return (
    <div className='carousel'>
      

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={prevSlide} className="size-6 arrow arrow-left">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      
      {slidesData.slides.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={`slide ${currentIndex === idx ? 'active' : prevIndex === idx ? 'previous' : ''} ${direction}`}
        />
      ))}

        

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 arrow arrow-right" onClick = {nextSlide}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"  />
      </svg>

        

      
      
      <span className='indicators'>
        {slidesData.slides.map((_, idx) => (
          <button
            key={idx}
            onClick={currentIndex === idx ? null :() => goToSlide(idx)}
            className={`indicator ${currentIndex === idx ? 'active' : ''}`}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default SlideShow;
