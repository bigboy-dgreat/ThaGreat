import React from 'react';
import { motion } from 'framer-motion';
import Phase1 from './Phase1';
import omo from '../assets/omoh.png';
import jhave from '../assets/justHave.png';
import culture from '../assets/my life.png'
import zed from '../assets/zedx.png'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProjectCard = () => {
  return (
    <div className="bg-[#0f172a] py-10 px-4">
      {/* Animated Heading */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">
          Featured Projects
        </h2>
        <p id='project' className="text-lg mb-12 text-white">
          Here are some of my favorite projects that showcase my skills in front-end development:
        </p>
      </motion.div>

      {/* Project Cards */}
      <Phase1
        title="ZEDX"
        image={zed}
        tech="React, TailwindCSS"
        liveUrl="https://your-live-site.com"
        githubUrl="https://github.com/your-repo"
      />

      <Phase1
       title="Have Homes & Asset (not lunched yet)"
       image={jhave}
       tech="React, TailwindCSS"
       liveUrl="https://your-live-site.com"
       githubUrl="https://github.com/your-repo"
      
       />

      <Phase1
        title="React Job Application"
        image={omo}
        tech="React, TailwindCSS"
        status="Coming Soon"
      />

      <Phase1
        title="Ongoing project"
        image={culture}
        tech="React, TailwindCSS"
        status="Coming Soon"
      />
    </div>
  );
};

export default ProjectCard;







