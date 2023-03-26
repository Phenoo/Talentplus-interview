import Image from 'next/image'
import React from 'react'

import HeroImg from '../assets/hero.png'

import Green from '../assets/green.png'
import Zig from '../assets/zig.png'
import Yellow from '../assets/yellow.png'
import Figma from '../assets/figma.png'
import Vscode from '../assets/vscode.png'
import Light from '../assets/light.png'
import Vv from '../assets/vv.png'
import WordP from '../assets/wordpress.png'
import Line from '../assets/line.png'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='blue-bg hero'>
      <section>
        <div className="grid">
          <Image src={Green} alt='icon' width={20} height={20} className='green-icon none' />
          <Image src={Yellow} alt='icon' width={20} height={20} className='yellow-icon none' />
              
          <div className="zig">
                <Image src={Zig} alt='icon' className='zig-icon none' />
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: -100
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {duration: 0.4, delay: 0.4}
            }}
            className='hero-text'
          >


            <h4 className="headline">
              Grow your skills to advance your career path 
            </h4>
            <p>
            build your future with our quality education. the best and largest all-in-one online tutoring platform in the world
            </p>
            <div className="button-container">
              <button className="btn-secondary">
                get started now
                <span>
                  
                </span>
              </button>
              <button className="btn-primary">
                enroll now
              </button>



              <div className="line">
                <Image src={Line} alt='line' />
              </div>
            </div>
          </motion.div>


          <motion.div 
            initial={{
              opacity: 0,
              scale: 0
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {duration: 0.4, delay: 0.4}
            }}
            
            className='hero-img'>
            <Image src={HeroImg} alt='hero' />

            <div className="vscode">
              <Image src={Vscode} alt='icon' className='vscode-icon' />
            </div>
            <div className="word">
              <Image src={WordP} alt='icon'  className='word-icon' />
            </div>
            <div className="figma">
              <Image src={Figma} alt='icon'  className='figma-icon' />
            </div>

            <div className="light-icon">
              <Image src={Light} alt='icon'  className='' />
            </div>


            <div className="green-icon">
              <Image src={Green} alt='icon'  />
            </div>

            <div className="yell-icon">
              <Image src={Vv} alt='icon' className='' />
            </div>

          </motion.div>


        </div>
      </section>
    </div>
  )
}

export default Hero