import React, { useState } from 'react';
import '../style.css';

const cards = [
  { id: 1, title: 'Business Intelligence Solutions', content: 'We provide comprehensive business intelligence solutions to help companies make data-driven decisions. Our tools and platforms offer advanced analytics, reporting, and data visualization to turn raw data into actionable insights.'},
  { id: 2, title: 'Optimization Services', content: 'Our optimization services ensure your software and processes are running at peak efficiency. We analyze and improve your existing systems to reduce costs, enhance performance, and increase productivity.' },
  { id: 3, title: 'High-Quality Software Development', content: 'We specialize in delivering high-quality software tailored to your business needs. Our team uses the latest technologies and best practices to create robust, scalable, and user-friendly applications.' },
  { id: 4, title: 'Enterprise Solutions', content: 'Our enterprise solutions are designed to address the complex needs of large organizations. We offer customized software that integrates seamlessly with your existing infrastructure, ensuring smooth operations and enhanced capabilities.'},
  { id: 5, title: 'Security Solutions', content: 'Protect your business with our top-notch security solutions. We provide comprehensive cybersecurity services, including risk assessments, threat detection, and mitigation strategies to safeguard your data and systems.' },
  { id: 6, title: 'Automation Services', content: 'Increase efficiency and reduce manual effort with our automation services. We develop automated solutions for repetitive tasks, enabling your team to focus on more strategic initiatives and driving business growth.' },
];

const icon1 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  < path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>
);

const icon2 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);

const icon3 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
  </svg>
);

const icon4 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const icon5 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

);
const icon6 = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);
const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

const Card = ({ title, content, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="card space-y-10 px-6 py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="icon-background-cards text-custom-gray">
        {icon}
      </div>
      <div className='w-full py-4 relative 2xl:h-16 h-14'>
        <h2 className={`text-xl font-semibold absolute w-full top-0 mx-auto h-full  sm:mt-0  ${isHovered ? 'text-blue-second' : 'text-blue-second'}`}>
          <span className={`font-bold leading-none transition-all duration-300 ${isHovered ? 'text-3xl' : 'text-xl'}`}>{title.charAt(0)}</span>{title.slice(1)}
        </h2>
      </div>
      <div className="w-full text-start">
        <p className="text-light-gray mt-[-0.25rem]">{content}</p>
      </div>
    </div>
  );
};

const CardsGrid = () => (
  <div id="solutions" className="w-full flex flex-col items-center justify-center py-8 bg-white">
    <div className="w-3/4 flex flex-col items-center justify-center mb-6">
      <h2 className="text-xl text-center font-semibold inter-font mb-3 " style={{ color: 'var(--custom-gray)' }}>
        Empowering businesses through innovative technology
      </h2>
      <h1 className="text-center font-normal inter-font" style={{ color: 'var(--light-gray)' }}>
        Ready to take your business to the next level? Our mission is to provide top-notch software solutions suitable for your business.
      </h1>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 2xl:gap-0 w-3/4">
      {cards.slice(0, 4).map((card, index) => (
        <div key={card.id} className="col-span-1 flex justify-center items-center">
          <Card title={card.title} content={card.content} icon={icons[index]} />
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 2xl:gap-0 mt-6 w-3/4">
      <div className="hidden 2xl:block"></div>
      {cards.slice(4, 6).map((card, index) => (
        <div key={card.id} className="col-span-1 flex justify-center items-center">
          <Card title={card.title} content={card.content} icon={icons[index + 4]} />
        </div>
      ))}
      <div className="hidden lg:block"></div>
    </div>
  </div>
);

export default function Cards() {
  return (
    <div>
      <CardsGrid />
    </div>
  );
}