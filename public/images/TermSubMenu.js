import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function TermSubMenu({
    item,
    terms,
    privacy,
    title,
    subNavLink,
    path,
    Subtitle1,
    Subtitle2,
    Subtitle3,
    Subtitle4,
    subPath1,
    subPath2,
    subPath3,
    subPath4,
  
}) {
    const [subnav,setSubnav] = useState(false);
    const showSubnav = ()=> setSubnav(!subnav);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className='terms-submenu'>
        <Link to={ item.path} onClick={item.subNav && showSubnav} className='terms-sidemenu-link'>
            <h6>{item.title}</h6>
        

            {
                item.subNav &&
                <img src=
                    {
                        item.subNav && subnav 
                        ? process.env.PUBLIC_URL + "images/downArrow.svg"
                        :item.subNav
                        ? process.env.PUBLIC_URL + "images/leftArrow.svg"
                        :null
                        
                    }

                    alt='arrow'
                />
            }
        </Link> 


         {
            subnav &&

            <div className='submenu-text'>

            {
                subnav && item.subNav.map((item,index)=>(
                    <a  href={item.path} key={index}>
                        {item.title}
                    </a>
                ))
            }

            </div>
        }



        {/* <Link to={path} onClick={subNavLink && showSubnav} className='terms-sidemenu-link'>
            <h6>{title}</h6>
            
            {
                subNavLink &&
                <img src=
                    {
                        subNavLink && subnav 
                        ? process.env.PUBLIC_URL + "images/downArrow.svg"
                        :subNavLink
                        ? process.env.PUBLIC_URL + "images/leftArrow.svg"
                        :null
                        
                    }

                    alt='arrow'
                />
            }
        </Link>

        {
            subnav && 
            <div className='submenu-text'>
                    <Link  to={subPath1}>
                        {Subtitle1}
                    </Link>
                    <Link  to={subPath2}>
                        {Subtitle2}
                    </Link>
                    <Link  to={subPath3}>
                        {Subtitle3}
                    </Link>
                    {
                        Subtitle4 &&
                        <Link  to={subPath4}>
                            {Subtitle4}
                        </Link>
                    }

            </div>
                
        } */}

    </div>
  )
}

export default TermSubMenu
