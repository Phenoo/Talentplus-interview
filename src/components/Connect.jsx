import React from 'react'
import Map from '../assets/map.png'
import Image from 'next/image'


import Img from '../assets/Frame 165.png'
import Img1 from '../assets/Frame 165 (1).png'
import Img2 from '../assets/Frame 165 (2).png'
import Img3 from '../assets/Frame 165 (3).png'
import Img4 from '../assets/Frame 165 (4).png'
import Img5 from '../assets/Frame 165 (5).png'

import { motion } from 'framer-motion'

const Connect = () => {
  return (
    <div className='blue-bg connect'>
      <section>
        <div className="center">
          <motion.div
            initial={{
              x: 100, 
              opacity: 0, 
            }}
            whileInView={{
              opacity: 1, 
              x: 0,
              transition: { duration: 0.4}
            }}        
          >
            <h5 className='upper'>
            join our community
            </h5>
            <h4 className="headline">
              Are you  ready to connect with the future talent of the tech world
            </h4>
            <p>
            meet up with other techstars and grow together
            </p>

          </motion.div>

          <motion.div
            initial={{
              scale: 0, 
              opacity: 0, 
            }}
            whileInView={{
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.4}
            }}
            className='connect-image'>
            <Image src={Map} alt='map' />


              <div className="item-1">
                <Image src={Img} alt='com' />
              </div>

              <div className="item-2">
                <Image src={Img1} alt='com' />
              </div>

              <div className="item-3">
                <Image src={Img3} alt='com' />
              </div>

              <div className="item-4">
                <Image src={Img4} alt='com' />
              </div>

              <div className="item-5">
                <Image src={Img5} alt='com' />
              </div>
              <div className="item-6">
                <Image src={Img} alt='com' />
              </div>
              <div className="item-7">
                <Image src={Img1} alt='com' />
              </div>

              <div className="item-8">
                <Image src={Img2} alt='com' />
              </div>
              <div className="item-9">
                <Image src={Img3} alt='com' />
              </div>
              <div className="item-10">
                <Image src={Img4} alt='com' />
              </div>

          </motion.div>

          <br />

          <button className="btn-primary">
            join our community
          </button>
        </div>
      </section>
    </div>
  )
}

export default Connect