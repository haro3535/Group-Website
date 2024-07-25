//TODO: Group-Website logo path will be added to row 11
//TODO: The not part on row 15 will be designed
import React from 'react';

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
    <footer className="bg-[var(--blue-fourth)] body-font">
      <div className="container mx-auto py-24 px-5 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left">
          <a href='/' className="text-2xl text-[var(--blue-second)]">
            BOHESA
          </a>
          <p className="mt-2 text-sm text-gray-500">
            We prioritize customer satisfaction by developing websites and software applications equipped with the latest technologies...
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[var(--blue-first)] tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-10">
              <li>
              <button onClick={() => handleScrollToSection('aboutPart')} className="text-gray-600 hover:text-gray-800">About Us</button>
              </li>
              <li>
                <a href='/' className="text-gray-600 hover:text-gray-800">Testimonials</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ's</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[var(--blue-first)] tracking-widest text-sm mb-3">Useful Links</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Our process</a>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('peoplePart')} className="text-gray-600 hover:text-gray-800">People</button>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Client</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[var(--blue-first)] tracking-widest text-sm mb-3">Follow Us</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Facebook</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Twitter</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Google Plus</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[var(--blue-third)]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Group-Website</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18.36 6.64a9 9 0 11-12.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M7.88 6.64a9 9 0 0112.72 0M15 3v4.8a1.2 1.2 0 01-2.4 0V3m3.6 7.2h-3.6a1.2 1.2 0 000 2.4h3.6a1.2 1.2 0 000-2.4z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;