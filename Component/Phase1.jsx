import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Phase1 = ({ title, image, tech, liveUrl, githubUrl, status = 'Live' }) => {
  return (
    <div className="p-6 sm:p-10">
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center text-center px-4"
      >
        <div className="relative group w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
          {image && (
            <a href={liveUrl || '#'} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`${title} preview`}
                className="transition-transform duration-500 group-hover:scale-105 w-full max-w-md lg:max-w-full object-cover"
              />
            </a>
          )}
        </div>
        <h3 className="text-2xl text-white font-semibold mt-4">{title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{tech}</p>
        <div className="text-white text-sm space-x-4 mt-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              {status} <i className="bi bi-arrow-up-right"></i>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              GitHub <i className="bi bi-arrow-up-right"></i>
            </a>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Phase1;






































































// import React from 'react';
// import zed from '../assets/zedx.png'

// const Phase1 = ({ title, image, tech, liveUrl, githubUrl, status = 'Live' }) => {
//   return (
//     <div
//       className="p-[100px] flex flex-wrap"
//       style={{
//         backgroundColor: '#397093',
//         backgroundImage: `
//           linear-gradient(90deg, transparent 9px, #04090a5b 1px, #2083946b 2px, transparent 11px),
//           linear-gradient(#052f2d11 0.1rem, transparent -10em)
//         `,
//         backgroundSize: '20% 15em',
//       }}
//     >
//       <section className="flex flex-col items-center justify-center text-center px-4 py-12">
//         <div className="relative group w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
//           {image && (
//             <a href={liveUrl || '#'} target="_blank" rel="noopener noreferrer">
//               <img
//                 src={zed}
//                 alt={`${title} preview`}
//                 className="transition-transform duration-500 ease-in-out group-hover:scale-105 w-full sm:w-80 md:w-96 lg:w-full h-auto object-cover"
//               />
//             </a>
//           )}
//         </div>

//         <h3 className="text-2xl text-white font-semibold mt-4">{title}</h3>

//         <div className="mt-2">
//           <p className="text-gray-300 mb-2 text-sm">{tech}</p>
//           <div className="text-white text-sm space-x-4">
//             {liveUrl ? (
//               <a
//                 href={liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-teal-400 transition"
//               >
//                 {status} <i className="bi bi-arrow-up-right"></i>
//               </a>
//             ) : (
//               <span className="text-gray-400">{status}</span>
//             )}

//             {githubUrl && (
//               <a
//                 href={githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-teal-400 transition"
//               >
//                 GitHub <i className="bi bi-arrow-up-right"></i>
//               </a>
//             )}
//           </div>
//         </div>
//       </section>


//       <div className="row" >
//               <section id='about' className='aboutme flex flex-col'>
//                   <h2>About me</h2>
//                   <p className='text-white text-2xl text-center justify-center py-4 px-2'>As a front-end developer, i draw my inspiration from <br />turning ideas into reality.
//                       i love to create great things, and <br /> i take my time and use the tools that are efficient to make <br /> websites 
//                       simple, responsive and more interactive with web animations. <br /> A responsive design makes my website accessible to all
//                       users, regardless of their device.
//                  </p>
  
//              </section>
  
//      </div>
       
         
      
//           </div>
//          <div className='stack'>
//       <h2>Stack & Tools</h2>
//       <h4>Check out what i have in my arsenal</h4>
//       <div className="arsna">
//       <p><i class="bi bi-github"></i> Git & GitHub</p> &nbsp;
//       <p><i class="fa-brands fa-html5"></i> HTML</p> &nbsp;
//       <p><i class="fa-brands fa-react"></i> React</p> &nbsp;
//       <p><i class="fa-brands fa-bootstrap"></i> Bootstrap</p> &nbsp;
//      <p><i class="fa-brands fa-js"></i> JavaScript</p> &nbsp;
//       <p><i class="fa-brands fa-figma"></i> Figma</p> &nbsp;
//       <p><i class="fa-brands fa-visual-studio-code"> Vs Code</i></p>
  
  
//       </div>
//           </div> 
         
          
//    </div>

     
//    </div>
   


    
//   );
// };

// export default Phase1;
