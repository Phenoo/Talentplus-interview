import React from 'react'
import Logo from './Logo'
import { FaBars } from 'react-icons/fa'
import AnimatedNavigation from './Animate'

const Navbar = () => {
  return (
    <nav className='blue-bg'>
        <section>
            <header>
                <Logo />
                <div className='menu-list'>
                    <ul>
                        <li className='active'>Home</li>
                        <li>About us</li>
                        <li>Courses</li>
                        <li>Testimonials</li>
                        <li>community</li>
                    </ul>
                    <button className='btn-primary'>
                        Enroll now
                    </button>
                </div>
                <AnimatedNavigation />
            </header>
        </section>
    </nav>
  )
}

export default Navbar