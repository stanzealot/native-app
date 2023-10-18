import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Navbar = () => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state?.user);
    const [activeFilter, setActiveFilter] = useState("");

  const handleClick = (filter) => {
    setActiveFilter(filter);
  };
  const handleGetstarted = ()=>{
   
    if(!currentUser?.user) return toast.error("Please signIn to perform this action");  
    
    if(currentUser?.user) navigate('/getStarted')  
    
  }
    return (
        <nav className="mainmenu-nav">
            <div className="mainmenu">    
              <ul className='main_menu_nav'>
                <li>
                    <a 
                   href="https://getflick.app/pricing"
                    
                    >
                        Pricing
                    </a>
                </li>
                <li>
                    <a 
                    href="https://getflick.app/about"
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <Link 
                    to={process.env.PUBLIC_URL + "/pricing"}
                    onClick={() => handleClick("Pricing")}
                    className={activeFilter === "Pricing" ? "active" : ""}
                    >
                        API Documentation
                    </Link>
                </li>
                

              </ul>  
                
                <div className='menu-item-btns'>
                    {
                     !currentUser &&
                     <Link to="/login" className='nav-signIn'>Sign In</Link>
                    }
                    <Link onClick={handleGetstarted} to="/getStarted"   className='btn-landing'>Get started</Link>
                </div>
                
            </div>
            
        </nav>
        
    )
}

export default Navbar;