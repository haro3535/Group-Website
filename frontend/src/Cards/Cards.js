import React, { useState } from 'react';

const cards = [
  { id: 1, title: 'Business Intelligence Solutions', content: 'We provide comprehensive business intelligence solutions to help companies make data-driven decisions. Our tools and platforms offer advanced analytics, reporting, and data visualization to turn raw data into actionable insights.', image: 'services-01.jpg' },
  { id: 2, title: 'Optimization Services', content: 'Our optimization services ensure your software and processes are running at peak efficiency. We analyze and improve your existing systems to reduce costs, enhance performance, and increase productivity.', image: 'services-02.jpg' },
  { id: 3, title: 'High-Quality Software Development', content: 'We specialize in delivering high-quality software tailored to your business needs. Our team uses the latest technologies and best practices to create robust, scalable, and user-friendly applications.', image: 'services2-03.jpg' },
  { id: 4, title: 'Enterprise Solutions', content: 'Our enterprise solutions are designed to address the complex needs of large organizations. We offer customized software that integrates seamlessly with your existing infrastructure, ensuring smooth operations and enhanced capabilities.', image: 'services-04.jpg' },
  { id: 5, title: 'Security Solutions', content: 'Protect your business with our top-notch security solutions. We provide comprehensive cybersecurity services, including risk assessments, threat detection, and mitigation strategies to safeguard your data and systems.', image: 'services-05.jpg' },
  { id: 6, title: 'Automation Services', content: 'Increase efficiency and reduce manual effort with our automation services. We develop automated solutions for repetitive tasks, enabling your team to focus on more strategic initiatives and driving business growth.', image: 'services-06.jpg' },
];

const Card = ({ title, content, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative bg-white p-6 shadow-md rounded-md flex flex-col justify-between h-full"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-md"></div>
      <div className="relative">
        <h2 className={`text-xl font-semibold mb-4 ${isHovered ? 'text-custom-yellow' : 'text-white'}`}>
          <span className={`font-bold leading-none transition-all duration-300 ${isHovered ? 'text-5xl' : 'text-4xl'}`}>{title.charAt(0)}</span>{title.slice(1)}
        </h2>
        <p className="text-gray-200">{content}</p>
      </div>
    </div>
  );
};

const CardsGrid = () => (
  <div className="w-3/4 py-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
      {cards.map((card) => (
        <div key={card.id} className="col-span-1">
          <div className="h-full flex justify-center items-center">
            <Card title={card.title} content={card.content} image={card.image} />
          </div>
        </div>
      ))}
    </div>
    
  </div>
);

export default function Cards() {
  return (
    <div className='flex justify-center'>
      <CardsGrid />
    </div>
  );
}
