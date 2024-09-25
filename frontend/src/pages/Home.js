import React from "react";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";
import Cards from "../Cards/Cards";
import Community from "../Community/Community";
import About from "../About";
import Contact from "../Contact/Contact";


export default function Home(){
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