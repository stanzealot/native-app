import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SideBarMenu({item,isActive, onClick,activeItem, setActiveItem}) {
    const [subnav,setSubnav] = useState(false);
    // const showSubnav = ()=> setSubnav(!subnav);
    const navigate = useNavigate();
   const handleClick = (e) =>{
    e.preventDefault();
    navigate(item.path);
    onClick();
    if(item.subNav){
        if (activeItem === item.title) {
            // Close the subnav if it's already open
            setSubnav(false);
            setActiveItem(null);
          } else {
            // Open the subnav and set it as the active item
            setSubnav(true);
            setActiveItem(item.title);
          }
    }
   }

   const handleSubmenuClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent
  };

  return (
    <div className={`sidebar-menu ${subnav ?"": "hover-effect"} ${isActive && !subnav ? "menuactive" : ""}`} onClick={handleClick} >
        <Link  className='sidebar-menu-item'  >
            <div className='sidebar-menu-content'>
                {
                    !isActive ? <img src={process.env.PUBLIC_URL+ item.icon} alt='user' />:
                    <img src={process.env.PUBLIC_URL+ item.iconActive} alt='user' />
                }
                
                <h2 className={`sidebar-text ${isActive?"text-active":""}`}>{item.title}</h2>
            </div>
            {
               item.subNav &&  
               <img src={
                item.subNav && subnav
                ? process.env.PUBLIC_URL + "images/subNavDownArrow.svg"
                :item.subNav
                ? process.env.PUBLIC_URL + "images/subNavSideArrow.svg"
                :null
               }
               alt='arrow'
               />
            }
        </Link>
        {
            activeItem === item.title &&
            <div className='sidebar-submenu-container' onClick={handleSubmenuClick}>
                <img src={item.subIcon} alt="sub-Icon"/>
                <div className='sidebar-submenu-text'>

                {
                    subnav && item.subNav.map((item,index)=>(
                        <Link to={item.path} className='subtitle-text-container ' >
                            <p key={index} className='sidebar-subtitle'>
                                {item.subTitle}
                            </p>
                        </Link>
                    ))
                }

                </div>
            </div>
        } 
    </div>
  )
}

export default SideBarMenu
