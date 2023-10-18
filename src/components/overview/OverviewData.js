import React, { useState } from 'react'
import './Overview.scss'
import Status from '../common/Status'
import Chart from './Chart'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import OverviewDataTable from './OverviewDataTable'
import ApiWalletBalance from './ApiWalletBalance'
function OverviewData({data,setIsSetLimit,setIsPaymentMethod,setIsAmount,setIsModalOpen}) {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }; 

  return (
    <div className='overview-data'>
        <div className='api-wallet-container'>
            <div className='api_wallet_amount'>
                <ApiWalletBalance amount="N20,000.12" setIsAmount={setIsAmount} setIsSetLimit={setIsSetLimit} setIsPaymentMethod={setIsPaymentMethod} setIsModalOpen={setIsModalOpen}  />
            </div>
            

            <div className='api-right'>
                <div className='api-right-wrapper'>
                    <h1 className='api-right-h'>STATS</h1>
                    <div className='api-right-content'>

                        <div className='api-right-summary'>
                            <div className='linked-identity'>
                                <p className='identity-p'>Linked Accounts <img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>345</h3>
                            </div>
                            <div className='linked-identity'>
                                <p className='identity-p'>Unique Customers <img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>345</h3>
                            </div>
                        </div>
                        <div className='api-right-summary'>
                            <div className='linked-identity'>
                                <p className='identity-p'> Identity Calls<img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>500</h3>
                            </div>
                            <div className='linked-identity'>
                                <p className='identity-p'>Statements fetched <img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>345</h3>
                            </div>
                        </div>
                        <div className='circular-bar'>
                            <CircularProgressbar 
                            value={85} text="85%" 
                            strokeWidth={10}
                            circleRatio={0.5}
                            styles={{
                                trail:{
                                    strokeLinecap:'butt',
                                    transform:'rotate(-50deg)',
                                    transformOrigin:'center center'

                                },
                                path:{
                                    strokeLinecap:'butt',
                                    transform:'rotate(-100deg)',
                                    transformOrigin:'center center',
                                    stroke:'#FFF'
                                },
                                text:{
                                    fill:'#FFF'
                                }
                            }}
                            />
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='api-wallet-right'>
                <table className='tbl border-tbl'>
                    <tr>
                        <td colSpan="3">
                            <div className='tbl-error-reason'>
                                <p className='tbl-error-title'>Top error reasons</p>
                                <div className='error-export-btn'>
                                    <img src="/images/exportError.svg" alt='error' />
                                    <p className='error-export-text'>Export</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className='th-text' >FINANCIAL <br/> INSTITUTION</th>
                        <th className='th-text'>ERROR TYPE</th>
                        <th className='th-text'>ERROR <br/> MESSAGE</th>
                    </tr>
                    <tr>
                        <td>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <Status 
                            mgs="Customer"
                            bg="#FEF3F2"
                            border="#FECDCA"
                            color="#B42318"
                            />
                        </td>
                        <td className='td-text'>Invalid PIN entered</td>
                    </tr>
                    <tr>
                        <td>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <Status 
                            mgs="Bank"
                            bg="#FEF3F2"
                            border="#FECDCA"
                            color="#B42318"
                            />
                        </td>
                        <td className='td-text'>Unable to connect</td>
                    </tr>

                    <tr>
                        <td>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <Status 
                            mgs="Customer"
                            bg="#FEF3F2"
                            border="#FECDCA"
                            color="#B42318"
                            />
                        </td>
                        <td className='td-text'>Invalid PIN entered</td>
                    </tr>
                    
                </table>
            </div> */}
        </div>
        {/* Api call summary */}
        <div className='api-calls'>
            
            <div className='api-chart'>
              <div className='api-chart-title'>

                <select value={selectedOption} onChange={handleSelectChange} className='api-call-select api-chart-p'>
                    <option value='api_total'>Total API Calls </option>
                    <option value='api_success'>Successful API Calls</option>
                    <option value='api_unsuccess'>Unsuccessful API Calls</option>
                </select>
                
                <Status 
                num="421" 
                mgs="records"
                />
              </div>
              <div className='api-chart-main'>
                <Chart 
                data={data}
                />
               </div>
            </div>

            {/* <div className='api-right'>
                <div className='api-right-wrapper'>
                    <h1 className='api-right-h'>Your link account</h1>
                    <div className='api-right-content'>

                        <div className='api-right-summary'>
                            <div className='linked-identity'>
                                <p className='identity-p'>Linked Accounts <img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>345</h3>
                            </div>
                            <div className='linked-identity'>
                                <p className='identity-p'>Unique Customers <img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>345</h3>
                            </div>
                        </div>
                        <div className='api-right-summary'>
                            <div className='linked-identity'>
                                <p className='identity-p'> Identity Calls<img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>500</h3>
                            </div>
                            <div className='linked-identity'>
                                <p className='identity-p'>Statements fetched <img style={{display:"inline",marginLeft:"5px"}} src='/images/infoCircle.svg'alt='linked' /></p>
                                <h3 className='identity-h'>345</h3>
                            </div>
                        </div>
                        <div className='circular-bar'>
                            <CircularProgressbar 
                            value={85} text="85%" 
                            strokeWidth={10}
                            circleRatio={0.5}
                            styles={{
                                trail:{
                                    strokeLinecap:'butt',
                                    transform:'rotate(-50deg)',
                                    transformOrigin:'center center'

                                },
                                path:{
                                    strokeLinecap:'butt',
                                    transform:'rotate(-100deg)',
                                    transformOrigin:'center center',
                                    stroke:'#FFF'
                                },
                                text:{
                                    fill:'#FFF'
                                }
                            }}
                            />
                        </div>
                    </div>

                </div>
            </div> */}
            <div className='api-wallet-right'>
                <table className='tbl border-tbl'>
                    <tr>
                        <td className='rad_border' colSpan="3">
                            <div className='tbl-error-reason'>
                                <p className='tbl-error-title'>Top errors</p>
                                <div className='error-export-btn'>
                                    <img src="/images/exportError.svg" alt='error' />
                                    <p className='error-export-text'>Export</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th className='th-text' >FINANCIAL <br/> INSTITUTION</th>
                        <th className='th-text'>ERROR TYPE</th>
                        <th className='th-text'>ERROR <br/> MESSAGE</th>
                    </tr>
                    <tr>
                        <td>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <Status 
                            mgs="Customer"
                            bg="#FEF3F2"
                            border="#FECDCA"
                            color="#B42318"
                            />
                        </td>
                        <td className='td-text'>Invalid PIN entered</td>
                    </tr>
                    <tr>
                        <td>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <Status 
                            mgs="Bank"
                            bg="#FEF3F2"
                            border="#FECDCA"
                            color="#B42318"
                            />
                        </td>
                        <td className='td-text'>Unable to connect</td>
                    </tr>

                    <tr>
                        <td className='rad_border'>
                            <div className='tbl-account'>
                                <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                                <div className='payment-account-text'>
                                    <h1 className='td-text'>GTBank</h1>
                                    <span className='td-text'>-0130086553</span>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <Status 
                            mgs="Customer"
                            bg="#FEF3F2"
                            border="#FECDCA"
                            color="#B42318"
                            />
                        </td>
                        <td className='td-text rad_border'>Invalid PIN entered</td>
                    </tr>
                    
                </table>
            </div>
        </div>
        <OverviewDataTable />
    </div>
  )
}

export default OverviewData
