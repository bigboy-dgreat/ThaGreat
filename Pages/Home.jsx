import React from 'react';
import Footer from '../Component/Portfolio/Footer/Footer';
import Navbar from '../Component/Navbar';
import Hero from '../Component/Hero';
import ProjectCard from '../Component/ProjectCard';
import About from '../Component/About';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
    
        <ProjectCard />
      
      <About />
      <Footer />
    </>
  );
};

export default Home;

