import React, { createRef } from 'react'
import '../common/tables.scss'
import TableHeaderSearch from '../common/TableHeaderSearch'
import Status from '../common/Status'
import { format } from 'timeago.js';
import { copyToClipboard } from '../utilities/clipboardUtils';

function InFlowPayment({toggleModal,collectionData,setSelectedRowData}) {
   const handleToggleModal = ()=>{
    toggleModal();
   }
   
   const handleTableRowClick = (rowData) => {
    setSelectedRowData(rowData);
  };
   
   const lineRefs = React.useRef([]);
   lineRefs.current = collectionData.map((_, i) => lineRefs.current[i] ?? createRef());
  return (
    <div className='balance-overview tbl_overflow'>
        
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="All transactions"
                placeholder="Search by name, acc num or reff..."
                />
            </td>
        </tr>
        {
            Array.isArray(collectionData) && collectionData.length > 0  &&
        <tr>
            <th className='th-text'>Timestamp</th>
            <th className='th-text'>Reference</th>
            <th className='th-text'>Amount</th>
            <th className='th-text'>Channel</th>
            <th className='th-text'>Type</th>
            <th className='th-text'>Customer</th>
            <th className='th-text'>Status</th>
        </tr>
        }

        {
            Array.isArray(collectionData) && collectionData.length > 0 && collectionData.map((item,index)=>(
                    <tr key={item.transactionid} onClick={() => handleTableRowClick(item)}>
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
                            {/* <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>{item?.channel}</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                            </div> */}
                        </td>
                        <td className='td-text' style={{color:"#101828"}}>NGN {item?.total_amount}</td>
                        <td className='td-text'>{item?.channel}</td>
                        <td>
                            {
                            item.transferType ==="credit" ? 
                            
                            <Status 
                            mgs="credit"
                            /> : 
                            item?.transferType === "recurring" ?
                            <p className='payment-type'>Recurring</p>:
                            <Status 
                            mgs="One time"
                            bg="#FDF2FA"
                            border="#FCCEEE"
                            color="#C11574"
                            /> 
                            }
                        </td>
                        <td className='td-text'>{item.channelreference}</td>
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

            }
            {
            Array.isArray(collectionData) && collectionData.length > 0 &&
                <tr>
                    <td className='td-export' colspan="7" style={{width:"100%"}}>
                        <div className='tbl-export' >
                            <h6 className='tbl-export-text'>Export Data</h6>
                            <img src={process.env.PUBLIC_URL+"/images/export.svg"} alt='export' />               
                        </div>
                    </td>
                </tr>
            }
            
            
           {
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
           }
        
        {/* duplicate */}
        
        
      </table>
    </div>
  )
}

export default InFlowPayment
