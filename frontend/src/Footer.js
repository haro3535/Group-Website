import React from 'react';

const Footer = () => {
  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Scroll to the top of the element
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Adjust scroll position if needed
      window.setTimeout(() => {
        const elementRect = sectionElement.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        // Calculate offset to position the element's top at the top of the viewport
        const scrollOffset = elementTop - (viewportHeight / 2) + (elementRect.height / 2);
        window.scrollTo({
          top: scrollOffset - 100,
          behavior: 'smooth'
        });
      }, 0); // Delay to allow initial scroll
    }
  };
  
  return (
    <footer className="bg-[var(--blue-fourth)] body-font flex flex-col items-center">
      <div className="py-6 grid md:grid-cols-4 w-3/4">
        <div className="flex-shrink-0 mx-auto ">
          <a href='/' className="text-2xl text-[var(--blue-second)]">
            BOHESA
          </a>
          <p className="mt-2 text-sm text-gray-500 mb-10">
            We prioritize customer satisfaction by developing websites
            and software applications equipped with the latest technologies, ensuring the best quality in everything we create and will create.
          </p>
        </div>
        <div className="w-full md:flex md:justify-end">
            <div>
              <h2 className="title-font font-medium text-[var(--blue-first)] tracking-widest text-sm mb-3">Company</h2>
              <ul className="list-none mb-10">
                <li>
                <button onClick={() => handleScrollToSection('aboutPart')} className="text-gray-600 hover:text-gray-800 text-sm">About Us</button>
                </li>
                <li>
                  <a href='/' className="text-sm text-gray-600 hover:text-gray-800">Testimonials</a>
                </li>
                <li>
                  <a className="text-sm text-gray-600 hover:text-gray-800">FAQ's</a>
                </li>
              </ul>
            </div>
        </div>
        <div className="w-full md:flex md:justify-end">
          <div>
            <h2 className="title-font font-medium text-[var(--blue-first)] tracking-widest text-sm mb-3">Useful Links</h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">Our process</a>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('peoplePart')} className="text-sm text-gray-600 hover:text-gray-800">People</button>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">Client</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:flex md:justify-end">
          <div>
            <h2 className="title-font font-medium text-[var(--blue-first)] tracking-widest text-sm mb-3">Follow Us</h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">Facebook</a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">Instagram</a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">Google Plus</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[var(--blue-third)] w-full">
        <div className="w-3/4 mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Bohesa Inc.</p>
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