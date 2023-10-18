import React, { useRef, useState } from 'react'
import '../components/common/Pages.scss'
import TableHeaderSearch from '../components/common/TableHeaderSearch';
import { copyToClipboard } from '../components/utilities/clipboardUtils';
import Status from '../components/common/Status';
import { useNavigate } from 'react-router-dom';
import CollectionModal from '../components/payment/CollectionModal';
import PayoutOverviewModal from '../components/payment/PayoutOverviewModal';
function Payment() {
    const [activeTab, setActiveTab] = useState('Inflow');
    const [selectedValue,setSelectedValue] = useState('USD');
    const [isCollection,setIsCollection] = useState(false)
    const [isPayout, setIsPayout] = useState(false)
    const [selectedRowData, setSelectedRowData] = useState(null);
    const inputRef = useRef(null);  
    const navigate = useNavigate();
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }; 
    const toggleModal = ()=>{
     setIsCollection(!isCollection)

    }
    const toggleInflow =()=>{
        setIsPayout(!isPayout)
    }

    const handleOutnflowReciept =(item)=>{
        setSelectedRowData(item)
        setIsPayout(true)
    }
  return (
    <div className='main-inner'>
       
       <div className='payment_top'>
            <div className='payment_top_left'>
                <div className='payment_top_content'>
                    <p className='payment_top_titlee'>Payment</p>
                    <p className='payment_top_desc'>The balance is shown here</p>
                </div>

                <div className='currencies_select'>
                    <div  className='currencies_select_content'>
                        <img src={`/images/${selectedValue==="USD"?"USD":selectedValue==="NGN"?"NGN":""}.svg`} alt='usd' />
                        <select
                        className='select_input_val'
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        >
                        <option value="USD">USD</option>
                        <option value="NGN">NGN</option>
                        
                        </select>
                    </div>
                </div>
            </div>
                {/* top-right */}
            <div className='data-nav-btn'>
                <span onClick={() => handleTabClick('Inflow')} className={`dataItembtn ${activeTab === 'Inflow' ? 'active' : ''}`} >Inflow</span>
                <span onClick={() => handleTabClick('Outflow')} className={`dataItembtn ${activeTab === 'Outflow' ? 'active' : ''}`}>Outflow </span>
            </div>
       </div>

       {/*  */}
       {
        activeTab === "Inflow" && (
          <div className='balance-overview'>
            <table className='tbl'>
            <tr>
                <td colSpan="7" className='tbl-heading'>
                    <TableHeaderSearch 
                    title={activeTab}
                    placeholder="Search by name or date..."
                    
                    />     
                </td>
            </tr>
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
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <Status 
                        icon="/images/success.svg"
                        mgs="Successful"
                        />
                        <img onClick={toggleModal} src='/images/eye.svg' alt='eye' />
                    </div>
                </td> 
            </tr>
            </table>
          </div>
        )
       }

       {
        activeTab === "Outflow" && (
            <div className='balance-overview'>
            <table className='tbl'>
            <tr>
                <td colSpan="7" className='tbl-heading'>
                    <TableHeaderSearch 
                    title={activeTab}
                    placeholder="Search by name or date..."
                    
                    
                    />     
                </td>
            </tr>
            <tr>
                <th className='th-text'>Amount</th>
                <th className='th-text'>Recipient </th>
                <th className='th-text'>Date Initiated</th>
                <th className='th-text'>Date Sent</th>
                <th className='th-text'>Status</th>     
            </tr>
  
            <tr onClick={() => handleOutnflowReciept({amount: 'NGN 840,000.00c',name: 'Mide Ajibade',time1: '2 hours ago',time2: '2 hours ago'})}>
                <td className='td-text'>NGN 840,000.00c</td>
                <td className='td-text'>Mide Ajibade</td>
                <td className='td-text'>2 hours ago</td>
                <td className='td-text'>2 hours ago</td>
                <td className='td-text'>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <Status 
                        icon="/images/success.svg"
                        mgs="Successful"
                        />
                        <img onClick={toggleInflow} src='/images/eye.svg' alt='eye' />
                    </div>
                </td>    
            </tr>
            </table>
          </div>
        )
       }
       {
        isCollection &&
         <CollectionModal toggleModal setIsCollection={setIsCollection} />
       }
       
        {isPayout && <PayoutOverviewModal toggleInflow={toggleInflow} data={selectedRowData} />}
    </div>
  )
}

export default Payment
