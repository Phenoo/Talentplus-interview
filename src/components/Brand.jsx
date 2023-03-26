import React from 'react'
import Monday from './icons/Monday'
import Stripe from './icons/Stripe'
import Zoom from './icons/Zoom'
import Dropbox from './icons/Dropbox'
import Slack from './icons/Slack'

const Brand = () => {
  return (
    <div className='brand'>
       <section>
        <section className='brand-section'> 
            <Zoom />
            <Stripe />
            <Monday />
            <Slack />
            <Dropbox />
        </section>
       </section>
    </div>
  )
}

export default Brand