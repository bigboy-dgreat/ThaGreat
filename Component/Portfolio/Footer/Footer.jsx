import React, { useEffect, useRef, useState } from 'react'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = ({ triggerAnimation }) => {
  const envelopeRef = useRef(null);
  const [animate, setAnimate] = useState(false)

  const handleEmailClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 3000);
  }

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 3000);
      }
    }
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);











  return (
    <div className='footer'>
      <div className="container-f">
        <div className="row-f">
          <div className="foot1">
          <h1>Let's Build Something Great!</h1>
          <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>

          <div id='contact' className="foot2">
          <HashLink 
          smooth to="#contact" 
          className={animate ? 'pop-animation' : '' }
          onClick={handleEmailClick}
          >
        <span></span>
        <span></span> 
        Say Hello
        <i
          className={`fa-solid fa-envelope ${animate ? 'pop-animation' : ''}`}
          ref={envelopeRef}
        ></i>
      </HashLink>

         </div>

          </div>

          <div className="foot3">
          <h3>See My Work</h3>
          <ul>  
         <Link to='https://zedxoriginal.com/'>Zedx</Link>
        <Link to='/'>Have</Link>
        <Link to='/'>React Job</Link>
         <Link to='http://localhost:5173/'>Culture & Style</Link>
       </ul>
          </div>
          <section id='contact' className="foot4">
          <h3>Follow Me</h3>
          <ul>
          <Link to='/'><i class="fa-brands fa-instagram"></i></Link>
          <Link to='https://x.com/JinadBstefan'><i class="fa-brands fa-x-twitter"></i></Link>
          <Link to='https://www.linkedin.com/in/thagreat/'><i class="fa-brands fa-linkedin-in"></i></Link>
          <Link to='https://github.com/bigboy-dgreat/ThaGreat'><i class="fa-brands fa-github"></i></Link>
          </ul>
          </section>
        </div>
        <hr />
        <p className='copy'>ThaGreat &copy; 2025</p>
      </div>

        </div>

  )
}

export default Footer

{/* <span>{formatTime()}</span> */}













{/* <a href= 'mailto:jinadbstefan@gmail.com'><span></span><span></span> Say Hello <i class="fa-solid fa-envelope" ref={envelopeRef}></i></a> */}

//  <div className='footer'>
// <div className="foot1">
//     <h1>Let's Build Something Great!</h1>
//     <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
// </div>

// <div className="foot2">
//    <a href=''><span></span><span></span> Say Hello <i class="fa-solid fa-envelope"></i></a>

// </div>

// <div className="foot3">
//   <h3>See Work</h3>
//   <ul>
//     <a href=''>Coupons</a>
//     <a href=''>Blog Post</a>
//     <a href=''>Return Policy</a>
//     <a href=''>Join Affiliate</a>
//   </ul>
// </div>

// <div className="foot4">
//   <h3>Follow Me</h3>
//   <ul>
//     <a href=''><i class="fa-brands fa-instagram"></i></a>
//     <a href=''><i class="fa-brands fa-x-twitter"></i></a>
//     <a href=''><i class="fa-brands fa-facebook"></i></a>
//     <a href=''><i class="fa-brands fa-whatsapp"></i></a>
//   </ul>
// </div>
// <br />
// <br />

// <hr />
// <p className='copy'>&copy; 2025- ThaGreat</p>
// <br />


// </div> 