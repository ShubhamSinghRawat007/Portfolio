import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constansts'
import {fadeIn , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { text } from 'framer-motion/client'
const ServideCard = ({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("right","spring",index * 0.05,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >
          <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText} >Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1) } className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' > 
      I'm a skilled software developer with Experience in web development , and expertise in framewoerks like react, Node.js and Three.js.
      Skilled in creating Responsive UI and integrating RESTful APIs for mobile-friendly, cross-browser
      compatible applications
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10 justify-around' >
      {services.map((services,index)=>(
        <ServideCard key={services.title} index={index} {...services}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")