//TODO: Group-Website logo path will be added to row 11
//TODO: The not part on row 15 will be designed

//export default function Footer(){
//    return(
//        <footer className="footer ">
//          <div className="mx-40 w-3/4">
//            <div className="footer-content">
//              <div className="footer-section">
//                <a href="/" className="logo">
//                  <img src="/path-to-your-logo.png" alt="Group-Website Logo" className="logo-img" />
//                  <span className="logo-text">Group-Website</span>
//                </a>
//                <p className="footer-text">
//                  We've been crafting beautiful websites, launching stunning brands and making clients happy for years. With our prestigious craftsmanship.
//                </p>
//              </div>
//              <div className="footer-section">
//                <h2 className="footer-title">Company</h2>
//                <ul className="footer-list">
//                  <li><a href="#">About Us</a></li>
//                  <li><a href="#">Testimonials</a></li>
//                  <li><a href="#">FAQ's</a></li>
//                </ul>
//              </div>
//              <div className="footer-section">
//                <h2 className="footer-title">Useful Links</h2>
//                <ul className="footer-list">
//                  <li><a href="#">Our process</a></li>
//                  <li><a href="#">People</a></li>
//                  <li><a href="#">Client</a></li>
//                </ul>
//              </div>
//              <div className="footer-section">
//                <h2 className="footer-title">Follow Us</h2>
//                <ul className="footer-list">
//                  <li><a href="#">Facebook</a></li>
//                  <li><a href="#">Twitter</a></li>
//                  <li><a href="#">Google Plus</a></li>
//                </ul>
//              </div>
//            </div>
//            <div className="footer-bottom">
//              <p>© 2023 Group-Website </p>
//              <div className="social-icons">
//                <a href="#" className="social-icon">F</a>
//                <a href="#" className="social-icon">T</a>
//                <a href="#" className="social-icon">G</a>
//                <a href="#" className="social-icon">P</a>
//                <a href="#" className="social-icon">I</a>
//              </div>
//            </div>
//          </div>
//        </footer>
//  );
//};

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--blue-fourth)]  body-font">
      <div className="container mx-auto py-24 px-5 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/path-to-your-logo.png" alt="BOHESA Logo" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
            <span className="ml-3 text-xl">BOHESA</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">We've been crafting beautiful websites, launching stunning brands and making clients happy for years. With our prestigious craftsmanship.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Testimonials</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ's</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Useful Links</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Our process</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">People</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Client</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Follow Us</h2>
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
      <div className="bg-gray-300">
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
