import React, { useState} from 'react'
import { BeatLoader } from 'react-spinners'
import './connectAccount.scss'

function EnterCredentials() {

    const initialState = {
        user_id: '',
        password: ''
      };

    const [isLoading, setIsLoading] = useState(false);
    const [formData,setFormData] = useState(initialState)
    const [isInputClicked, setIsInputClicked] = useState({
        userId: false
      });

      const  handleInputChange = (event)=>{
        const { userId, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [userId]: value,
        }));
      }

      const handleInputContainerClick = (inputUserId) => {
        setIsInputClicked((prevState) => ({
          ...prevState,
          [inputUserId]: true,
        }));
      };
    
      const handleInputBlur = (inputUserId) => {
        setIsInputClicked((prevState) => ({
          ...prevState,
          [inputUserId]: false,
        }));
      };

  return (
    <div className='connect-account-overlay'>
        <div className='connect-account-main'>
            <div className='connect-account-box'> 
                <div  className='choose-bank'>
                    <img src={process.env.PUBLIC_URL + "/images/arrowBack.svg"} alt="back" style={{width:"16px", height:"16px"}}/>
                    <p className='choose-your-bank'>Choose your bank</p>
                    <img src={process.env.PUBLIC_URL + "/images/close.svg"} alt="close" style={{marginBottom:"27px"}}/>
                </div>
                <div style={{padding: "0px 21px 21px 21px"}}>
                    <img src={process.env.PUBLIC_URL + "/images/gt-bank.svg"} alt="logo" style={{width:"34px", height:"35.4px"}}/>
                <div className='enter-credentials'>
                    <p className='enter-your-credentials'>Enter your credentials</p>
                    <p className='credentials'>By entering your GTBank credentials here, you’re authorising Flick to share your financial data.</p>
                </div>
                <form className='flick-link-form' style={{marginTop:"10px"}}>
                    <div className='flick-link-inner' style={{ display:"flex", flexDirection:"column",gap:"16px", marginBottom:"23.5px"}}>
                        <div className="input_container" onBlur={() => handleInputBlur('userId')}>
                            <div className={`input-group ${isInputClicked.userId ? 'clicked' : ''}`} onClick={() => handleInputContainerClick('userId')} >
                                <input type="text" name="user_id" placeholder="0223038917" className="input-name"  onChange={handleInputChange} required/>
                            </div>
                            <p className={`input-label ${isInputClicked.userId ? 'clicked' : ''}`}>User ID/ Account/Email</p>
                        </div>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Password"
                            name="password"
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
                    Submit
                    <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }}/>
                    </>
                )}
                </button>
                <div className='secured-flick'>
                    <img src={process.env.PUBLIC_URL + "/images/secured-by-flick.svg"} alt="flick"/>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnterCredentials