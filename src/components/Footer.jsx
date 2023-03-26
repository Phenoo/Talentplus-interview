import React from 'react'
import Logo from './Logo'

import { FaFacebook, FaTwitter, FaYoutube, FaDiscord} from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
        <section>
            <div className="four-section">
                <div className="foot foot-logo">
                    <Logo />
                    <br />
                    <p>
                    reach out to us on any of our social media networks
                    </p>
                    <div className="button-container">
                        <span>
                            <FaFacebook />
                        </span>
                        <span>
                            <FaTwitter />
                        </span>
                        <span>
                            <FaYoutube />
                        </span>
                        <span>
                            <AiOutlineInstagram />
                        </span>
                        <span>
                            <FaDiscord />
                        </span>
                    </div>
                </div>

                <div className="foot links">
                    <h4 className="tophead">
                        useful links
                    </h4>
                    <br />
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Courses</li>
                        <li>Testimonials</li>
                        <li>community</li>
                    </ul>
                </div>

                <div className="foot links">
                    <h4 className="tophead">
                        community
                    </h4>
                    <br />
                    <ul>
                        <li>help centers</li>
                        <li>partners</li>
                        <li>suggestion</li>
                        <li>blog</li>
                        <li>newsletter</li>
                    </ul>
                </div>

                <div className="foot">
                    <h4 className="tophead">
                        subscribe
                    </h4>
                    <br />
                    <div className="form-input">
                        <input type="text" placeholder='nft123@gmail.com' />
                        <button className="btn-secondary">
                            send message
                        </button>
                    </div>
                </div>


            </div>
        </section>
    </footer>
  )
}

export default Footer