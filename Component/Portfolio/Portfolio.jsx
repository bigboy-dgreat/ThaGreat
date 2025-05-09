import React, { useState } from 'react'
import './Portfolio.css'
import me from '../../assets/mypp.jpeg'
import { HashLink } from 'react-router-hash-link';





const Portfolio = () => {
const [triggerAnimation, setTriggerAnimation] = useState(false);

const handleEmailClick= () => {
    setTriggerAnimation(true); 
    setTimeout(() => setTriggerAnimation(flase), 1000)
}

  return (
    <div className='header'>
        <div className="container">
            <div className="navbar justify-between">
                <div className="logo">
                    <h2>ThaGreat ii</h2>
                </div>
                <nav>
                <HashLink smooth to="/">Home</HashLink>
                <HashLink smooth to="#about">About</HashLink>
                <HashLink smooth to="#project">Project</HashLink>
                <HashLink smooth to="#contact" onClick={handleEmailClick}>
  <span></span><span></span> Say Hello 
  <i className="fa-solid fa-envelope"></i>
</HashLink>
                </nav>
                <button>Let's Talk</button>
            </div>

            <div className="box">
                <div className="col1 flex m-1;">
                    <img src={me} />
                    <h1>
                        Bringing Ideas to Life with Clean <br /> & Interactive Web Experience
                    </h1>

                </div>
                    <div className="icon">
                    <p> i'm Jinad Stefan (ThaGreat ii), a front-end developer skilled in React, JavaScript, and modern UI framework. <br />
                    i craft fast, responsive, and user-friendly web applications.</p>
                    <button className='btn1'><a href='mailto:jinadbstefan@gmail.com'>Let's Talk</a></button>
                    <button className='btn2'><i class="bi bi-github"></i><a href='https://github.com/bigboy-dgreat/ThaGreat'>Github</a></button>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio;
