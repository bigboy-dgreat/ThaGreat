import React from 'react'
import './Section.css'
import omo from '../../assets/omoh.png'
import jhave from '../../assets/justHave.png'
import { Link } from 'react-router-dom'






const Section1 = () => {
  return (
    <div
  className="p-[100px] flex flex-wrap"
  style={{
    backgroundColor: '#397093',
    backgroundImage: `
      linear-gradient(90deg, transparent 9px, #04090a5b 1px, #2083946b 2px, transparent 11px),
      linear-gradient(#052f2d11 0.1rem, transparent -10em)
    `,
    backgroundSize: '20% 15em',
  }}
>
  {/* Content goes here */}
  // <div className='container1'>
  //     <div className="box1">
  
  //             <h2 className='text-4xl font-bold mb-4 text-white'>Featured Projects</h2>
  //             <p className='text-lg mb-8 text-white'>Here are some of my favorite projects that showcase my skills in front-end development:</p>
     
  //         <section id='project' className="flex flex-col items-center justify-center text-center px-4 py-1" >
  //             <div className="small-container">
  //                 <Link
                  to='http://localhost:3000/'>
                  <img src={omo} alt='http://localhost:3000/' className='w-full max-w-4xl h-full rounded-lg shadow-lg mb-6' />
  
  //                 </Link>
  
                  
  
  //             </div>
  //             <h3 className='text-2xl text-white font-semibold mt-3'>React-Jobs application  Website</h3>
  //             <div className='live' >       
  
  //             <p className='text-black mb-4'>React, TailwindCSS</p>
  //             <span>Live <i class="bi bi-arrow-up-right"> &nbsp; &nbsp; &nbsp;</i> GitHub <i class="bi bi-arrow-up-right"></i></span>
  //             </div>
            
  
  //     </section>
  
  //         <section className="flex flex-col items-center justify-center text-center px-4 py-12">
             <div className="small-container">
                 <Link
                   to=''>
                     <img src={jhave} alt='' className='h-full w-full max-w-4xl rounded-lg shadow-lg mb-6'/>
                </Link>
                  
  
             </div>
             <h3 className='text-2xl text-white font-semibold mt-3'>Have Homes Website (ongoing project)</h3>
              <div className="live">
  
             <p className='text-black mb-4'>React, TailwindCSS</p>
              <span>Live <i class="bi bi-arrow-up-right"> &nbsp; &nbsp; &nbsp;</i> GitHub <i class="bi bi-arrow-up-right"></i></span>
              </div>
  
     </section>
  
         <section className="flex flex-col items-center justify-center text-center px-4 py-12" >
              <div className="small-container">
                  
  
             </div>
              <h3 className='text-2xl text-white font-semibold mt-3'>Coming Soon</h3>
              <div className="live">
  
              <p className='text-black mb-4'>React, TailwindCSS</p>
             <span>Live <i class="bi bi-arrow-up-right"> &nbsp; &nbsp; &nbsp;</i> GitHub <i class="bi bi-arrow-up-right"></i></span>
             </div>
  
      </section>
  
          <div className="row" >
              <section id='about' className='aboutme flex flex-col'>
                  <h2>About me</h2>
                  <p className='text-white text-2xl text-center justify-center py-4 px-2'>As a front-end developer, i draw my inspiration from <br />turning ideas into reality.
                      i love to create great things, and <br /> i take my time and use the tools that are efficient to make <br /> websites 
                      simple, responsive and more interactive with web animations. <br /> A responsive design makes my website accessible to all
                      users, regardless of their device.
                 </p>
  
             </section>
  
     </div>
       
         
      
          </div>
         <div className='stack'>
      <h2>Stack & Tools</h2>
      <h4>Check out what i have in my arsenal</h4>
      <div className="arsna">
      <p><i class="bi bi-github"></i> Git & GitHub</p> &nbsp;
      <p><i class="fa-brands fa-html5"></i> HTML</p> &nbsp;
      <p><i class="fa-brands fa-react"></i> React</p> &nbsp;
      <p><i class="fa-brands fa-bootstrap"></i> Bootstrap</p> &nbsp;
     <p><i class="fa-brands fa-js"></i> JavaScript</p> &nbsp;
      <p><i class="fa-brands fa-figma"></i> Figma</p> &nbsp;
      <p><i class="fa-brands fa-visual-studio-code"> Vs Code</i></p>
  
  
      </div>
          </div> 
         
          
   </div>
</div>
  )
}

export default Section1