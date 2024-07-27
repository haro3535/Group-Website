import React from 'react';


const services = [
  {
    title: 'Marketing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
  {
    title: 'Development',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    title: 'Html5',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3.75h19.5m-19.5 0v16.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V3.75M2.25 3.75v-1.5h19.5v1.5m-19.5 0v1.5M21.75 3.75v1.5m-15-1.5h10.5m-10.5 1.5h10.5M6 8.25h12M6 11.25h12m-12 3h8.25m-8.25 3h5.25" />
      </svg>
    ),
  },
  {
    title: 'Css',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25L2.25 21.75l9.75-3 9.75 3L12 2.25zm-4.5 9L12 8.25m4.5 3L12 8.25M12 8.25l4.5 3M12 8.25L7.5 12m0 0h9m0 3h-9m0 3h5.25" />
      </svg>
    ),
  },
  {
    title: 'Wordpress',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
      </svg>
    ),
  },
];





  export default function Services() {
    return (
        <div className="w-full flex justify-center items-center py-10 bg-white">
          <div className="w-3/4 flex flex-col items-center">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <h2 className="text-2xl font-bold text-gray-900">OUR SERVICES</h2>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>

            {/* Service icons */}
            <div className="grid md:grid-cols-9 items-center" /*maviler varken burada da space-x-6 vardı*/> 
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <div className="text-center relative group">
                  <div className="w-24 h-24 bg-custom-gray rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-custom-yellow">
                    <span className="text-white group-hover:text-custom-gray">{service.icon}</span>
                  </div>
                  <p className="text-sm font-medium">{service.title}</p>
                </div>
                {index < services.length - 1 && (
                  <svg
                    key={`divider-${index}`}
                    className="w-6 h-6 text-custom-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 0 24" //0 0 24 24 mavileri geri getirmek için
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
  