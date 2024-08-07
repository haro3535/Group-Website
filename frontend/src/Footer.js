//TODO: Group-Website logo path will be added to row 11
//TODO: The not part on row 15 will be designed
import React from 'react';
import './style.css';

const Footer = () => {
  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Scroll to the element first
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Adjust scroll position to center the element
      window.setTimeout(() => {
        const elementRect = sectionElement.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementHeight = elementRect.height;
        const viewportHeight = window.innerHeight;

        // Calculate the amount to scroll to center the element
        const scrollOffset = elementTop - (viewportHeight / 2) + (elementHeight / 2);
        window.scrollTo({
          top: window.pageYOffset + scrollOffset,
          behavior: 'smooth'
        });
      }, 0); // Delay to allow initial scroll
    }
  };
  
  return (
    <footer id="contact" className="bg-bcg-light-gray body-font flex flex-col items-center">
      <div className="w-3/4 grid lg:grid-cols-4 grid-cols-1 py-10 space-y-5 lg:space-y-0">
        <div className="w-full mb-5">
          <a href='/' className="text-4xl font-bold font-inter text-blue-second">
            Bohesa
          </a>
          <p className="mt-2 text-sm text-light-gray">
          We prioritize customer satisfaction by developing websites
          and software applications equipped with the latest technologies, ensuring the best quality in everything we create and will create.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <div className='lg:w-1/2 w-full'>
            <h2 className="title-font font-bold text-light-gray tracking-widest text-lg mb-3">Company</h2>
            <div className="list-none mb-10">
              <li>
              <button onClick={() => handleScrollToSection('about')} className="text-light-gray hover:text-blue-third">About Us</button>
              </li>
              <li>
                <a href='/' className="text-light-gray hover:text-blue-third">Testimonials</a>
              </li>
              <li>
                {/*<a className="text-light-gray hover:text-blue-third">FAQ's</a> */}
              </li>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className='lg:w-1/2 w-full'>
            <h2 className="title-font font-bold text-light-gray tracking-widest text-lg mb-3">Useful Links</h2>
            <div className="list-none mb-10">
              <li>
                <button onClick={() => handleScrollToSection('services')} className="text-light-gray hover:text-blue-third">Our services</button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('peoplePart')} className="text-light-gray hover:text-blue-third">People</button>
              </li>
              <li>
                <a className="text-light-gray hover:text-blue-third">Client</a>
              </li>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className='lg:w-1/2 w-full'>
            <h2 className="title-font font-bold text-light-gray tracking-widest text-lg mb-3">Follow Us</h2>
            <div className="list-none mb-10">
              <li>
                <a className="text-light-gray hover:text-blue-third">LinkedIn</a>
              </li>
              <li>
                <a className="text-light-gray hover:text-blue-third">Instagram</a>
              </li>
              <li>
                <a className="text-light-gray hover:text-blue-third">X</a>
              </li>
              <li>
                <a className="text-light-gray hover:text-blue-third">Medium</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-bcg-light-gray border-t-[1px] border-light-gray border-opacity-50">
        <div className="w-full py-4 flex flex-wrap flex-col sm:flex-row sm:justify-between">
          <p className="text-light-gray font-inter  text-sm text-center sm:text-left">© 2024 Bohesa. All rights reserved.</p>
          <p className="text-light-gray font-inter  text-sm text-center sm:text-left">contact@bohesa.com</p>
          {/* 
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-light-gray">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18.36 6.64a9 9 0 11-12.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-light-gray">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-light-gray">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-light-gray">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-light-gray">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
          </span>
           */ }
        </div>
      </div>
    </footer>
  );
};

export default Footer;