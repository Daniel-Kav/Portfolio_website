import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import {styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <p>{title}</p>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "" ,0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Highly skilled and results-driven software engineer with extensive 
            expertise in Python, JavaScript, Django, and React frameworks.Proven success in developing robust and scalable web applications, 
             leveraging comprehensive knowledge of backend and frontend technologies.
              Adept at translating complex requirements into efficient and effective solutions,
               with a strong focus on user experience and functionality. 
               Possessing a solid understanding of software development methodologies, 
               along with a track record of delivering innovative and high-quality software 
               products. Committed to continuous learning and staying abreast of emerging 
               technologies to drive continuous improvement in software development practices.


      </motion.p>
      <div className='mt-20 flex fles-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About