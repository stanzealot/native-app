import React, { useState} from 'react'
import { BeatLoader } from 'react-spinners'
import './connectAccount.scss'

function ChooseYourBank() {

    const [isLoading, setIsLoading] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };

  return (
    <div className='connect-account-overlay'>
        <div className='connect-account-main'>
            <div className='connect-account-box'> 
                <div  className='choose-bank'>
                    <img src={process.env.PUBLIC_URL + "/images/arrowBack.svg"} alt="back" style={{width:"16px", height:"16px"}}/>
                    <p className='choose-your-bank'>Choose your bank</p>
                    <img src={process.env.PUBLIC_URL + "/images/close.svg"} alt="close"/>
                </div>
                <div className='flick-logo' style={{ position: 'relative' }}>
                    <img src={process.env.PUBLIC_URL + "/images/round-flick-logo.svg"} alt="logo" style={{width:"48px", height:"48px"}}/>
                    <img src={process.env.PUBLIC_URL + "/images/gt-bank.svg"} alt="logo" style={{ position: 'absolute', top: '0', right: '115px' }}/>
                </div>
                <p className='selection'>Select connection method</p>
                <div className='connect-effortless'>
                   <div className='border-line'>
                        <div className='connect-title' onClick={() => setSelectedOption('internet')}>
                            <img src={process.env.PUBLIC_URL + "/images/connect.svg"} alt="logo"/>
                            <div className='connect-link' style={{marginRight:"28.5px"}}>
                                <p className='connect-your-account'>Internet banking</p>
                                <p className='securely-connect' style={{marginBottom:"18px"}}>Use your web username & password</p>
                            </div>
                            <input 
                                type="radio" 
                                name="options"
                                value="internet"
                                checked={selectedOption === 'internet'}
                                onChange={handleOptionChange}
                            />
                        </div>
                    </div>
                    <div className='connect-title' onClick={() => setSelectedOption('mobile')}>
                        <img src={process.env.PUBLIC_URL + "/images/your-data.svg"} alt="logo"/>
                        <div className='connect-link'>
                            <p className='connect-your-account'>Mobile banking</p>
                            <p className='securely-connect'>Use your username or account number & password</p>
                        </div>
                        <input 
                                type="radio" 
                                name="options"
                                value="mobile"
                                checked={selectedOption === 'mobile'}
                                onChange={handleOptionChange}
                            />
                    </div>
                <button className="btn" style={{background:"#2EBDB6"}}>
                {isLoading ? (
                    <BeatLoader
                        color="#FFF"
                        cssOverride={{}}
                    />              ) : (
                    <>
                    Continue
                    <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                    </>
                )}
                </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ChooseYourBank