import React from 'react'
import NameControl from '../components/common/NameControl'
import '../components/getStarted/GetStarted.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function GetStartedTest() {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state?.user)
    const handleKyc = ()=>{
        navigate('/complete-kyc')
    }

    const handleClose = ()=>{

    }
  return (
    <div className='main-inner ' style={{marginTop:`${!currentUser?.user?.isVerified ? "0px":""}`}}>
        {
            !currentUser?.user?.isVerified &&
            <div className='test_mode_warning'>
                <div className='warning_content'>
                    <img src='/images/warning.svg' alt='warning' />
                    <p className='warning_text'>You are currently on “Test Mode”. To get access to “Live Mode”, you need to complete your KYC process.<span onClick={handleKyc} className='complete_kyc_link'>Complete KYC</span> </p>
                </div>
                <img onClick={handleClose} src='/images/x-close.svg' alt='close'/>
            </div>
        }
        <NameControl 
        btn
        image
        name="You’re Getting Started"
        desc="Take a few minutes to explore Flick!"
        />

       <div className='section1'>
            <div className="section1_left">
                <h1 className='sec1_api'>One API powering all your <br/> innovations</h1>
                <p className='sec1_data'>Seamless end-to-end integration for identity, <br/> financial data and payments</p>
                <p className='sec1_explore'>
                Explore Sandbox
                <img style={{display:"inline",marginLeft:"5px",cursor:"pointer"}} src="/images/arrowUpward.svg" alt='arrow'/>
                </p>
            </div>
            <div className="section1_right">
                <img className='sideImga' src="/images/getStartedRight.svg" alt='start' />
            </div>
       </div>

       <div className='section2'>
            <div className='sec2_left'>
                <div className='sec2_left_content'>
                    <h3 className='sec2_news'>Our Latest Announcements and News</h3>
                    <p className='sec2_api'>Find relevant guides and resources to access and build with Flick's suite of APIs</p>
                    <p className='sec1_explore' style={{marginBottom:"21px"}}>
                    Show me
                    <img style={{display:"inline",marginLeft:"5px",cursor:"pointer"}} src="/images/arrowUpward.svg" alt='arrow'/>
                    </p>
                </div>
                <img src='/images/girlNews.svg' alt='side' />
            </div>

            <div className='sec2_right'>
                <img src="/images/roadmap.svg" alt='right' />
                <div className='sec2_content'>
                    <h1 className='sec2_resource'>Helpful Resources</h1>
                    <p className='sec2_p'>Find relevant guides and resources <br/> to access and build with Flick's suite of APIs</p>
                    <p className='sec1_explore' >
                    Show me
                    <img style={{display:"inline",marginLeft:"5px",cursor:"pointer"}} src="/images/arrowUpward.svg" alt='arrow'/>
                    </p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default GetStartedTest
