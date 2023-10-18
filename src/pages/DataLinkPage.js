import React, { useRef } from 'react'
import NameControl from '../components/common/NameControl'
import Transaction from '../components/data/Transaction'
import '../components/data/data.scss'

import { copyToClipboard } from '../components/utilities/clipboardUtils'
import TableHeaderSearch from '../components/common/TableHeaderSearch'
import { useNavigate } from 'react-router-dom'
function DataLinkPage() {
    const navigate = useNavigate()
    const handleditForm =()=>{

    }

    const handlePreview = ()=>{
        navigate('/link-details')
    }
    const refLink = useRef(null);
  return (
    <div className='main-inner'>
        <NameControl 
        backbtnPath="/data-statements"
        customer
        data
        btntext="View customer profile"
        trans
        />
        <div className='link-bar'>
            <div className='link-bar-wrapper'>
                <div className='link-bar-right'>
                    <img src="/images/Avatar.svg" alt='avater' />
                    <div className='link-right'>
                        <p>Link 1</p>
                        <div className='link-right-copy'>
                           <input ref={refLink} className='input_link_copy' type='text' value="64a85678gshs65678sh6s8678" />
                           <img onClick={copyToClipboard.bind(null,refLink)} src='/images/copy.svg' alt="copy" />
                        </div>
                    </div>
                </div>
                <div className='btn_right'>
                   <div style={{cursor:"pointer"}} className='btn_items' onClick={handleditForm}>
                        <img src="/images/editPencile.svg" alt='ban' />
                        <p className='btn_text'>Edit</p>
                   </div>
                   <div style={{cursor:"pointer"}} className='btn_items' onClick={handlePreview}>
                        <img src="/images/arrowUpward.svg" alt='ban' />
                        <p className='btn_text'>Preview link</p>
                   </div>
                </div>
            </div>
        </div>

        <div className='table-section'>

            <div className='tbl-content'>
                <table className='tbl'>
                    <tr>
                    <td style={{borderRadius:"12px"}} colSpan="3" className='tbl-heading'>
                        <TableHeaderSearch 
                        title="Statements"
                        placeholder="Search..."
                        linkProfile
                        />
                     </td>
                    </tr>
                    <tr>
                        <th className='th-text'>Customer</th>
                        <th className='th-text'>Date Created</th>
                        <th className='th-text'>Account</th>
                    </tr>
                    <tr>
                        <td className='td-text'>Brooklyn Simmons</td>
                        
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                                <img  src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='display'/>
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className='td-text'>Brooklyn Simmons</td>
                        
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                                <img  src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='display'/>
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className='td-text'>Brooklyn Simmons</td>
                        
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                                <img  src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='display'/>
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className='td-text'>Brooklyn Simmons</td>
                        
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                                <img  src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='display'/>
                            </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className='td-text'>Brooklyn Simmons</td>
                        
                        <td className='td-text'>2 hours ago</td>
                        <td className='td-text'>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                                <img  src={process.env.PUBLIC_URL+"/images/eye.svg"} alt='display'/>
                            </div>
                        </td>
                        
                    </tr>
                </table>
            </div>

            <div className='table-section-right'>
                <div className='table-right-wrapper'>
                    <h1 className='tbl-sec-title'>Statement details</h1>
                    <p className='tbl-sec-desc'>Here is an overview of your transaction</p>

                    <div className='tbl-sec-content'>
                       
                            <div className='tbl-content-title'>
                                <p className='text_light'>Full name</p>
                                <p className='text_light'>Gender</p>
                            </div>
                            <div className='tbl-content-title'> 
                                <p className='text_bold'>MIDE AJIBADE</p>
                                <p className='text_bold'>Male</p>
                            </div>
                            <div className='tbl-content-title top_space'>
                                <p className='text_light'>Recipient email</p>
                                <p className='text_light'>Page visits</p>
                            </div>
                            <div className='tbl-content-title'> 
                                <p className='text_bold'>ayomide@getf.com</p>
                                <p className='text_bold'>0</p>
                            </div>
                            <div className='tbl-content-title top_space'>
                                <p className='text_light'>Completed process</p>
                                <p className='text_light'>Created on</p>
                            </div>
                            <div className='tbl-content-title'> 
                                <p className='text_bold'>0</p>
                                <p className='text_bold'>Jan 6, 2023, 02:45:23 AM</p>
                            </div>
                            <div className='tbl-content-title top_space'>
                                <p className='text_light'>Redirect URL</p>
                                <p className='text_light'>App</p>
                            </div>
                            <div className='tbl-content-title'> 
                                <p className='text_bold'>N/A</p>
                                <p className='text_bold' style={{color:"#2EBDB6"}}>Flick <img style={{display:"inline"}} src="/images/arrowUpward.svg" alt='flick'/></p>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default DataLinkPage
