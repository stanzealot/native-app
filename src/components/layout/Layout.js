import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import SideBar from '../sidebar/SideBar'
import Nav from '../sidebar/Nav'
import { useSelector } from 'react-redux'
import Notification from '../sidebar/Notification'
import ProfileModal from '../sidebar/ProfileModal'


const Container = styled.div`
display:flex;
position:relative
background-color: #F6F7F9;

`
const Main = styled.div`
background-color: #F6F7F9;
margin: 0;
width:100%;

  
`

const Wrapper = styled.div`
  width:94%;
  margin:0 auto;
`

function Layout() {
 
  const [isNotification,setIsNotification] = useState(false);
  const [isProfile,setIsProfile] = useState(false);


  const toggleProfile = ()=>{
    setIsProfile(!isProfile);
  }
  return (
    <Container>

    <SideBar 
    name="Stanley Omeje"
    email="stanzealot@gmail.com"
    avatar={'/images/avatarimage.jpeg'}
    />
   
    <Main>
      <Nav
      name=""
      email=""
      avatar=""
      setIsNotification={setIsNotification}
      toggleProfile={toggleProfile}
      />
      <Wrapper>
        <Outlet /> 
      </Wrapper>
    </Main>
    {isProfile && <ProfileModal />}
    {isNotification && <Notification setIsNotification={setIsNotification} />}
  </Container>
  )
}

export default Layout
