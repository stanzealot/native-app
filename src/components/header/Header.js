
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Navbar';
import StickyHeader from './StickyHeader';
import MobileMenu from './MobileMenu';
import './Header.scss'

function Header() {
    const sticky = StickyHeader(100); 

    const MobileMenuHandler = () => {
        document.querySelector('.mobilemenu-popup').classList.toggle("show");
        document.querySelector('body').classList.toggle("mobilemenu-show");

        var elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');
    
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.axil-submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
    }
    return (
        <>
            <header className="header axil-header header-style-1">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Link to={process.env.PUBLIC_URL + "/"}>
                                    <img className="light-version-logo" src={process.env.PUBLIC_URL + "/images/landingLogo.svg"} alt="logo" />
                                    <img className="sticky-logo" src={process.env.PUBLIC_URL +  "/images/landingLogo.svg"} alt="logo" />
                                </Link>
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} /> */}
            <MobileMenu MobileHandler={MobileMenuHandler}/>
        </>
    )
}

export default Header