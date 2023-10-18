import React from 'react'
import NameControl from '../components/common/NameControl'
import '../components/common/Pages.scss'
import '../components/common/tables.scss'
import Status from '../components/common/Status'
function DataIncome() {
    
  return (
   
    <div className='main-inner'>
        <NameControl 
        customer
        btn
        />

        <div className='data-Income-detail'>
            <div className='data-Income-name'>
                <img className='data-income-img' src={process.env.PUBLIC_URL+"/images/tope.svg"} alt='url' />
                <div className='idName'>
                    <h3 className='title-income'>Hosannah Jeremiah</h3>
                    <div className='data-incomeId'>
                        <p>64a85678gshs65678sh6s8678</p>
                        <img src={process.env.PUBLIC_URL+"/images/copy.svg"} alt="copy"/>
                    </div>
                </div>
            </div>
            <span className='btn' style={{width:"auto"}}>View customer profile</span>
        </div>

        <div className='balance-overview'>
            <table className='tbl'>
                <tr>
                    <td colSpan="3" className='td-top-income'>
                        <div className='td-dataIncome'>
                            <h1 className='td-dataIncome-txt'>Income details</h1>
                            <div className='td-dataIncome-right'>
                                <p>Average monthly income</p>
                                <Status icon='/images/avataOnlineIndicator.svg' mgs="99.89"/>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="3" className='income-details'>
                        <div className='data-Income-details'>
                            <div className='income-details-item'>
                                <p className='data-income-text'>Number of Transactions</p>
                                <h3 className='data-income-num'>5673</h3>
                            </div>
                            <div className='income-details-item'>
                                <p className='data-income-text'>Account age months</p>
                                <h3 className='data-income-num'>34</h3>
                            </div>
                            <div className='income-details-item'>
                                <p className='data-income-text'>Confidence score</p>
                                <h3 className='data-income-num'>34</h3>
                            </div>
                            <div className='income-details-item'>
                                <p className='data-income-text'>Timestamp</p>
                                <h3 className='data-income-num'>Jan 6, 2023, 02:45:23 AM</h3>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='td-income-content'>
                        <p className='data-income-text'>Past six months</p>
                        <p className='data-income-text'>
                        Average -  <span className='data-income-num'>653,896.89</span> <br/>
                        Max per month - <span className='data-income-num'>1,000,000.00</span> <br/> 
                        Min per month -  <span className='data-income-num'>0.00</span> <br/> 
                        Occurence - <span className='data-income-num'>9.00</span> <br/>  
                        Total - <span className='data-income-num'>4,674,734.00</span> <br/>  
                        </p>
                    </td>
                    <td className='td-income-content'>
                        <p className='data-income-text'>Past three months</p>
                        <p className='data-income-text'>
                        Average -  <span className='data-income-num'>653,896.89</span> <br/>
                        Max per month - <span className='data-income-num'>1,000,000.00</span> <br/> 
                        Min per month -  <span className='data-income-num'>0.00</span> <br/> 
                        Occurence - <span className='data-income-num'>9.00</span> <br/>  
                        Total - <span className='data-income-num'>4,674,734.00</span> <br/>  
                        </p>
                    </td>
                    <td>
                        <p className='data-income-text'>Past twelve months</p>
                        <p className='data-income-text'>
                        Average -  <span className='data-income-num'>653,896.89</span> <br/>
                        Max per month - <span className='data-income-num'>1,000,000.00</span> <br/> 
                        Min per month -  <span className='data-income-num'>0.00</span> <br/> 
                        Occurence - <span className='data-income-num'>9.00</span> <br/>  
                        Total - <span className='data-income-num'>4,674,734.00</span> <br/>  
                        </p>
                    </td>
                </tr>
            </table>
        </div>

        <div className='balance-overview'>
            <table className='tbl'>
                <tr>
                    <td colSpan="5">
                        income
                    </td>
                </tr>
                <tr>
                    <th className='th-text'>Account</th>
                    <th className='th-text'>Income Type</th>
                    <th className='th-text'>Monthly Amount</th>
                    <th className='th-text'>Employer</th>
                    <th className='th-text'>Days Worked</th>
                </tr>
                <tr>
                    <td className='td-text'>
                        <div className='tbl-account'>
                            <img className='account-bank-logo' src={process.env.PUBLIC_URL+"/images/paymentBank.svg"} alt="" />
                            <div className='payment-account-text'>
                                <h1 className='td-text'>GTBank</h1>
                                <span className='td-text'>|0130086553</span>
                            </div>
                        </div>
                    </td>
                    <td className='td-text'>Recurrent credit</td>
                    <td className='td-text'>NGN 848,67.06</td>
                    <td className='td-text'>Qraba</td>
                    <td className='td-text'>106</td>
                </tr>
            </table>
        </div>
        
    </div>
   
  )
}

export default DataIncome
