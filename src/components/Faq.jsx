import { faqItems } from '@/data/data'
import Image from 'next/image';
import React, { useState } from 'react'

import { motion } from 'framer-motion';

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

import Blue from  '../assets/bluepoint.png'
import Shape from '../assets/bow.png'
import Yellzig from '../assets/yelzig.png'

const Faq = () => {
  const [sindex, setSindex] = useState();

  const handleClick = (index)  => {
    setSindex(index);
    if(sindex === index){
      setSindex()
    }
  }
  return (
    <motion.div className='faq'

      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.4}
      }}
      >

      <div className="bluepoint">
        <Image src={Blue} alt='blue' />
      </div>

      <div className="yellzig">
        <Image src={Yellzig}alt='shape' />
      </div>

      {/* <div className="shape">
        <Image src={Shape}alt='shape' />
      </div> */}
      <div className="shape-2">
        <Image src={Shape}alt='shape' />
      </div>

      <section>
        <div className="center">
          <h4 className="headline">
          frequently asked questions
          </h4>
          <p>
            high-defination video is video of higher resolution and quality than standard definition.
            while there’s no standard meaning for high definition, generally any standard video image
          </p>
        </div>

        <div className="faq-section">
          {
            faqItems.map((item, index) => (
              <article key={index} className='question' onClick={() => handleClick(index)}>
                <div className="space-between"  onClick={() => handleClick(index)}>
                  <h4 className={`${sindex === index ? 'blue' : ''}`}>{item.question}</h4>
                  <div>
                    <button onClick={() => handleClick(index)}
                    >
                      {
                      sindex === index ? 
                        <AiOutlineMinus color='#054FB3' />
                      :
                      <AiOutlinePlus />
                      }
                    </button>
                  </div>

                </div>
                
                <div>
                  {
                      sindex === index &&
                      <motion.p
                        initial={{ height: 0 }}
                        animate={{
                          height: 70,
                          transition: { duration: 0.1 }
                        }}
                        exit={{
                          height: 0,
                          transition: {  duration: 0.1 }
                        }}
                      >
                        High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
                      </motion.p>
                    }
                </div>
              </article>
            ))
          }
        </div>
      </section>
    </motion.div>
  )
}

export default Faq