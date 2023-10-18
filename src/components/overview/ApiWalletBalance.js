import React from 'react'
import './Overview.scss';
import { useNavigate } from 'react-router-dom';


function ApiWalletBalance({amount,setIsPaymentMethod,setIsSetLimit,mt,align,setIsAmount,setIsModalOpen}) {
    const navigate = useNavigate()
    const handleNavigate =()=>{
        navigate("/wallet-history")
    }
  return (
    <div className='api-wallet' style={{marginTop:mt}}>
                <div className='api-wallet-title'>
                    <h1 className='api-wallet-text'>API Wallet</h1>
                    <button onClick={handleNavigate} className='btn' style={{width:"fit-content",background:"#259792",borderRadius:"8px"}}>
                        Wallet history
                    </button>
                </div>
                <div className='api-wallet-balance'>
                    <div className='wallet-balance-container'>
                        <h3 className="wallet-balance-overview">AVAILABLE BALANCE</h3>
                        <img src='/images/eyeBalance.svg'  alt='eye'/>
                    </div>
                    <input type='text' className='balance-input' value={amount} disabled/>
                    <div className='api-wallet-controlls' style={{justifyContent:align}}>
                        <div className='api-wallet-btn' onClick={setIsAmount.bind(this,true)}>
                            <img src="/images/trendDownArrow.svg" alt='btn' />
                            <p className='wallet-btn-text' >Fund Balance</p>
                        </div>
                        <div className='api-wallet-btn'>
                            <img src="/images/arrowUpward.svg" alt='btn' />
                            <p className='wallet-btn-text'>Auto Top-up</p>
                        </div>
                        <div className='api-wallet-btn' onClick={setIsModalOpen.bind(this,true)}>
                            <img src="/images/editWallet.svg" alt='btn' />
                            <p className='wallet-btn-text'  >Set Low Limit</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ApiWalletBalance
