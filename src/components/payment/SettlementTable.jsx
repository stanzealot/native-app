import React, { createRef } from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import '../common/tables.scss'
import Status from '../common/Status'
import { format } from 'timeago.js';
import { copyToClipboard } from '../utilities/clipboardUtils';

function SettlementTable({setIsPayout,toggleTransfer,payoutData,setSelectedRowData}) {
  
    
   const lineRefs = React.useRef([]);
   lineRefs.current = payoutData.map((_, i) => lineRefs.current[i] ?? createRef());

   const handleTableRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setIsPayout(true)
  };
  return (
    <div className='balance-overview'>
        {console.log(payoutData)}
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="Transactions"
                placeholder="Search..."
                payout
                toggleTransfer={toggleTransfer}
                />
            </td>
        </tr>
        {
          Array.isArray(payoutData) && payoutData.length > 0  &&
            <tr>
                <th className='th-text'>Timestamp</th>
                <th className='th-text'>Reference</th>
                <th className='th-text'>Amount</th>
                <th className='th-text'>Status</th>
            </tr>
        }
        {
          Array.isArray(payoutData) && payoutData.length > 0 && payoutData.map((item,index)=>(

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
                </td>
                <td className='td-text'>NGN {item?.total_amount}</td>
                
                <td> 
                    <div className='payment-status'>
                        <Status 
                        icon="/images/success.svg"
                        mgs="Successful "
                        />
                        <img onClick={setIsPayout.bind(this,true)} src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='eye'/>
                    </div>
                </td>
            </tr>
          ))
        }
         {/* duplicate */}
        
        
       
        {
         Array.isArray(payoutData) && payoutData.length > 0 &&
        <tr>
            <td className='td-export' colspan="7">
                <div className='tbl-export'>
                    <h6 className='tbl-export-text'>Export Data</h6>
                    <img src={process.env.PUBLIC_URL+"/images/export.svg"} alt='export' />               
                </div>
            </td>
        </tr>
        }

        {
            payoutData.length <= 0 &&
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
      </table>
    </div>
  )
}

export default SettlementTable
