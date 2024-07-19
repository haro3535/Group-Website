import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './Carousel.css';
import slidesData from './resources/carouselData.json';

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState('right'); // New state for direction

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
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
      {slidesData.slides.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={`slide ${currentIndex === idx ? 'active' : prevIndex === idx ? 'previous' : ''} ${direction}`}
        />
      ))}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {slidesData.slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`indicator ${currentIndex === idx ? 'active' : ''}`}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default SlideShow;
