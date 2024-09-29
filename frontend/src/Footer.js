import React from 'react';
import './style.css';

const Footer = () => {

  

  const handleClick = (target) => {
    generateLink(target);
  }

  function generateLink(target){
    const isRoot = window.location.pathname === '/';

    if(isRoot){
      handleScrollToSection(target);
    }
    else
      window.location.href = `/?slideTo=${target}`  
  }

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
            BOHESA
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
                <a href='/about-bohesa' className="text-light-gray hover:text-blue-third">About Us</a>
              </li>
              <li>
                <button className="text-light-gray hover:text-blue-third">Testimonials</button>
              </li>
              <li>
                <button className="text-light-gray hover:text-blue-third">Privacy Policy</button>
              </li>
              <li>
                <button className="text-light-gray hover:text-blue-third">Terms</button>
              </li>
              <li>
                <a href='/Cokkie-bohesa' className="text-light-gray hover:text-blue-third">Cookie Policy</a>
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
                <button onClick={() => handleClick("services")} className="text-light-gray hover:text-blue-third">Our services</button>
              </li>
              <li>
                <button onClick={() => handleClick("solutions")} className="text-light-gray hover:text-blue-third">Business solutions</button>
              </li>
              <li>
                <button onClick={() => handleClick("community")} className="text-light-gray hover:text-blue-third">Our Community</button>
              </li>
              <li>
                <button onClick={() => handleClick("about")} className="text-light-gray hover:text-blue-third">Who are we?</button>
              </li>
              <li>
                <button onClick={() => handleClick("contact")} className="text-light-gray hover:text-blue-third">Contact Us</button>
              </li>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className='lg:w-1/2 w-full'>
            <h2 className="title-font font-bold text-light-gray tracking-widest text-lg mb-3">Follow Us</h2>
            <div className="list-none mb-10">
              <li className='flex space-x-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#717171" fill="none">
                  <path d="M7 10V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.00801 7L6.99902 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                <a href='/' className="text-light-gray hover:text-blue-third cursor-pointer">LinkedIn</a>
              </li>
              <li className='flex space-x-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#717171" fill="none">
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
                  <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
                  <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <a href='/' className="text-light-gray hover:text-blue-third cursor-pointer">Instagram</a>
              </li>
              <li className='flex space-x-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#717171" fill="none">
                    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <a href='/' className="text-light-gray hover:text-blue-third cursor-pointer">X</a>
              </li>
              <li className='flex space-x-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#717171" fill="none">
                    <circle cx="6.5" cy="12" r="4.5" stroke="currentColor" stroke-width="1.5" />
                    <ellipse cx="15.5" cy="12" rx="2.5" ry="4.5" stroke="currentColor" stroke-width="1.5" />
                    <ellipse cx="21" cy="12" rx="1" ry="4.5" stroke="currentColor" stroke-width="1.5" />
                </svg>
                <a href='/' className="text-light-gray hover:text-blue-third cursor-pointer">Medium</a>
              </li>
              {/* ... Other social media links ... */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 bg-bcg-light-gray border-t-[1px] border-light-gray border-opacity-50">
        <div className="w-full py-4 flex flex-wrap flex-col sm:flex-row sm:justify-between">
          <p className="text-light-gray font-inter  text-sm text-center sm:text-left">© 2024 Bohesa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
