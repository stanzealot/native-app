import React from 'react'
import { logout } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProfileModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () =>{
    dispatch(logout())
    navigate('/')
  }
  return (
    <div className='profile-modal'>
      <div className='profile-modal-wrapper'>
        <div className='profile_item' onClick={handleLogOut}>
            <img src="/images/logoOutProfile.svg" alt="logout"/>
            <p className='logout_profile_text'>Log out</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
