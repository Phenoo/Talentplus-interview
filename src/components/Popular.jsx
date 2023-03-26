import { popularItems } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import {FaStar, FaBookOpen} from 'react-icons/fa'
import { MdOutlineSchedule  } from 'react-icons/md'
import Point from '../assets/point.png'

import { motion } from 'framer-motion'


const Popular = () => {
  return (
    <motion.div className='popular'
      initial={{
        opacity: 0,
        y: 100
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4}
      }}
    >

      <div className="point">
        <Image src={Point} alt='points' />
      </div>


      <section>
        <div className="center">
          <h4 className="headline">
            browse our popular courses
          </h4>
          <p>
            high-defination video is video of higher resolution and quality than standard definition. 
            while there’s no standard meaning for high definition, generally any standard video image
          </p>
        </div>
        <br />
        <div className="center">
          <div className="button-container">
            <button className='btn-primary'>All Categories</button>
            <button>Design</button>
            <button>Development</button>
            <button>Marketing</button>
          </div>
        </div>

        <div className="popular-container">
          {
            popularItems.map((item, index) => (
              <article className="card" key={index}>
                <div>
                  <Image src={`https://source.unsplash.com/${item.image}`} 
                    alt={item.name} width={250} height={300}
                    />
                </div>

                <div>
                  <div className="space-between">
                    <span className="tag">{item.tag}</span>  
                    <span className='flex'>
                      <p>4.7k 
                      <FaStar />
                      </p>
                      <p>(17.k)</p>
                    </span>
                  </div>     
                  <h4 className="tophead">
                    {item.name}
                    </h4>  
                  <div className="space-between">
                    <div className='flex'>
                        <span>
                          <MdOutlineSchedule />
                        </span>
                        <p>
                          23hrs 50mins
                        </p>
                      </div>  

                    <div className='flex'>
                      <span>
                        <FaBookOpen />
                      </span>
                      <p>
                      15 lessons
                      </p>
                    </div>  
                  </div>    
                  <div className="space-between">
                    <div className='flex'>
                        <span>
                          <Image src={item.imagex} alt={item.name} />
                        </span>
                        <h6 className='tutor'>
                          {item.tutor}
                        </h6>
                      </div>  
                      <div>
                        <h5 className="price blue">
                          ${item.price}.00
                        </h5>
                      </div>
                   
                  </div> 

                </div>

              </article>
            ))
          }
        </div>

        <div className="center">
          <br />
          <br />
          <button className="btn-secondary">
            explore all courses
          </button>
        </div>
      </section>
    </motion.div>
  )
}

export default Popular