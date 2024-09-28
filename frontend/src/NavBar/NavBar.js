import React, { useEffect, useState } from 'react';
import { ToggleButtonOnClicked } from '../utils/NavBarScripts.js';

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
      if(sectionId === 'about'){
        window.scrollTo({
          top: window.pageYOffset + scrollOffset - 100,
          behavior: 'smooth'
        });
      }else{
        window.scrollTo({
          top: window.pageYOffset + scrollOffset,
          behavior: 'smooth'
        });
      }
    }, 0); // Delay to allow initial scroll
  }
};

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = ['services', 'solutions', 'community', 'about', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Check if the user has scrolled to the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setActiveSection('contact');
      return;
    }

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav id='navbar' className="bg-white w-full h-auto fixed justify-evenly items-center border-b-[1px] border-gray-300 z-10">
        <div className='w-full flex justify-center items-center'>
          <div id='nav-element' className="h-[12vh] w-3/4 flex justify-between items-center transition-[height] duration-[0.4s] ease-in-out">
            <a href='/' className="text-2xl font-bold  text-[var(--blue-second)]">
              BOHESA
            </a>
            <div className="lg:flex hidden">
              <ul className="flex space-x-5 cursor-pointer text-light-gray font-semibold text-lg">
                {/* <li><button onClick={() => handleScrollToSection('services')} className={activeSection === 'services' ? 'font-quicksand-500 text-blue-second' : 'font-quicksand-500'}>Services</button></li>
                <li><button onClick={() => handleScrollToSection('solutions')} className={activeSection === 'solutions' ? 'font-quicksand-500 text-blue-second ' : 'font-quicksand-500'}>Solutions</button></li>
                <li><button onClick={() => handleScrollToSection('community')} className={activeSection === 'community' ? 'font-quicksand-500 text-blue-second' : 'font-quicksand-500'}>Community</button></li>
                <li><button onClick={() => handleScrollToSection('about')} className={activeSection === 'about' ? 'font-quicksand-500 text-blue-second' : 'font-quicksand-500'}>About</button></li>
                <li><button onClick={() => handleScrollToSection('contact')} className={activeSection === 'contact' ? 'font-quicksand-500 text-blue-second' : 'font-quicksand-500'}>Contact</button></li> */}
                <li><a href='/services' className='hover:text-blue-second'>Services</a></li>
                <li><a href='/solutions' className='hover:text-blue-second'>Solutions</a></li>
                <li><a href='/community' className='hover:text-blue-second'>Community</a></li>
                <li><a href='/about-bohesa' className='hover:text-blue-second'>About</a></li>
                <li><a href='#contact' className='hover:text-blue-second'>Contact</a></li>
              </ul>
            </div>
            <div className='w-[95px] h-full'>
              
            </div>
            <svg className="block cursor-pointer hover:text-gray-500 lg:hidden w-6 h-6" onClick={ToggleButtonOnClicked} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
        </div>
        <div id='toggle-menu' className="w-full lg:hidden bg-white fixed hidden justify-center border-y-[1px] border-gray-300 transition-[max-height] duration-500 ease-in-out overflow-hidden h-0">
          <div className='w-full flex flex-col items-center'>
            <ul className="cursor-pointer relative w-3/4">
              <li><button onClick={() => {handleScrollToSection('services'); }} className={(activeSection === 'services' ? ' text-blue-third py-2' : 'py-2' )}>Services</button></li>
                <li><button onClick={() => {handleScrollToSection('solutions'); }} className={activeSection === 'solutions' ? ' text-blue-third py-2' : 'py-2'}>Solutions</button></li>
                <li><button onClick={() => {handleScrollToSection('community'); }} className={activeSection === 'community' ? ' text-blue-third py-2' : 'py-2'}>Community</button></li>
                <li><button onClick={() => {handleScrollToSection('about'); }} className={activeSection === 'about' ? ' text-blue-third py-2' : 'py-2'}>About</button></li>
                <li onClick={() => {handleScrollToSection('contact'); }} className={activeSection === 'contact' ? ' text-blue-third py-2' : 'py-2'}>Contact</li>
              {/*<li className="py-2"><LanguageButton className="z-10" /></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;