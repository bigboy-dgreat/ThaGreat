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

          <section id='contact' className="foot4">

 <a
  href="#contact"
  className={animate ? 'pop-animation' : ''}
  onClick={(e) => {
    e.preventDefault();

    // Scroll to contact section
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Trigger mail client after delay
    setTimeout(() => {
      window.location.href = "mailto:Jinadbstefan@gmail.com";
    }, 600); // Slight delay to allow scroll animation
  }}
>
  <span></span>
  <span></span>
  Say Hello
  <i
    className={`fa-solid fa-envelope ${animate ? 'pop-animation' : ''}`}
    ref={envelopeRef}
  ></i>
</a>




         </section>

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