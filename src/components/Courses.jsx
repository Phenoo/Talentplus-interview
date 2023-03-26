import { courseItems } from '@/data/data'
import Image from 'next/image'
import React from 'react'

import Crown from '../assets/crown.png'
import Rain from '../assets/pimple.png'
import Bow from '../assets/bow.png'
import Greenzig from '../assets/greezig.png'
import { motion } from "framer-motion";


const Courses = () => {
  return (
    <div className='courses'>
      <section>
        <div className="grid">
          <motion.div 
            initial={{
              x: -100,
              opacity: 0
            }}

            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.3}
            }}

            className='courses-text'>
            <div className="flex">
              <Image src={Crown} alt='vrown' className='crown' />  
              <h4 className="headline">
                high quality video, audio & live classes
              </h4>
            </div> 
            
            <p>
              high-defination video is video of higher resolution and quality than standard definition.
              while there’s no standard meaning for high definition, generally any standard video image
            </p>
            <div>
              <button className="btn-secondary">
                view courses
              </button>
            </div>
            <div className="wrap">

              {
                  courseItems.map((item) => (
                    <article key={item.id}>
                      <span className={item.class}>
                        {item.image}
                      </span>
                      <span>
                      {item.name}
                      </span>
                    </article>
                  ))
              }

            </div>
          </motion.div>

          <motion.div 
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration:  0.4, delay: 0.3}
            }}
            className='courses-image-section'>
            <div className="main-course-img">
              <Image src='https://source.unsplash.com/4-EeTnaC1S4' alt='course' 
                width={300} height={500} className='course-img'
                 />
                 <div className="overlay">
                  <Image src='https://source.unsplash.com/VtKoSy_XzNU' width={150} height={200} alt='coursez' />
                 </div>
            </div>

            <div className="rain">
              <Image src={Rain} alt='rain' />
            </div>

          </motion.div>

          <div className="bow">
            <Image src={Bow} alt='Bow' />
          </div>

          <div className="greenzig">
            <Image src={Greenzig} alt='Bow' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses