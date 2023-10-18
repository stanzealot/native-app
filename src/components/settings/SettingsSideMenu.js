// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Settings.scss'

// function SettingsSideMenu({ menu, setSelectedMenuItem }) {
//   const [isMenuClicked, setMenuClicked] = useState(false);

//   const handleClick = () => {
//     setMenuClicked(true);
//     setSelectedMenuItem(menu.title);
//   };

//   return (
//     <div className={`sett-side-menu ${isMenuClicked ? 'clicked' : 'hover-eff'}`}>
//       <Link to="" className='side-menu' onClick={handleClick}>
//         <div className='side-menu-content'>
//           <img src={process.env.PUBLIC_URL + menu.icon} alt='ic' />
//           <h2 className={isMenuClicked ? 'side-menu-text-black' : 'side-menu-text'}>
//             {menu.title}
//           </h2>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default SettingsSideMenu;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.scss'

function SettingsSideMenu({ menu, selectedMenuItem, setSelectedMenuItem }) {
  const [isMenuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked(true);
    setSelectedMenuItem(menu.title);
  };

  return (
    <div className={`sett-side-menu ${selectedMenuItem === menu.title ? 'clicked' : 'hover-eff'}`}>
      <Link to="" className={`side-menu ${isMenuClicked ? 'side-menu-clicked' : ''}`} onClick={handleClick}>
        <div className='side-menu-content'>
          <img src={process.env.PUBLIC_URL + menu.icon} alt='ic' />
          <h2 className={selectedMenuItem === menu.title ? 'side-menu-text-black' : 'side-menu-text'}>
            {menu.title}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default SettingsSideMenu;
