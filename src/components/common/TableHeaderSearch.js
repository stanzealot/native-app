import React from 'react'
import './tables.scss'
import styled from 'styled-components'
import tblhamburg from '../../assets/tblhamburg.svg'
import Status from './Status'
import { useNavigate } from 'react-router-dom'


const DateInput =styled.input`
&[type="date"]::-webkit-calendar-picker-indicator {
    content: url(${tblhamburg});
    width: 32px;
    height: 32px;
  }

  &[type='date']:before {
    content: attr(placeholder);
  }

  &::-webkit-datetime-edit {
    display: none;
  }

  &[type='date'] {
    outline: none;
    border: none;
  }
`
function TableHeaderSearch({title,placeholder,payout,toggleTransfer,users,numUsers,btnFirst,link,toggleLink,linkProfile,sync,syncPath,stats}) {
  const navigate = useNavigate()
  const handleTransfer =()=>{
    toggleTransfer();
  }
  const handleLink = ()=>{
    toggleLink();
  }
  const handleTransaction =()=>{
    navigate(syncPath)
  }
  return (
    <div className='tbl-search'>
        <div className='tbl-search-title-content'>
            <h1 className='tbl-search-title'>
              {title}
              {users && btnFirst && <span>
                <Status num={numUsers} mgs={users} />
                </span>
              }
              {link &&
               <button onClick={handleLink} className='btn' style={{padding:"8px 14px",font:"12px",width:"fit-content",borderRadius:"border-radius: 8px",marginLeft:"24px"}}>
                 Create a statement link  <img src="/images/plusLink.svg" alt="plus" style={{display:"inline",marginLeft:"8px"}}/>
                </button>
                }
            </h1>

            {
                payout &&
                <div onClick={handleTransfer} className='new_transfer_payout' >
                    <span>New Transfers</span>
                    <img src='/images/plusTransfer.svg' alt='plus' />
                </div>
            }
        </div>
        <div className='tbl-search-right'>
          {
            !linkProfile ?
            <div className='tbl-date'>
                <input className='input-search' type='text' placeholder={placeholder}/>
                <img src={process.env.PUBLIC_URL+"/images/searchIcon.svg"} alt="search"/>
            </div> :  !sync?
            <img src='/images/searchIconSmall.svg' alt='search'/>:""
          }
          {
            !sync?
            <>
            <div className='tbl-months'>  
                <img className='image-from' src={process.env.PUBLIC_URL+"/images/tblTime.svg"} alt="search"/>
                <div className='tbl-data-time'>
                    <p className='date-from'>From:</p>
                    <h1 className='date-to'>10 August</h1>
                    
                </div>

                <div className='date-delimiter'></div>

                <div className='tbl-data-time'>
                    <p className='date-from'>From:</p>
                    <h1 className='date-to'>10 August</h1>
                    
                </div>
            </div>
            <label htmlFor="date_pick" className='lbl-cv'>
                {/* <input type='date' name="date_pick" id='date_pick' className='date_picker'   /> */}
                <DateInput type="date" name="date_pick" />
            </label>
            </>: 
            <div className={`syn_backlist ${stats? "off_sync":""}`}>
              <img onClick={handleTransaction} style={{cursor:"pointer"}}  src={process.env.PUBLIC_URL+"/images/SyncBadge.svg"} alt="verified" />
              <img onClick={handleTransaction} style={{cursor:"pointer"}}  src={process.env.PUBLIC_URL+"/images/blackList.svg"} alt="verified" />
            </div>

            
          }
           
        </div>
    </div>
  )
}

export default TableHeaderSearch
