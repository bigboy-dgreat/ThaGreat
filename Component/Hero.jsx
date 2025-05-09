import React from 'react'
import pexel from '../assets/pexels.webp'
import me from '../assets/mypp.jpeg'
import { Link } from 'react-router-dom'

const Hero = ( {titleLine1="Bringing Ideas to Life with Clean",
    titleLine2="& Interactive Web Experience",
     subtitle = 'Jinad Stefan (ThaGreat II), a front-end developer skilled in React, JavaScript, and modern UI framework. i craft fast, responsive, and user-friendly web applications.'}) => {
  return (
    <section
    className="relative bg-cover bg-center min-h-screen"
    style={{
      backgroundImage: `url(${pexel})`,
    }}
  >
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.837), rgba(60, 5, 5, 0.355)), url(${pexel})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
        
        {/* Profile Image */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-gray-700 mb-6 md:mb-0 md:mr-6">
          <img src={me} alt="Profile" className="w-full h-full object-cover shadow-lg" />
        </div>
  
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#D5FEEE] via-[#D3DADD] to-[#74A8FF] bg-clip-text text-transparent">
            {titleLine1}
            <br className="hidden sm:inline" />
            {titleLine2}
          </h1>
  
          <p className="mt-4 text-base sm:text-lg text-white max-w-lg mx-auto md:mx-0 px-2 sm:px-0">
            {subtitle}
          </p>
  
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to='https://jinadbstefan@gmail.com'  className="bg-gray-900 text-white w-full sm:w-[150px] rounded-md py-3 text-center transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] text-sm md:text-base">
              Let's Talk
            </Link>
            <Link to='https://github.com/bigboy-dgreat/ThaGreat' className="bg-gray-200 w-full sm:w-[150px] py-3 rounded-md text-center transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] flex items-center justify-center text-sm md:text-base">
              <i className="mr-2" /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hero;

{/* <button className='btn1'><a href='mailto:jinadbstefan@gmail.com'>Let's Talk</a></button>
<button className='btn2'><i class="bi bi-github"></i><a href='https://github.com/bigboy-dgreat/ThaGreat'>Github</a></button> */}
//     <section className="relative bg-cover bg-center h-screen"
//       style={{
//         backgroundImage: `url(${pexel})`, // Adjust this path
//       }}
//       >
//         <div className="relative bg-cover bg-center h-screen"
//   style={{
//     backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.837), rgba(60, 5, 5, 0.355)), url(${pexel})`,
//   }} 
//   >

//     {/* Profile Image */}
    

//     <div className='text-center md:text-sm flex p-4'>
//     <div className='w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-white mt-16 ml-9'>
//         <img src={me} alt='' className='w-40 h-40 rounded-full object-cover shadow-lg'/>

//     </div>
//         <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D5FEEE] via-[#D3DADD] to-[#74A8FF] bg-clip-text text-transparent mt-20 ml-2'>
//             {titleLine1} <br /> {titleLine2}
//         </h1>
        
//     </div>
//         <p className='text-mt-4 text-lg text-white ml-48 mt-'>
//             {subtitle}

//         </p>
//         <div className='flex ml-48 mt-10'>
//         <button className="bg-gray-900 text-white w-[150px] md:w-[140px] rounded-md py-[9px] 
//         transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] text-sm md:text-base"
//         > Lets Talk
  
// </button>
// <button className="ml-4 md:ml-4 bg-gray-200 w-[150px] md:w-[140px] py-[9px] rounded-md transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] flex items-center justify-center text-sm md:text-base">
//   <i className="mr-[10px]" /> GitHub
// </button>

//         </div>


//     </div>


         
//     </section>