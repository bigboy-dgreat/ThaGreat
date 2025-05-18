import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ParticlesBackground from './ParticlesBackground';

const Navbar = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const handleEmailClick = () => {
    setTriggerAnimation(true);
    setTimeout(() => setTriggerAnimation(false), 1000);
  };

  const linkClass = ({ isActive }) => 
    isActive
      ? 'bg-black text-white hover:bg-gray-700 p-2 rounded-md px-2 py-2'
      : 'text-white hover:bg-gray-700 hover:text-white p-2 rounded-md px-2 py-2';

  return (
    <nav className='relative sticky top-0 bg-black/90 border-b border-blue-950 z-50 h-20 overflow-hidden w-full'>
    <ParticlesBackground />
    <div className='relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='flex h-20 items-center justify-between'>
        {/* your nav content here */}
        <NavLink to='/' className='flex flex-shrink-0 items-center mr-4'>
              <span className='text-white text-2xl font-bold ml-2 absolute left-0 pr-6 flex'>
                ThaGreat II
              </span>
            </NavLink>
            <div className='flex space-x-4'>
              <HashLink smooth to="#" className='text-white hover:text-teal-400'>Home</HashLink>
              <HashLink smooth to="#project" className='text-white hover:text-teal-400'>Project</HashLink>
              <HashLink smooth to="#contact" className='text-white hover:text-teal-400' onClick={handleEmailClick}>
                Say Hello <i className="fa-solid fa-envelope"></i>
              </HashLink>
            </div>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;














{/* <div className='relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-between'>
            <NavLink to='/' className='flex flex-shrink-0 items-center mr-4'>
              <span className='text-white text-2xl font-bold ml-2'>
                ThaGreat II
              </span>
            </NavLink>
            <div className='flex space-x-4'>
              <HashLink smooth to="#" className='text-white hover:text-teal-400'>Home</HashLink>
              <HashLink smooth to="#project" className='text-white hover:text-teal-400'>Project</HashLink>
              <HashLink smooth to="#contact" className='text-white hover:text-teal-400' onClick={handleEmailClick}>
                Say Hello <i className="fa-solid fa-envelope"></i>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </nav> */}
