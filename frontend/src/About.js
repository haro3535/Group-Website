import React from 'react';

export default function About() {
    return (
        <div id="about" className="flex justify-center items-center py-10 bg-white">
            <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl px-4">
                {/* Image */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img 
                        src="/people.png" 
                        alt="Team" 
                        className="w-1/2 h-auto rounded-lg "
                    />
                </div>
                {/* Text */}
                <div className="md:w-1/2 text-center md:text-left px-4">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold inter-font" style={{ color: 'var(--custom-gray)' }}>Who Are We?</h2>
                        <h1 className="text-m font-normal inter-font" style={{ color: 'var(--light-gray)' }}>
                            We are a team of passionate developers dedicated to providing top-notch software solutions. We envision a world where every business can leverage technology to achieve their goals.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
