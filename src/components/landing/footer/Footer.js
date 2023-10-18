import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
            <div className='footer-main'>
                <div className='footer-flick'>
                    <img src={process.env.PUBLIC_URL + '/images/flickFooter.svg'} alt='footer' className='footer-flick-img'/>
                    <p>One secure platform to pay, get paid, and manage all your finances better!</p>
                    <div className='footer-download'>
                        <a href='https://onelink.to/zzh6zq'>
                            <img src={process.env.PUBLIC_URL + "/images/googlePlay.svg"} alt='googlePlay' className='download-link'/>
                        </a>
                        <a href='https://onelink.to/zzh6zq'>
                            <img src={process.env.PUBLIC_URL + "/images/appStore.svg"} alt='googlePlay' className='download-link'/>
                        </a>
                    </div>
                </div>

                <div className='footer-widget'>
                    <h1 className='widget-title'>Company</h1>
                    <div className='footer-menu-link'>
                        <ul className="list-unstyled">
                            <li><a href="https://getflick.app/about">About us</a></li>
                            <li> <a href="https://getflick.app/careers">Careers</a></li>
                            <li><a href="https://getflick.app/pricing">Pricing</a></li>
                            <li><a href="https://getflick.app/faqs">FAQs</a></li>
                            <li><a href= "https://getflick.app/privacy-policy">Privacy policy</a></li>
                            <li><a href="https://getflick.app/terms-conditions">Terms & conditions</a></li>
                        </ul> 
                    </div>   
                </div>

                <div className='footer-widget'>
                    <h1 className='widget-title'>Developers</h1>
                    <div className='footer-menu-link'>
                        <ul className="list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "/404"}>Overview</Link></li>
                            <li> <Link to={process.env.PUBLIC_URL + "/404"}>API documentation</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/404"}>Support</Link></li>
                        </ul> 
                    </div>   
                </div>

                <div className='footer-widget'>
                    <h1 className='widget-title'>Address</h1>
                    <div className='address'>
                        <img src={process.env.PUBLIC_URL + "/images/NgFlag.svg"}  alt="flag"/>
                        <p>6th Floor, Landmark Towers, 5B Water Corporation Road, VI, Lagos</p>
                    </div>
                    <div className='address'>
                        <img src={process.env.PUBLIC_URL + "/images/UnFlag.svg"}  alt="flag"/>
                        <p>2261 Market Street #4664 San Francisco, CA 9114</p>
                    </div>
                </div>

                
            </div>

            {/*  */}

            <div className='footer-line'></div>

            <div className='footer-aside'>
                <h6 className='copywrite'>Copywriting © 2023 Flick. All rights reserved • A product of QRaba Inc.</h6>
                <div className='footer-action'>
                    <div className='foot-action-btn'>
                        <Link className='unsubscribe' to="/unsubscribe">Unsubscribe</Link>
                        <Link className='delete'  to="/delete-profile">Delete profile</Link> 
                    </div>
                    <ul className='list-unstyled footer-social-link'>
                        <li><a href="https://www.facebook.com/getflick.africa/"><img src={process.env.PUBLIC_URL + "images/fb.svg"} alt="fb"/></a></li>
                        <li><a href="https://twitter.com/getflick_africa/"><img src={process.env.PUBLIC_URL + "images/Instagram.svg"} alt="instagram"/></a></li>
                        <li><a href="https://www.linkedin.com/company/getflick/"><img src={process.env.PUBLIC_URL + "images/Linkdin.svg"} alt="fb"/></a></li>
                        <li><a href="https://www.instagram.com/getflick.africa/"><img src={process.env.PUBLIC_URL + "images/twitter.svg"} alt="fb"/></a></li>
                    </ul>            
                </div>
            </div>
        
    </div>
  )
}

export default Footer