import React from 'react';
import '../style.css';


const services = [
  {
    title: (
      <span className="inter-font">AI & AI Entegrations</span>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--custom-gray)" viewBox="0 0 256 256"><path d="M192.5,171.47A88.34,88.34,0,0,0,224,101.93c-1-45.71-37.61-83.4-83.24-85.8A88,88,0,0,0,48,102L25.55,145.18c-.09.18-.18.36-.26.54a16,16,0,0,0,7.55,20.62l.25.11L56,176.94V208a16,16,0,0,0,16,16h48a8,8,0,0,0,0-16H72V171.81a8,8,0,0,0-4.67-7.28L40,152l23.07-44.34A7.9,7.9,0,0,0,64,104a72,72,0,0,1,56-70.21V49.38a24,24,0,1,0,16,0V32c1.3,0,2.6,0,3.9.1A72.26,72.26,0,0,1,203.84,80H184a8,8,0,0,0-6.15,2.88L152.34,113.5a24.06,24.06,0,1,0,12.28,10.25L187.75,96h19.79q.36,3.12.44,6.3a72.26,72.26,0,0,1-28.78,59.3,8,8,0,0,0-3.14,7.39l8,64a8,8,0,0,0,7.93,7,8.39,8.39,0,0,0,1-.06,8,8,0,0,0,6.95-8.93ZM128,80a8,8,0,1,1,8-8A8,8,0,0,1,128,80Zm16,64a8,8,0,1,1,8-8A8,8,0,0,1,144,144Z"></path></svg>
    ),
  },
  {
    title: (
      <span className="inter-font">Web Development</span>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--custom-gray)" viewBox="0 0 256 256"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path></svg>
    ),

  },
  {
    title: (
      <span className="inter-font">Mobile Apps</span>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--custom-gray)" viewBox="0 0 256 256"><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"></path></svg>
    ),
  },
  {
    title: (
      <span className="inter-font">Outsourcing</span>
    ),
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--custom-gray)" viewBox="0 0 256 256"><path d="M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm120-31V110.63a23.85,23.85,0,0,0-7-17L163.31,56H192a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31L189.66,105a8,8,0,0,1,2.34,5.66V161a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,200,208Z"></path></svg>

    ),
  },
  {
    title: (
      <span className="inter-font">Desktop Apps</span>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--custom-gray)" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path></svg>

    ),
  },
];
export default function Services() {
  return (
    <div id="services" className="flex justify-center items-center py-10 bg-white">
      <div className="w-3/4 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-xl font-semibold inter-font" style={{ color: 'var(--custom-gray)' }}>Our Services</h2>
          <h1 className="text-base font-normal inter-font" style={{ color: 'var(--light-gray)' }}>Tailored solutions to meet your specific needs.</h1>
        </div>

        {/* Service icons */}
        <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-y-8 ld:gap-y-0 sm:grid-cols-2 grid-cols-1 w-full">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="text-center flex flex-col justify-center items-center w-full">
                <div className="icon-container flex justify-center items-center w-full">
                  <svg className="circle-svg" viewBox="0 0 104 104">
                    <circle className="circle" cx="52" cy="52" r="50"></circle>
                  </svg>
                  <div className="icon-background flex justify-center items-center w-full">
                    <span className="text-custom-gray">{service.icon}</span>
                  </div>
                </div>
                <p className="text-sm font-medium mt-2">{service.title}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
  