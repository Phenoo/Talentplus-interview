import { offerItems } from '@/data/data'
import Image from 'next/image'
import React from 'react'

import Purple from '../assets/purple.png'
import Gv from '../assets/gv.png'
import Yellzig from '../assets/yelzig.png'
import Point from '../assets/yellow.png'


import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
    }
  }
};

const itemvar = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.4, delay: 0.4 }
  }
};

const Offers = () => {
  return (
    <div className='offer'>
      <div className="purple">
        <Image src={Purple} alt='purple' />
      </div>

      <div className="gv">
        <Image src={Gv} alt='purple' />
      </div>

      <div className="yellzig">
        <Image src={Yellzig} alt='purple' />
      </div>

      <div className="yellowpoint">
        <Image src={Point} alt='purple' />
      </div>


      <section>
        <div className="grid">
          <motion.div 
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.3 }
            }}
            className='part-1'>
            <h4 className="headline">
            this is why we are best from others
            </h4>
            <br />
            <p>
              high-defination video is video of higher resolution and quality than standard definition. 
              while there’s no standard meaning for high definition, generally any standard video image
            </p>
            <br />
            <Image src='https://source.unsplash.com/6MePtA9EVDA' alt='offers'
              width={300} height={300} />
          </motion.div>

          <div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="offer-grid">
              {

                offerItems.map((item) => {
                  const {id, name, image, classx} = item;
                  return(
                      <motion.li key={id}
                      initial={{
                        y: 100,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.4, delay: 0.3}
                      }}
                      className='article'
                    >
                      <span className={classx}>
                        {image}
                      </span>
                      <h6>{name}</h6>
                      <p>
                        high-defination video is video of higher resolution and quality than standard definition.
                        high-defination video is video of higher resolution and quality than standard definition. 
                      </p>
                    </motion.li>
                  )
                
                  })
              }
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers