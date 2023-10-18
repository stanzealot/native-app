import React from 'react'
import styled from 'styled-components'
import Active from './Active'


const DetailsContainer = styled.div`
width:100%;
margin-top:32px;
border-radius: 12px;
background: var(--base-white, #FFF);
padding-top:20px;
padding-bottom:20px;
padding-left:24px;
padding-right:24px;
.detail-text{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    detail-h{
        color: var(--gray-900, #101828);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; 
    }
}
.line-acrross{
    background:#EAECF0;
    width:100%;
    height:2px;
    margin-top:20px;
    margin-bottom:24px;
}
.detail-view{
    margin-top:24px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .detail-view-text{
        display:flex;
        flex-direction:column;
        gap:5px;
      .datial-p{
        color: var(--gray-400, #98A2B3);
        font-family: Circular Std;
        font-size: 10px;
        font-style: normal;
        font-weight: 450;
        line-height: normal;
      }
      .detail-h{
        color: var(--flick-secondary-5, #151F32);
        font-family: Circular Std;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
}
`
function Details({fullName,email,phone,linked,date,synced,state,bvn,nin,nationality,address,income}) {
  return (
    <DetailsContainer>
        <div className='detail-text'>
            <h5 className='detail-h'>Details</h5>
            <div style={{display:"flex",gap:"12px"}}>
                <p>Average monthly income </p>
                <Active 
                title={income}
                />
            </div>
        </div>
        <div className='line-acrross'></div>
        <div className='detail-view'>
            <div className='detail-view-text'>
                <p className='datial-p'>Full Name</p>
                <h5 className='detail-h'>{fullName}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>Phone</p>
                <h5 className='detail-h'>{phone}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>Linked accounts</p>
                <h5 className='detail-h'>{linked}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>Date added</p>
                <h5 className='detail-h'>{date}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>Last synced</p>
                <h5 className='detail-h'>{synced}</h5>
            </div>
        </div>

        {/*  */}
        <div className='line-acrross'></div>
        <div className='detail-view'>
            <div className='detail-view-text'>
                <p className='datial-p'>Email</p>
                <h5 className='detail-h'>{email}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>State of residence </p>
                <h5 className='detail-h'>{state}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>BVN</p>
                <h5 className='detail-h'>{bvn}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>National identity number</p>
                <h5 className='detail-h'>{nin}</h5>
            </div>
            <div className='detail-view-text'>
                <p className='datial-p'>Nationality</p>
                <h5 className='detail-h'>{nationality}</h5>
            </div>
        </div>
        {/*  */}
        <div className='detail-view'>
            <div className='detail-view-text'>
                <p className='datial-p'>Address</p>
                <h5 className='detail-h'>{address}</h5>
            </div>
            
        </div>
    </DetailsContainer>
  )
}

export default Details
