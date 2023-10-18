import React from 'react'
import NameControl from '../components/common/NameControl'
import styled from 'styled-components'



const MainRecurring = styled.div`
width:100%;
height:348px;
display:flex;
justify-content: center;
align-items: center;
margin-top:32px;
border-radius: 12px;
background: #FFF;

.recurring-wrapper{
    width:31%;
    display:flex;
    align-self:center;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    .rec-h{
        color: var(--gray-900, #101828);
        text-align: center;
        font-family: Circular Std;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
    }
    .rec-p{
        color: var(--Flick-Subtext, #8C8F97);
        text-align: center;

        /* Text sm/Regular */
        font-family: Circular Std;
        font-size: 14px;
        font-style: normal;
        font-weight: 450;
        line-height: 20px; /* 142.857% */
    }
}


`
function Recurring() {
  return (
    <div className='main-inner'>
       <NameControl
          btn
          name="Recurring"
          desc="The balance is shown here"
        />
        <MainRecurring>
            <div className='recurring-wrapper'>
            <img style={{marginBottom:"16px"}} className='rec-img' src='/images/empty.svg' alt='recurring'/>
            <h4 className='rec-h'>Coming Soon!</h4>
            <p className='rec-p'>Anticipate the recurring, we are currently fixing it.</p>

            </div>
        </MainRecurring>
    </div>
  )
}

export default Recurring
