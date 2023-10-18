import React, {useRef, useState } from 'react'
import "../Settings.scss";
import {useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios';
import { toast } from 'react-toastify';
import { copyToClipboard } from '../../utilities/clipboardUtils';
function ApiKeys() {
  const {currentUser} = useSelector((state)=>state?.user)
  const livePublicRef = useRef(null);
  const liveSecretRef = useRef(null);
  const liveEncrytRef = useRef(null);
  const testPublicRef = useRef(null);
  const testSecretRef = useRef(null);
  const testEncrytRef = useRef(null);
  
  const[isLoading,setIsLoading] = useState(false)
  const[isLoadingtest,setIsLoadingTest] = useState(false)
  
  const [testkeys,setTestKeys] = useState({
    testPublicEncKey:"",
    testPublicKey:"",
    testSecretKey:""
  })
  const [livekeys,setLiveKeys] = useState({
    livePublicKey:"",
    livePublicEncKey:"",
    liveSecretKey:"",
    testPublicEncKey:"",
    testPublicKey:"",
    testSecretKey:""
  })

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTestKeys(prevState => ({
      ...prevState,
      [name]: value
    }));
    setLiveKeys(prevState => ({
      ...prevState,
      [name]: value
    }));

  };
  
  const getUserLivekey = async ()=>{
    if(!currentUser?.user?.isVerified) return toast.error("You are not verified")
    try{
      setIsLoading(true);
      const res = await axios.post('https://zunpla6tnl.execute-api.us-east-2.amazonaws.com/production/generate-live-keys',{
        token:  currentUser?.user?.token
    });
    if(res?.data?.userAPIKeys){

      console.log(res.data)
    
      const {livePublicKey,livePublicEncKey,liveSecretKey,testPublicEncKey,testPublicKey,testSecretKey} = res?.data?.userAPIKeys
      const apiData = {livePublicKey,livePublicEncKey,liveSecretKey,testPublicEncKey,testPublicKey,testSecretKey} 
      setLiveKeys(apiData);
      toast.success("Keys generated successfully")
      setIsLoading(false);

    }
    }catch(err){
      setIsLoading(false);
      toast.error('fail to generate keys')
    }
    
  }

  const getUserTestkey = async ()=>{

    try{
      setIsLoadingTest(true);
      const res = await axios.post('https://zunpla6tnl.execute-api.us-east-2.amazonaws.com/production/generate-test-keys',{
          token:  currentUser?.user?.token
      });
     
     if(res?.data?.userAPIKeys){  
       const {testPublicEncKey,testPublicKey,testSecretKey} = res?.data?.userAPIKeys
       const apiData = {testPublicEncKey,testPublicKey,testSecretKey}
       setTestKeys(apiData);
        toast.success("Keys generated successfully")
        setIsLoadingTest(false);
     }
    }catch(err){
      setIsLoadingTest(false);
      toast.error("failed to generate key")
    }

  
  }

 

  return (
    <div className='api-keys'>
        <div className='live-api'>
            <h3 className='api-key-text'>Live API keys</h3>
        <div className='api-key-forms' style={{borderRight:"1px solid var(--flick-stroke, #eaecf0)", paddingRight:"56px"}}>
        <form className="api-key-form">
          <div className="api-form-groups">
            <label className="lbl">Public key</label>
            <div className="input-group">
              <input
                ref={livePublicRef}
                type="text"
                name="livePublicKey"
                placeholder="***********"
                className="input-form-control"
                value={livekeys.livePublicKey}
                onChange={handleInputChange}
              />
             
              <img
                src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
                alt="ic"
                className="copy-key-icon"
                onClick={copyToClipboard.bind(null,livePublicRef)}
              />
             </div>
            </div>
              <div className="api-form-groups">
                <label className="lbl">Secret key</label>
                <div className='input-group'>

                <input
                ref={liveSecretRef}
                type="text"
                name="liveSecretKey"
                placeholder="*********"
                className="input-form-control"
                value={livekeys.liveSecretKey}
                onChange={handleInputChange}
                />
                <img
                src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
                alt="ic"
                className="copy-key-icon"
                onClick={copyToClipboard.bind(null,liveSecretRef)}

                />
                </div>
              </div>
              <div className="api-form-groups">
                <label className="lbl">Encryption key</label>
                <div className='input-group'>
                  <input
                    ref={liveEncrytRef}
                    type="text"
                    name="livePublicEncKey"
                    placeholder="**********"
                    className="input-form-control"
                    value={livekeys.livePublicEncKey}
                    onChange={handleInputChange}
                  />
                  <img
                  src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
                  alt="ic"
                  className="copy-key-icon"
                  onClick={copyToClipboard.bind(null,liveEncrytRef)}

                  />
                </div>
              </div>
        </form>
        
          {/* <button onClick={getUserLivekey} className="btn" style={{width:"fit-content", padding:"10px 16px", marginBottom: "258px"}}>
           {   
           isLoading ? <BeatLoader color="#fff" size={20} /> :
            <>
            Generate new keys
            </>
           }
          </button> */}
          <button  className="btn" style={{width:"fit-content", padding:"10px 16px", marginBottom: "258px"}}>
           
            Generate new keys
           
          </button>
        </div>
        </div>

        <div className='test-api'>
        <h3 className='api-key-text' style={{width:"100%"}}>Test API keys</h3>
        <div className='api-key-forms'>
            <form className="api-key-form">
            <div className="api-form-groups">
          <label className="lbl">Public key</label>
          <div className="input-group">
            <input
              ref={testPublicRef}
              type="text"
              name="testPublicKey"
              placeholder="FLWPUBK-58e8a38c7b8ad11d7be6156"
              className="input-form-control"
              value={testkeys.testPublicKey}
              onChange={handleInputChange}
             
            />
            <img
              src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
              alt="ic"
              className="copy-key-icon"
              onClick={copyToClipboard.bind(null,testPublicRef)}

            />
          </div>
        </div>
        <div className="api-form-groups">
          <label className="lbl">Secret key</label>
          <div className="input-group">
            <input
              ref={testSecretRef}
              type="text"
              name="testSecretKey"
              placeholder="FLWPUBK-58e8a38c7b8ad11d7be6156"
              className="input-form-control"
              value={testkeys.testSecretKey}
              onChange={handleInputChange}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
              alt="ic"
              className="copy-key-icon"
              onClick={copyToClipboard.bind(null,testSecretRef)}
            />
          </div>
        </div>
        <div className="api-form-groups">
          <label className="lbl">Encryption key</label>
          <div className="input-group">
            <input
              ref={testEncrytRef}
              type="text"
              name="testPublicEncKey"
              placeholder="FLWPUBK-58e8a38c7b8ad11d7be6156"
              className="input-form-control"
              value={testkeys.testPublicEncKey}
              onChange={handleInputChange}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/copy-key-icon.svg"}
              alt="ic"
              className="copy-key-icon"
              onClick={copyToClipboard.bind(null,testEncrytRef)}
            />
          </div>
        </div>
        </form>
        {/* <button onClick={getUserTestkey} className="btn" style={{width:"fit-content", padding:"10px 16px", marginBottom: "258px"}}>
          {
            
            isLoadingtest ? <BeatLoader color="#fff" size={20} /> :
             <>
             Generate new keys
             </>
            }
        </button> */}
        <button  className="btn" style={{width:"fit-content", padding:"10px 16px", marginBottom: "258px"}}>
             Generate new keys   
        </button>
        </div>
        </div>
    </div>
  )
}

export default ApiKeys