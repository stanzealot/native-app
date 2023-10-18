import React, {useEffect, useState} from 'react'
import WhitelistedModal from './WhitelistedModal'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

function Whitelisted() {
  const {currentUser} = useSelector((state)=>state?.user)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    // getApi(); 
    // eslint-disable-next-line 
  },[])
    const [openModal, setOpenModal] = useState(false);
    const [ip,setIp] = useState("")
    const [ipData,setIpData] = useState([])



    const getApi = async ()=>{
      try{
        const headers = {  
          "api_key": currentUser.user.merchantKey, 
          "sweetapi": currentUser.user.merchantCode  
        }
        const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/profile-settings';
        let res = await axios.get(url,{
          headers:headers
        })
  
         const {whiteListedIp} = res?.data?.data
         setIpData(whiteListedIp)
      }catch(err){
        console.log(err)
        const errorMessage = err?.message || "unable to fetch data"
        // toast.error(errorMessage || "unable to fetch data")
      }
    }
    const addApi = async ()=>{
      try{
        const headers = {  
          "api_key": currentUser.user.merchantKey, 
          "sweetapi": currentUser.user.merchantCode  
        }
        setIsLoading(true);
        const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/whitelist-ip-address';
        let res = await axios.post(url,{ip},{
        headers:headers
      })
      addApi()
      setIsLoading(false);
      toast.success(res.data.message);

      }catch(err){
        console.log(err)
        setIsLoading(false);
        const errorMessage = err.response.data.message || "failed to whitlist"
        toast.error(errorMessage);
      }
    }
  return (
    <div className="whitelist">
      {console.log(ipData)}
      <div className="whitelist-border">
        <div className="whitelist-header">
            <h2 className="ip-address">IP address</h2>
          <button className="whitelist-btn"  onClick={() => setOpenModal(true)}>
            {
              isLoading ? (
                <BeatLoader
                color="#FFF"
                cssOverride={{}}
              />
              ):(
                <>
                Add IP address<img src={process.env.PUBLIC_URL + "/images/settlement-plus.svg"} alt="plus"/>
                </>
              )
            }
          </button>
          <WhitelistedModal setIp={setIp} addApi={addApi} open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
        </div>
        {
          !ipData ?
          <div className='export-whitelist'>
              <img src={process.env.PUBLIC_URL+"/images/settlement-export.svg"} alt='copy'/>
              <h3 className='whitelisted'>You have not whitelisted any IP address yet</h3>
              <h4 className='whitelisting'>Whitelisting an IP address allows only specified addresses to process API requests for services such as Transfers, Card issuing, BVN, and Bill Payments.</h4>
              
              <button className="whitelist-btn"  onClick={() => setOpenModal(true)}>
              Add IP address<img src={process.env.PUBLIC_URL + "/images/settlement-plus.svg"} alt="plus"/>
              </button>
          </div>:
          <div className='whitList_tbl'>
               
               {ipData.map((ip, index) => (
                
                  <div className='ip_content' key={index}>
                    <p className='ip_head'>IP</p>
                    <p className='ip_title'>{ip}</p>
                  </div>
                 
               ))}
               
          </div>
        }
    </div>
  )
}

export default Whitelisted