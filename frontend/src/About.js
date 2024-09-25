import React from 'react';

export default function About() {
    return (
        <section id="about" className='flex justify-center'>
            <div className="w-3/4 flex flex-col md:flex-row space-y-6 justify-center items-center py-10 bg-white">
                {/* Image */}
                <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
                    <img 
                        src="/people.png" 
                        alt="Team" 
                        className="w-1/2 h-auto rounded-lg "
                    />
                </div>
                {/* Text */}
                <div className="md:w-1/2 md:text-left px-4">
                    <div className="mb-6 space-y-3 ">
                        <h2 className="text-xl font-semibold inter-font" style={{ color: 'var(--custom-gray)' }}>Who Are We?</h2>
                        <h1 className="text-m font-normal inter-font" style={{ color: 'var(--light-gray)' }}>
                            We are a team of passionate developers dedicated to providing top-notch software solutions. We envision a world where every business can leverage technology to achieve their goals.
                        </h1>
                        <a href='/about-bohesa' className='w-fit block'>
                            <div className="bg-blue-second py-2 px-3 rounded-md text-white hover:bg-opacity-85">Learn more</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
