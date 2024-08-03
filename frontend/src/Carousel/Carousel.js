import React, { useState, useEffect } from 'react';
import './Carousel.css';
import '../style.css';

const slides = [
  { 
    src: 'sliderphoto.png', 
    text: (
      <>
        <span className="text-blue-second">Innovative</span> Software Solutions for Your Business.
      </>
    ), 
    subText: 'Leverage technology to achieve your goals...' 
  },
  { 
    src: 'sliderphoto.png', 
    text: (
      <>
        <span className="text-blue-second">Secure and compliant</span> software to boost productivity.
      </>
    ), 
    subText: 'Leverage technology to achieve your goals...' 
  },
  { 
    src: 'sliderphoto.png', 
    text: (
      <>
        <span className="text-blue-second">Cost-effective</span> software development to help you achieve your mission.
      </>
    ), 
    subText: 'Leverage technology to achieve your goals...' 
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container mt-20"> {/* Adjust margin-top based on your navbar height */}
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full flex items-center justify-center bg-bcg-light-gray">
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} text-center p-8`}>
                <img src={slide.src} alt={`Slide ${index + 1}`} className="w-full md:w-1/2 mx-auto mb-4 md:mb-0" />
                <div className="w-full md:w-1/2 md:text-left">
                  <p className="text-4xl font-inter font-semibold text-custom-gray">{slide.text}</p>
                  <p className="text-sm mt-2 font-inter italic text-light-gray">{slide.subText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'bg-blue-second' : 'bg-blue-second bg-opacity-20'} w-2 h-2 rounded-full`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
