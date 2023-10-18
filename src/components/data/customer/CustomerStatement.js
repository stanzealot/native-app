import React, { useRef, useState } from 'react'
import Details from '../../common/Details';
import { copyToClipboard } from '../../utilities/clipboardUtils';
import Status from '../../common/Status';
import TableHeaderSearch from '../../common/TableHeaderSearch';
function CustomerStatement() {
  const refLink = useRef(null);
  const [isDownload,setIsDownload] = useState(false)
  const toggleDownload = ()=>{
    setIsDownload(!isDownload)
  }
  return (
    <div className='data_customer'>
      <div className='topbar_identity'>
        <div className='link-bar-left'>
            <img src="/images/Avatar.svg" alt='avater' />
            <div className='link-right'>
                <h5 className='text_h3'>ARM Limited</h5>
                <div className='link-right-copy'>
                    <input ref={refLink} className='input_link_copy' type='text' value="64a85678gshs65678sh6s8678" />
                    <img onClick={copyToClipboard.bind(null,refLink)} src='/images/copy.svg' alt="copy" />
                </div> 
            </div>
        </div>
      </div>
        
      <div className='balance-overview'>
          <table className='tbl'>
          <tr>
              <td colSpan="7" className='tbl-heading'>
                  <TableHeaderSearch
                  title="Statements"
                  placeholder="Search by bank..."
                  
                  />     
              </td>
          </tr>
          <tr>
           
              <th className='th-text'>Customer</th>
              <th className='th-text'>Bank</th>
              <th className='th-text'>Period</th>
              <th className='th-text'>From</th>
              <th className='th-text'>To</th>
              <th className='th-text'>Collected Via</th>
              <th className='th-text'>Date Collected</th>
          </tr>

          <tr className='tr_statements'>
          <td className='td-text'>Brooklyn Simmons</td>

            <td>
                <div className='customer-name'>
                    <img className='customer-name-img' src={process.env.PUBLIC_URL+"/images/gt-bank.svg"} alt="customer" />
                    <h2 className='customer-name-text'>GTBank | 0130086553</h2>
                </div>
            </td> 
            <td className='td-text'>12 months</td>
            
            <td className='td-text'>Jul 17, 2023</td>
            <td className='td-text'>Jul 17, 2023</td>
            <td className='td-text'>
                <img src={process.env.PUBLIC_URL+"/images/btnApi.svg"} alt='active' />

            </td>
            <td className='td-text '>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <p> 2 hours ago </p>
                    <img src='/images/customers/fileDownload.svg' alt='svg' onClick={toggleDownload}/>
                </div>
                
            </td>
            
            {
                isDownload && 
                <div className='download_report'>
                    <div className='download_item'>
                        <p className='report_down_text'>Download Statement</p>
                        <img src='/images/customers/fileDownload.svg' alt="downlaod"/>
                    </div> 
                    <div className='download_item'>
                        <p className='report_down_text'>Generate Analytics</p>
                        <img src='/images/customers/analytic.svg' alt="downlaod"/>
                    </div> 
                </div>
            }
        </tr>
          </table>
        </div>
    </div>
  )
}

export default CustomerStatement
