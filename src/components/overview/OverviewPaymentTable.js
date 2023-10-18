import React, { createRef, useRef, useState } from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'
import '../common/tables.scss'
import { format } from 'timeago.js';

import { useNavigate } from 'react-router-dom'
import { copyToClipboard } from '../utilities/clipboardUtils';
function OverviewPaymentTable({collectionData}) {
   const navigate = useNavigate()
   const [activeTab, setActiveTab] = useState('Inflow');

    const handleNavigate =()=>{
        navigate("/payment-collections")
    }
    
    const inputRef = useRef(null);
   const lineRefs = React.useRef([]);
   lineRefs.current = collectionData.map((_, i) => lineRefs.current[i] ?? createRef());
   const handleToggleModal = ()=>{
    // toggleModal();
   }
   const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='balance-overview'>
       
      <table className='tbl'>
        
        {/* {
        Array.isArray(collectionData) && collectionData.length > 0  &&
        <tr>
            <th className='th-text'>Timestamp</th>
            <th className='th-text'>Reference</th>
            <th className='th-text'>Amount</th>
            <th className='th-text'>Channel</th>
            <th className='th-text'>Customer</th>
            <th className='th-text'>Status</th>
        </tr>
        }
        {
          Array.isArray(collectionData) && collectionData.length > 0 && collectionData.map((item,index)=>(
                <tr key={item.transactionid}>
                    <td className='td-text'>{format(item?.dated)}</td>
                    <td className='td-text'>
                        <div style={{display:"flex",gap:"5px"}}>
                            <input ref={lineRefs.current[index]} className='link_table'  value={item?.transactionid}  hidden  readOnly/>
                            <h1 className='td-text'>{item.transactionid.slice(0, -4) + "..."}</h1>
                            <img
                            src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
                            alt="ic"
                            onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(lineRefs.current[index]);
                            }}
                            />
                        </div>
                    </td>
                    <td className='td-text' style={{color:"#101828"}}>NGN {item?.total_amount}</td>
                    <td className='td-text'>{item?.channel}</td>
                
                    <td className='td-text'>{item?.channelreference}</td>
                    <td>
                        <div className='payment-status'>
                            {
                            item.status === "success" &&
                                <Status 
                                icon="/images/success.svg"
                                mgs="Successful "
                                />
                            }
                            {
                                item.status === "pending" &&
                                <Status 
                                icon="/images/Dot.svg"
                                mgs="pending"
                                bg="#FFF8F0"
                                border="#F79009"
                                color="#F79009"
                                />
                            }
                            {
                                item.status === "failed" &&
                                <Status 
                                icon="/images/x.svg"
                                mgs="pending"
                                bg="#FEF3F2"
                                border="#FECDCA"
                                color="#B42318"
                                />
                            }
                            <img onClick={handleToggleModal}  src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='eye'/>
                        </div>
                    </td>

                </tr>
          ))
        } */}


              <tr>
                <td colSpan="7" className='tbl-heading'>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <p className='trans_graph'>Transactions</p>
                        <div className='data-nav-btn'>
                            <span onClick={() => handleTabClick('Inflow')} className={`dataItembtn ${activeTab === 'Inflow' ? 'active' : ''}`} >Inflow</span>
                            <span onClick={() => handleTabClick('Outflow')} className={`dataItembtn ${activeTab === 'Outflow' ? 'active' : ''}`}>Outflow </span>
                        </div>
                    </div>     
                </td>
                </tr>

                {
                  activeTab === "Inflow" &&
                    <>
                    <tr>
                    
                        <th className='th-text'>Amount</th>
                        <th className='th-text'>Transaction Reference</th>
                        <th className='th-text'>Channel</th>
                        <th className='th-text'>Date Initiated</th>
                        <th className='th-text'>Date Sent</th>
                        <th className='th-text'>Status</th>
                        
                    </tr>

                    <tr>
                        <td className='td-text'>NGN 840,000.00c</td>
                        <td className='td-text'>  
                            <div style={{display:"flex",gap:"5px"}}>
                                <input ref={inputRef} className='link_table'  value="Sd34d4$&dsasdefdggdgsgFDgfvFTFGEhf..."  readOnly/>
                                
                                <img
                                src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
                                alt="ic"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard(inputRef);
                                }}
                                />
                            </div>
                        
                        </td>
                        <td className='td-text'>Flick</td>
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>
                            <Status 
                            icon="/images/success.svg"
                            mgs="Successful"
                            />
                        </td>
                    
                    
                    </tr>
                    </>
                }
                {
                  activeTab === "Outflow" &&
                    <>
                    <tr>
                        <th className='th-text'>Amount</th>
                        <th className='th-text'>Recipient </th>
                        <th className='th-text'>Date Initiated</th>
                        <th className='th-text'>Date Sent</th>
                        <th className='th-text'>Status</th>     
                    </tr>

                    <tr>
                        <td className='td-text'>NGN 840,000.00c</td>
                        <td className='td-text'>Mide Ajibade</td>
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>
                            <Status 
                            icon="/images/success.svg"
                            mgs="Successful"
                            />
                        </td>
                    
                    
                    </tr>
                    </>
                }
    
              
        {/* duplicate */}
    
            <tr>
                <td className='td-export' colspan="7">
                    <div className='tbl-export' onClick={handleNavigate}>
                        <h6 className='tbl-export-text'>View More</h6>
                        <img src={process.env.PUBLIC_URL+"/images/export.svg"} alt='export' />               
                    </div>
                </td>
            </tr>
        

        {/* {
        collectionData.length <= 0 &&
        <tr>
            <td  colSpan={7} style={{width:"100%"}}>
            <div className='empty_tbl'>
                <img src='/images/emptyPage.svg' alt='emptuy' />
                <h3 className='num_trans'>No Transactions Yet</h3>
                <p className='num_desc'> it is necessary to perform transactions on your Flick account</p>
            </div>
            </td>
        </tr>
        } */}
        
      </table>
    </div>
  )
}

export default OverviewPaymentTable
