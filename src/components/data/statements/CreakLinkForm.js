import React, { useState } from 'react'
import '../data.scss'
import { BeatLoader } from "react-spinners";

function CreakLinkForm({setIsLink,setLinkInput,linkInput,addStatementLink, isLoading,statementLink}) {
   const [textValue, setTextValue] = useState('');
   const [selectedOption, setSelectedOption] = useState('');
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };
  const handlePropagation = (e)=>{
    e.stopPropagation();
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinkInput({
      ...linkInput,
      [name]: value,
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    addStatementLink()
  }
  return (
    <div className='link-modal' onClick={setIsLink.bind(this,false)}>
        <div className='link-box' onClick={handlePropagation}>
            <div className='link-box-wrapper'>
                <img onClick={setIsLink.bind(this,false)} className='link-modal-close' src='/images/x-close.svg' alt='f'/>
                <div className='link-title'>
                   
                    <h3>Create a statement link</h3>
                    <p>Manually authenticate KYCs in real-time</p>
                </div>
                <div  className='link-line'></div>

                <form onSubmit={handleSubmit}>
                  <div className='statement_link'>
                      <div className='link-form-item'>
                        <label className='desc-text'>Page name</label>
                        <input 
                        type='text' 
                        name="pageName" 
                        className='input-link' 
                        value={linkInput.pageName}
                        onChange={handleChange}
                        />
                      </div>
                      <div className='link-form-item'>
                        <label className='desc-text'>Description</label>
                        <select 
                        value={linkInput.description} 
                        onChange={handleChange} 
                        className='input-link'
                        name='description'
                        >
                          <option value="" disabled>Transaction</option>
                          <option value="statement">Statement</option>
                          <option value="transaction">Transaction</option>
                          <option value="balance">Balance</option>
                          <option value="identity">Identity</option>
                        </select>
                      </div>
                      <div className='link-form-item'>
                        <label className='desc-text'>Enter Custom link</label>
                        <div  className='input-link' style={{gap:"0px",padding:"0px",paddingLeft:"12px",paddingRight:"5px"}} >
                          <input type='text' value="https://link.paywithflick.co/pages/" className='link_input_custom' />
                          <input 
                          type='text'  
                          name="customLink" 
                          placeholder='custom link' 
                          value={linkInput.customLink}
                          onChange={handleChange}
                          className='link_input_custom_value'
                          />
                        </div>
                      </div>
                      
                      <div className='link-form-item'>
                      <label className='desc-text'>Select app</label>
                      <select 
                      value={linkInput.selectedApps} 
                      onChange={handleChange} 
                      className='input-link'
                      name='selectedApps'
                      >
                          <option value="" disabled>Flick</option>
                          <option value="Flick">Flick</option>
                          <option value="Flick card">Flick card</option>
                          <option value="Flick-sandbox">Flick-sandbox</option>
                      </select>
                      </div>
                      <div className='link-form-item'>
                      <label className='desc-text'>Select period</label>
                      <select 
                      name='selectedPeriod' 
                      value={linkInput.selectedPeriod} 
                      onChange={handleChange} 
                      className='input-link'
                      >
                        {
                          linkInput.description ==="statement" ?
                          <>
                            <option value="" disabled>6 months</option>
                            <option value="1 month">1 month</option>
                            <option value="2 months">2 months</option>
                            <option value="3 months">3 months</option>
                            <option value="4 months">4 months</option>
                            <option value="5 months">5 months</option>
                            <option value="6 months">6 months</option>
                          </>:
                           linkInput.description ==="transaction" ?
                           <>
                           <option value="" disabled>1 day</option>
                           <option value="1 day">1 day</option>
                           <option value="3 days">3 days</option>
                           <option value="7 days">7 days</option>
                           <option value="14 days">14 days</option>  
                         </>:
                         <>
                           
                            <option value="1 day">1 day</option>
                            <option value="3 days">3 days</option>
                            <option value="7 days">7 days</option>
                            <option value="14 days">14 days</option>
                            <option value="1 month">1 month</option>
                            <option value="2 months">2 months</option>
                            <option value="3 months">3 months</option>
                            <option value="4 months">4 months</option>
                            <option value="5 months">5 months</option>
                            <option value="6 months">6 months</option>
                         </>
                        }
                      </select>
                      </div>
                      <div  className='verify-line'></div>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                          <p>Advance options</p>
                          <img src='/images/arrowDown.svg' alt='dropdown' />
                      </div>
                      
                      <div className='link-form-item'>
                        <label className='desc-text'>Redirect link</label>
                        <input 
                        value={linkInput.redirectLink} 
                        type='text'  name="redirectLink" 
                        placeholder='http:statements.getflick.app/' 
                        className='input-link' 
                        onChange={handleChange}
                        />
                      </div>
                      <div className='link-form-item'>
                        <label className='desc-text'>Email address</label>
                        <input 
                        value={linkInput.emailaddress} 
                        type='text'  
                        name="emailaddress" 
                        placeholder='http:statements.getflick.app/' 
                        className='input-link' 
                        onChange={handleChange}
                        />
                      </div>
                      <button className='btn' style={{width:"50%", display:"flex", alignContent:"center", justifyContent:"center", gap:"10px"}}>

                            {
                              isLoading ? (
                                <BeatLoader
                                color="#FFF"
                                cssOverride={{}}
                              />
                                
                              ) : (
                                <>       
                                  <img src='/images/download-pdf.svg' alt='f'/> Create page
                                </>
                              )
                            }
                      </button>
                  </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default CreakLinkForm
