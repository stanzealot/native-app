import React,{useEffect, useRef, useState} from 'react'
import NameControl from '../components/common/NameControl'
import InFlowPayment from '../components/payment/InFlowPayment';
import OutFlowPayment from '../components/payment/OutFlowPayment';
import SettlementItem from '../components/payment/SettlementItem';
import '../components/payment/payment.scss'
import CollectionModal from '../components/payment/CollectionModal';
import { copyToClipboard } from '../components/utilities/clipboardUtils';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import axios from 'axios';



function PaymentTransaction({collectionData,settlementData}) {
  // useEffect(()=>{
  //   getCollection();
     
  //   // eslint-disable-next-line 
  // },[])
  // useEffect(()=>{
    
  //   getSettlement(); 
  //   // eslint-disable-next-line 
  // },[])
    const [btnActive,setBtnActive] = useState(false);
    const [selectedButton, setSelectedButton] = useState("Collections");
    const [modalCollections,setModelCollections] = useState(false)
    // const [collectionData,setCollectionData] = useState([]);
    // const [settlementData,setSettlementData] = useState([]);
    const {currentUser} = useSelector((state)=>state?.user);
    const [selectedRowData, setSelectedRowData] = useState(null);
    

   const linkRef = useRef(null);
    const toggleModal =()=>{
      setModelCollections(!modalCollections)
    }
    const handleButtonClick = (button) => {
        setSelectedButton(button);
      };
    

      //collection
    // const getCollection = async ()=>{
    //   try{
       
    //     const headers = {  
    //       "api_key": currentUser?.user?.merchantKey, 
    //       "sweetapi": currentUser?.user?.merchantCode  
    //     }

    //     const data = {
    //       category: "collection", //required  
    //       currency: "NGN", // required
    //       limit:5 // optional
    //     }
        
    //     const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transactions';
    //     let res = await axios.post(url,{...data},{
    //       headers:headers
    //     })
    //     console.log(res.data.data);
    //     const newValue = res?.data?.data
    //     setCollectionData(newValue);
     
        
    //     // toast.success(res.data.message);
    //   }catch(err){
        
    //     console.log(err);
    //     const errorMessage = err?.response?.data?.data?.message || "Server error"
    //     toast.error(errorMessage);

    //   }
    // }

    // settlement
    // const getSettlement = async ()=>{
    //   try{
        

    //     const headers = {  
    //       "api_key": currentUser?.user?.merchantKey, 
    //       "sweetapi": currentUser?.user?.merchantCode  
    //     }
    //     const data = {
    //       category: "settlement", //required  
    //       currency: "NGN", // required
    //       limit:5 // optional
    //     }
    //     const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transactions';
    //     let res = await axios.post(url,{...data},{
    //       headers:headers
    //     })
    //     console.log(res.data.data);
    //     const newValue = res?.data?.data
       
    //     setSettlementData(newValue)
    //     // toast.success(res.data.message);
    //   }catch(err){
        
    //     console.log(err);
    //     // const errorMessage = err?.response?.data?.data?.message || "Server error"
        

    //   }
    // }


    
    const renderContent = () => {
    if(selectedButton === 'Collections') return <InFlowPayment setSelectedRowData={setSelectedRowData} collectionData = {collectionData} toggleModal={toggleModal} />;
    
    if(selectedButton ==='Settlement') return <OutFlowPayment settlementData={settlementData} />;
   
    };

    

  return (
    
                <div className='main-inner'>
                  {
                    modalCollections && <CollectionModal data={selectedRowData} toggleModal={toggleModal}/>
                  }
                  
                    <NameControl 
                    name={selectedButton}
                    desc="The balance is shown here"
                    btnFirst="Collections"
                    btnSecond="Settlement"
                    btnActive={btnActive}
                    handleButtonClick ={handleButtonClick}
                    /> 

                    {
                      selectedButton === "Settlement" &&
                         <div className='settlement-summary-container'>
                            <div className='settlement-summary'>
                              <SettlementItem 
                              icon="/images/settlementTotal.svg"
                              title="Total collected"
                              amount="0"
                              transNum="0"
                              bgColor="#F4FBFB"
                              />
                              
                              <SettlementItem 
                              icon="/images/settlementPending.svg"
                              title="Pending settlements"
                              amount="0"
                              transNum="0"
                              bgColor="#FEF0F5"
                              />
                              
                            </div>
                            <div className='settlement-right'>
                              <div className='settlement-wrapper'>
                                 <img src='/images/referLink.svg' alt='ellips' />
                                 {/* <h1 className='ellips-title'>Refer a Company and Earn</h1>
                                 <p className='ellips-desc'>Refer a company to use Flick verification APIs and earn 400 free api calls when they make their first API call.</p> */}

                                  {/* eslint-disable-next-line */}
                                 {/* <a href='#' className='ellips-refer'>Click to refer</a> */}
                                 <p className='refer-title'>Copy the Link Below</p>
                                 <input 
                                 ref={linkRef} 
                                 type='text' 
                                 className='refer-link-input' 
                                 placeholder='6GSexbTSV73v&BS&BD#VDVdvd...' 
                                 value="6GSexbTSV73v&BS&BD#VDVdvd..." 
                                 />
                                 <img style={{display:"inline"}} onClick={copyToClipboard.bind(null,linkRef)} src="/images/copyRefer.svg" alt="refer" />
                              </div>
                            </div>
                         </div>
                    }   
                    
                    {renderContent()}
                </div>

  )
}

export default PaymentTransaction
