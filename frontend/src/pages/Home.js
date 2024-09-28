import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";
import Cards from "../Cards/Cards";
import Community from "../Community/Community";
import About from "../About";
import Contact from "../Contact/Contact";


export default function Home(){

    useEffect(() => {
        // Function to handle query parameters and add delay
        const handleQueryParams = () => {
          const searchParams = new URLSearchParams(window.location.search); // Get the query string
    
          const slideToParam = searchParams.get('slideTo'); // Extract the 'slideTo' parameter
          
          if (slideToParam) {
            // Add a delay before calling the function
            const timeoutId = setTimeout(() => {
                handleScrollToSection(slideToParam);
            }, 500); // Delay of 500ms (adjust as needed)
    
            // Cleanup timeout if the component is unmounted
            return () => clearTimeout(timeoutId);
          }
        };
    
        handleQueryParams(); // Call once when the component is mounted
    
        // Optionally, if query params can change dynamically, you could add a listener here
        window.addEventListener('popstate', handleQueryParams);
    
        // Cleanup the event listener and timeout on component unmount
        return () => {
          window.removeEventListener('popstate', handleQueryParams);
        };
      }, []); // Empty dependency array ensures this runs once when the component mounts

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

    return(
        <>
            <Carousel />
            <Services />
            <Cards />
            <Community />
            <About/>
            <Contact/>
        </>
    );
}