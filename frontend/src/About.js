import React from 'react';

export default function About() {
    return (
        <section id="about" className='flex justify-center'>
            <div className="w-3/4 flex flex-col lg:flex-row space-y-6 justify-center items-center py-10 bg-white">
                {/* Image */}
                
                {/* Text */}
                <div className="xl:w-3/4 md:text-left flex justify-center items-center py-10">
                    <div className="xl:w-3/4 space-y-3 py-10 px-16 bg-blue-first rounded-3xl  bg-opacity-90 mx-auto lg:mx-0">
                        <h2 className="text-xl text-white font-semibold inter-font" >Who Are We?</h2>
                        <h1 className="text-m text-white font-normal inter-font">
                            We are a team of passionate developers dedicated to providing top-notch software solutions. We envision a world where every business can leverage technology to achieve their goals.
                        </h1>
                        <a href='/about-bohesa' className='w-fit block'>
                            <div className="bg-blue-second py-2 px-3 mt-6 rounded-md text-white hover:bg-opacity-85">Learn more</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
