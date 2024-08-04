import React from 'react';
import { ToggleButtonOnClicked, CloseToggleMenu } from '../utils/NavBarScripts.js';
import LanguageButton from './LanguageButton.js';

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

export default function NavBar() {
  return (
    <>
      <nav id='navbar' className="bg-white w-full h-auto fixed justify-center items-center border-b-[1px] border-gray-300 z-10">
        <div className='w-full flex justify-center items-center'>
          <div id='nav-element' className="h-[12vh] w-3/4 flex justify-between items-center transition-[height] duration-[0.4s] ease-in-out">
            <a href='/' className="text-2xl font-bold font-inter text-[var(--blue-second)]">
              BOHESA
            </a>
            <div className="lg:flex hidden">
              <ul className="flex space-x-5 cursor-pointer font-inter text-light-gray">
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a href="#solutions" onClick={() => scrollToSection('solutions')}>Solutions</a></li>
                <li><a href="#community" onClick={() => scrollToSection('community')}>Community</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>
            <div className='hidden lg:block'>
              <LanguageButton />
            </div>
            <svg className="block cursor-pointer hover:text-gray-500 lg:hidden w-6 h-6" onClick={ToggleButtonOnClicked} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
        </div>
        <div id='toggle-menu' className="w-full lg:hidden bg-white fixed hidden justify-center border-y-[1px] border-gray-300 transition-[max-height] duration-500 ease-in-out overflow-hidden h-0">
          <div className='w-full flex flex-col items-center'>
            <ul className="cursor-pointer relative w-3/4">
              <li className="py-2" onClick={CloseToggleMenu}>Ana Sayfa</li>
              <li className="py-2" onClick={CloseToggleMenu}>Hakkımızda</li>
              <li className="py-2" onClick={CloseToggleMenu}>Projelerimiz</li>
              <li className="py-2" onClick={CloseToggleMenu}>Referanslarımız</li>
              <li className="py-2" onClick={CloseToggleMenu}>İletişim</li>
              <li className="py-2"><LanguageButton className="z-10" /></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}