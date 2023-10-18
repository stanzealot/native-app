import React, {useEffect, useState} from "react";
import SettlementModal from "./SettlementModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

function SettlementAccounts() {
  const {currentUser} = useSelector((state)=>state?.user)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    // getSettings(); 
    // eslint-disable-next-line 
  },[])
  const initialValue ={
    country: "",
    currency: "",
    bankCode: "",
    accountNumber: "",
  }
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(initialValue);
  const [settlementData,setSettlementData] = useState([])

  const getSettings = async ()=>{
    
    try{
      
      const headers = {  
        "api_key": currentUser.user.merchantKey, 
        "sweetapi": currentUser.user.merchantCode  
      }
      

      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/settlement-account';
      let res = await axios.get(url,{
        headers:headers
      })
      setSettlementData(res.data.data)
      

      
    }catch(err){
      const errorMessage = err?.message || "unable to fetch data"
      toast.error(errorMessage || "unable to fetch data")
    }
  }

  const addSettlementAccount = async ()=>{
    
    try{
      setIsLoading(true);
      const headers = {  
        "api_key": currentUser.user.merchantKey, 
        "sweetapi": currentUser.user.merchantCode  
      }
      const url ="https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/add-settlement-account"
      let res = await axios.post(url,{...formData},{
        headers:headers
      }) 
      setFormData(initialValue);

      getSettings();
      setIsLoading(false);
      toast.success(res.data.message);
      setOpenModal(false)
    }catch(err){
      console.log(err)
      setIsLoading(false);
      const errorMessage = err.response.data.message || "Server error"
      toast.error(errorMessage);
      
    }
  }
  return (
    <div className="settlement">
      <div className="settlement-border">
        <div className="settlement-header">
          <div className="settlement-account">
            <h2 className="account-text">Settlement accounts</h2>
            <span className="eleven-accounts">{settlementData.length} {(settlementData.length===1)?"account":"accounts"}</span>
          </div>
          <button className="settlement-btn"  onClick={() => setOpenModal(true)}>
            {
              isLoading ? (
                <BeatLoader
                color="#FFF"
                cssOverride={{}}
              />
                
              ) : (
                <> 
                New settlement account <img src={process.env.PUBLIC_URL + "/images/settlement-plus.svg"} alt="plus"/>
                </>
              )
            }
          </button>
          <SettlementModal addSettlementAccount={addSettlementAccount} setFormData={setFormData} formData={formData} open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
        </div>
        {settlementData?
          <table className="settlement-table">
            {console.log(settlementData)}
          <tbody>
          
            <tr>
                <th className='th-text'>Bank name</th>
                <th className='th-text'>Account number</th>
                <th className='th-text'>
                <div style={{display:"flex", alignItems:"center", gap:"4px"}}>
                        <p>Currency</p>
                        <img src={process.env.PUBLIC_URL+"/images/currency-arrow.svg"} alt='copy'/>
                    </div>
                </th>
                <th className='th-text'>Country</th>
            </tr>
            {setSettlementData && settlementData.map((item, index) => (
              <tr key={index}>
                <td className='td-text'>
                    <div className='settlement-tbl-account'>
                        <img className='settlement-bank-logo' src={item.image?item.image:"" } alt="" />
                        <div className='payment-account-text'>
                            <h1 className='settlement-text'>{currentUser?.user?.business_name}</h1>
                            <h4 className='small-text'>{item.bankName}</h4>
                        </div>
                    </div>
                </td>
                <td className='td-text'>{item.Nuban}</td>
                <td className='td-text'>{item.currency}</td>
                <td className='td-text'>
                    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                        <p>{item.country}</p>
                        <img src={process.env.PUBLIC_URL+"/images/threeDot.svg"} alt='copy'/>
                    </div>
                </td>
            </tr>
            
          ))}
          </tbody>
          </table>
          :
          <div className="sett_empty">
            <div className="set_empty_content">
              <img src="/images/emptyPage.svg" alt="empty" />
              <h1 className="sett_h">No Settlement accounts Yet</h1>
              <p className="sett_p">You can simply add a new Settlement account using the control button</p>
            </div>
          </div>
        }
    </div>
  );
}

export default SettlementAccounts;
