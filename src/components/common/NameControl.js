import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DropDownContainer from '../utilities/DropDownContainer';
import DropDownItem from '../utilities/DropDownItem';
import '../utilities/dropDownStyle.scss'

function NameControl({
    currency,
    name,
    desc,
    btnFirst,
    btnSecond,
    image,
    btn,
    handleButtonClick,
    customer,
    data,
    btntext,
    verifyIdentity,
    balance,
    selectedOption,
    setSelectedOption,
    selectedCurrency,
    setSelectedCurrency,
    toggleModal,
    identity,
    backbtnPath,
    profile,
    trans

}) {
    const [activeButton, setActiveButton] = useState(btnFirst);
    const navigate = useNavigate()
    
    const [selectedValue, setSelectedValue] = useState('');
    

  
  const handleClick = (button) => {
    setActiveButton(button);
    handleButtonClick(button)
  };
  const handleNavigate = ()=>{
    navigate('/data-profile')
  }
  const handleVerifyIdentity = ()=>{
    verifyIdentity();
    
  }
  const handleSelectChange = (event) => {
      const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    toggleModal();
  };
  const handleSelectcurrency = (e)=>{
    setSelectedCurrency(e.target.value)
  }
  const handleBack = ()=>{
     navigate(backbtnPath);
  }
  return (
    <div className={`name-control ${customer && 'customer-bg'}`}>
      {
        !customer ? 
        <div className="name-control-title">
          <div className='name-control-title-content'>
              <h1 className='name-control-title'>
                  {name  }
                  {image && <span>🔆</span>}
              </h1>
              <p className='name-control-desc'>{desc}</p>
          </div>
          {
            balance && activeButton==="All Balances" ?
            // <div className='balance-transfer-options'>
            //   <select value={selectedOption} onChange={handleSelectChange} className='transfer-options'>
            //     <option value="" disabled hidden>Transfer</option>
            //     <option value='bank_account'>Transfer to Bank Account</option>
            //   <option value='balance'>Transfer between Balances</option>
            //   <option value='currency'>Add New Currency</option>
            //   </select>
            // </div> 

          
            <DropDownContainer setSelectedOption={setSelectedOption} toggleModal={toggleModal}/>
            : 
            balance && activeButton !=="All Balances"?
            <div className='all-balancey-currency'>
              <img src='/images/Us.svg' alt='icon' />
              <select value={selectedCurrency} onChange={handleSelectcurrency} className='curreny-option'>
                <option value='usd'>USD</option>
                <option value='ng'>NG</option>
              </select>
            </div>
            // :currency && activeButton==="All Balances" ? 
            // <div className='currency_add'>
            //   <p className='currency_add_text'>Add Currency</p>
            //   <img src='/images/plusGreen.svg' alt='plus'/>
            // </div>
              :currency && activeButton !=="All Balances" ? 
              <div className='currencies_select'>
                <div  className='currencies_select_content'>
                    <img src="/images/USD.svg" alt='usd' />
                    <select
                    className='select_input_val'
                     value={selectedValue}
                     onChange={(e) => setSelectedValue(e.target.value)}
                     >
                      <option value="USD">USD</option>
                      <option value="NGN">NGN</option>
                      <option value="KES">KES</option>
                    </select>
                </div>
              </div>
              :""
          }
        </div>
        :
         <div style={{cursor:"pointer"}} className="customer-back" onClick={handleBack}>
          <img src={process.env.PUBLIC_URL+"/images/arrowBack.svg"} alt="arrow back"/>
          <h1 className='customer-arrowBack'>Go Back</h1>
         </div>
      }


        {!btn &&
          <>
          {
          !data ?

            <div className='name-control-btn'>
                <button 
                onClick={() => handleClick(btnFirst)}
                className={`btn-control ${activeButton === btnFirst ? 'active-btn' : ''}`}
                >{btnFirst}</button>
                <button 
                onClick={() => handleClick(btnSecond)}
                className={`btn-control ${activeButton === btnSecond ? 'active-btn' : ''}`}
                >{btnSecond}</button>
            </div> :
            profile?
            <div className='data-nav-btn'>
              <span  className='dataItembtn active'>Account</span>
              <span className='dataItembtn '>Identity</span>
              <span className='dataItembtn '>Transactions</span>
              <span className='dataItembtn '>Statement</span>
            </div>
            :
            !trans ?
            <div onClick={handleVerifyIdentity} className='btn-name-control-container'>
              <span style={{color:"#FFF"}}>{btntext}</span>
              <img src={process.env.PUBLIC_URL+"/images/dataBtnArrowUp.svg"} alt="arrow" />
            </div> :
            <div onClick={handleNavigate} className='btn-name-control-container'>
              <span style={{color:"#FFF"}}>{btntext}</span>
              <img src={process.env.PUBLIC_URL+"/images/dataBtnArrowUp.svg"} alt="arrow" />
            </div>
          }
          </>
        }

    </div>
  )
}

export default NameControl
