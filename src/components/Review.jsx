import React from 'react'


import { Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";
import { swiperItems } from '@/data/data';
import Image from 'next/image';

import { motion } from 'framer-motion';

const Review = () => {
  return (
    <motion.div className='review'
      initial={{
        opacity: 0,
        x: 100
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.4}
      }}
    >
      <section>
        <div 
          className="center">
          <h4 className="headline">
            what our clients are saying
          </h4>
          <p>
            high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
          </p>
        </div>
      </section>


      <div className="review-swiper">

        <Swiper
            slidesPerView={"auto"}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >

            {
              swiperItems.map((item, index) => (
                <SwiperSlide key={index} className='swiperslide'>
                  <div className="review-card" key={item.id}>
                    <p>
                    high-defination video is video of higher resolution and quality than standard definition.
                     high-defination video is video of higher resolution and quality than standard definition. 
                     hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. 
                    the best and largest all-in-one online tutoring platform in the world
                    </p>

                    <div className='flex'>
                      <span>
                        <Image src={item.imagex} alt='review' />
                      </span>
                      <span>
                        <span className='tutor'>
                          {item.tutor}
                        </span>
                        <p>
                          Product Designer
                        </p>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }    

          </Swiper>

      </div>
    </motion.div>
  )
}

export default Review