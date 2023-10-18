import React, { useState} from 'react'
import { BeatLoader } from 'react-spinners'
import './connectAccount.scss'


function LoginDetails() {

    const initialState = {
        first_name: '',
        last_name: '',
        email_address: ''
      };

    const [isLoading, setIsLoading] = useState(false);
    const [formData,setFormData] = useState(initialState)
    const [isInputClicked, setIsInputClicked] = useState({
        firstName: false
      });

      const  handleInputChange = (event)=>{
        const { firstName, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [firstName]: value,
        }));
      }

      const handleInputContainerClick = (inputFirstName) => {
        setIsInputClicked((prevState) => ({
          ...prevState,
          [inputFirstName]: true,
        }));
      };
    
      const handleInputBlur = (inputFirstName) => {
        setIsInputClicked((prevState) => ({
          ...prevState,
          [inputFirstName]: false,
        }));
      };

  return (
    <div className='connect-account-overlay'>
        <div className='connect-account-main'>
            <div className='flick-link-box'>
                <div className='flick-link-title'>
                    <img src={process.env.PUBLIC_URL + "/images/round-flick-logo.svg"} alt="logo"/>
                    <div className='flick-link'>
                        <p className='link-demo'>Flick Link Demo</p>
                        <p className='explore-flick'>Explore Flick and Flick Link</p>
                    </div>
                </div>
                <form className='flick-link-form'>
                    <div className='flick-link-inner'>
                        <div className="input_container" onBlur={() => handleInputBlur('firstName')}>
                            <div className={`input-group ${isInputClicked.firstName ? 'clicked' : ''}`} onClick={() => handleInputContainerClick('firstName')} >
                                <input type="text" name="first_name" placeholder="Mide Ajibade" className="input-name"  onChange={handleInputChange} required/>
                            </div>
                            <p className={`input-label ${isInputClicked.firstName ? 'clicked' : ''}`}>First Name</p>
                        </div>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            onChange={handleInputChange}
                        />
                        <input
                            className="input-field"
                            type="email"
                            placeholder="Email Address"
                            name="email_address"
                            onChange={handleInputChange}
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
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginDetails