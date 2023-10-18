import React, { useState } from 'react'
import SideBarData  from './SideBarData.json'
import SidebarSubMenu from './SideBarMenu';
import { useDispatch } from 'react-redux';
import './Sidebar.scss'
import { logout } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
function SideBar({avatar,name,email}) {
  const allSideBarData = SideBarData;
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubMenuClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLogOut = () =>{
    dispatch(logout())
    navigate('/')
  }
  const navigateHome = ()=>{
    navigate('/')
  }
  return (
    <div className='sideBar'>
      <div className='sideBarWrapper'>
        <div className='sidebar-menu-wrapper'>
          <img onClick={navigateHome} className='sidebar-logo' src={process.env.PUBLIC_URL+"/images/logoSidbar.svg"} alt="nav" />
          <div className='sidebar-content-container'>
              <h1 className='main-menu-text'>MAIN MENU</h1> 
              {
                  allSideBarData.map((item,index)=>(
                      <SidebarSubMenu 
                      item ={item}
                      key={index}
                      isActive={index === activeIndex}
                      onClick={() => handleSubMenuClick(index)}
                      activeItem={activeItem} 
                      setActiveItem={setActiveItem} 
                      />
                  ))
              }
          </div>
        </div>
        {/* profile sidebar */}
        <div className='sidebar-profile'>

        <div className='sidbar-line'></div>
        <div className='nav-profile'>
            <div className='nav-profile-avatar'>
                <img className='nav-profile-avatar-img' src={avatar} alt=""/>
                <img className='nav-profile-online-indicator' src={process.env.PUBLIC_URL+"/images/avataOnlineIndicator.svg"} alt="avater" />
            </div>

            <div className='nav-profile-content'>
                <h1 className='nav-heading'>{name}</h1>
                <p className='nav-email'>{email}</p>
            </div>
            <img onClick={handleLogOut} className='sidebar-avater' src={process.env.PUBLIC_URL+"/images/logOutProfile.svg"} alt="arrow"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar 
