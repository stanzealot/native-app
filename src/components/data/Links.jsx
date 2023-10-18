import React, { createRef, useRef } from 'react'
import TableHeaderSearch from '../common/TableHeaderSearch'
import { useNavigate } from 'react-router-dom'
import { copyToClipboard } from '../utilities/clipboardUtils';
import { format } from 'timeago.js';
function Links({toggleLink,statementLink}) {
   const navigate = useNavigate()
   const lineRefs = React.useRef([]);
   
  const handleViewLink = ()=>{
      navigate('/data-statement')
  }
  lineRefs.current = statementLink.map((_, i) => lineRefs.current[i] ?? createRef());
  return (
    <div className='balance-overview'>
      <table className='tbl'>
        <tr>
            <td colSpan="7" className='tbl-heading'>
                <TableHeaderSearch 
                title="All statements"
                placeholder="Search..."
                link
                toggleLink={toggleLink}
                />
            </td>    
        </tr>
        
        <tr>
            <th className='th-text'>Link Name</th>
            <th className='th-text'>Period</th>
            <th className='th-text'>Link</th>
            <th className='th-text'>Statement</th>
            <th className='th-text'>Date Created</th>
        </tr>
        {
            statementLink && statementLink.map((item,index)=>(

                <tr key={index}>
                    <td className='td-text'>{item.pageName}</td>
                    <td className='td-text'>{item.selectedPeriod}</td>
                    <td className='td-text'>
                        <div style={{display:"flex", alignItems:"center",gap:"12px"}}>
                            <input ref={lineRefs.current[index]} className='link_table'  value={item.merchantLink} readOnly/>
                            <img style={{cursor:"pointer"}} onClick={copyToClipboard.bind(null,lineRefs.current[index])} src={process.env.PUBLIC_URL+"/images/copy.svg"} alt='copuy' />
                        </div>
                    </td>
                    <td className='td-text'>3</td>
                    <td className='td-text'>
                        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                            <p>{format(item.dateCreated) || "2 hours ago"}</p>
                            <img onClick={handleViewLink} src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='display'/>
                            <img src={process.env.PUBLIC_URL+"/images/threeDot.svg"} alt='amburg'/>
                        </div>
                    </td>
                </tr>

            ))
        }
        <tr>
            <td className='td-export' colspan="7">
                <div className='tbl-export'>
                    <h6 className='tbl-export-text'>Export Data</h6>
                    <img src={process.env.PUBLIC_URL+"/images/export.svg"} alt='export' />               
                </div>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default Links
