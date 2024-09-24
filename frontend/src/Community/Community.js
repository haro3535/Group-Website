import React from 'react';
import '../style.css';

const cards = [
  { id: 1, title: 'Startups', content: 'Innovative solutions to help you launch and scale your business quickly.'},
  { id: 2, title: 'Small and Medium Businesses (SMBs)', content: 'Tailored software to optimize operations and enhance productivity.' },
  { id: 3, title: 'Enterprises', content: 'Robust and scalable solutions to support your large-scale operations.' },
];

const icon1 = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
);

const icon2 = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
    </svg>
);

const icon3 = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
);

const Card = ({ title, content, icon }) => (
    <div className="card-community bg-white rounded-md shadow-md px-6 py-12 text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="icon-container-community">
          {icon}
        </div>
        <div className="rectangle"></div>
      </div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-light-gray">{content}</p>
    </div>
);

const CardsGrid = () => (
  <div className="w-3/4 flex flex-col space-y-6 justify-center items-center py-12 mb-10" >
    <div className="flex flex-col space-y-3 items-center mb-12">
      <h2 className="text-4xl font-semibold inter-font text-white" >Our Community</h2>
      <h1 className="text-lg font-semibold inter-font text-white" >Who is Bohesa suitable for?</h1>
    </div>
    
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 ">
        {cards.map((card, index) => (
          <Card key={card.id} title={card.title} content={card.content} icon={[icon1, icon2, icon3][index]} />
        ))}
      </div>
    </div>
  </div>
);

export default function Cards() {
  return (
    <section id='community' className='flex relative overflow-hidden justify-center '>
      <img src='banner2.jpg' className='w-full absolute object-fit -z-10'  alt=''/>
      <CardsGrid />
    </section>
  );
}
