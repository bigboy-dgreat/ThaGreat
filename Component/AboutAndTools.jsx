import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutAndTools = () => (
  <>
    {/* About Me */}
    <motion.section
      id="about"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto border-2 border-gray-300 rounded-lg text-center py-10 px-4 sm:px-6 mt-20"
    >
      <h2 className="text-white text-3xl font-semibold mb-6">About me</h2>
      <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
        As a front-end developer, I draw my inspiration from turning ideas into reality.
        I love to create great things and use efficient tools to make websites
        simple, responsive, and interactive with web animations.
        A responsive design makes my websites accessible to all users, regardless of their device.
      </p>
    </motion.section>

    {/* Stack & Tools */}
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=" p-4  mt-12 "
    >
      <h2 className="text-white text-2xl font-semibold">Stack & Tools</h2>
      <h4 className="text-gray-300 text-lg mt-2 mb-6">Check out what I have in my arsenal</h4>
      <div className="flex flex-wrap gap-1 text-black text-1xl">
        <p className='bg-white'><i className="bi bi-github"></i> Git & GitHub</p>
        <p className='bg-white'><i className="fa-brands fa-html5"></i> HTML</p>
        <p className='bg-white'><i className="fa-brands fa-react"></i> React</p>
        <p className='bg-white'><i className="fa-brands fa-bootstrap"></i> Bootstrap</p>
        <p className='bg-white'><i className="fa-brands fa-js"></i> JavaScript</p>
        <p className='bg-white'><i className="fa-brands fa-figma"></i> Figma</p>
        <p className='bg-white'><i className="fa-brands fa-visual-studio-code"></i> VS Code</p>
      </div>
    </motion.section>
  </>
);

export default AboutAndTools;
