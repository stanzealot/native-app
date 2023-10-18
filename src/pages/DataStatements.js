import React,{useEffect, useRef, useState} from 'react'
import NameControl from '../components/common/NameControl'
import Statements from '../components/data/Statements';
import Links from '../components/data/Links';
import CreakLinkForm from '../components/data/statements/CreakLinkForm';
import axios from 'axios';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

function DataStatements() {
  const {currentUser} = useSelector((state)=>state?.user)

  useEffect(()=>{
    getStatementLink(); 
    // eslint-disable-next-line 
  },[])
  const [btnActive,setBtnActive] = useState(false);
   const [selectedButton, setSelectedButton] = useState("Statement");
   const [isLink,setIsLink] = useState(false) 
   const [linkInput,setLinkInput] = useState({
    pageName:"",
    description:"",
    customLink:"",
    selectedApps:"",
    selectedPeriod:"",
    redirectLink:"",
    emailaddress:""
   })


   const [statementLink,setStatementLink] = useState([])
   const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };
    
    const toggleLink =()=>{
      setIsLink(!isLink);
    }
    const renderContent = () => {
    if(selectedButton === 'Statement') return <Statements statementLink={statementLink} />;
    
    if(selectedButton ==='Links') return <Links statementLink={statementLink} toggleLink={toggleLink}/>;
   
    };

    


    const getStatementLink = async ()=>{
      
      try{
        
        const headers = {  
          "api_key": currentUser.user.merchantKey, 
          "sweetapi": currentUser.user.merchantCode  
        }
        const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/get-job-pages';
        let res = await axios.get(url,{
          headers:headers
        })
  
        
        setStatementLink(res.data.data || [])
         
      }catch(err){
        console.log(err)
        const errorMessage = err?.message || "unable to fetch data"
       
      }
    }

    const addStatementLink = async ()=>{

      try{
        setIsLoading(true);

        const headers = {  
          "api_key": currentUser?.user?.merchantKey, 
          "sweetapi": currentUser?.user?.merchantCode  
        }
        
        const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/create-job-page';
        let res = await axios.post(url,{...linkInput},{
          headers:headers
        })
        getStatementLink();
        setIsLoading(false);
        setIsLink(false);
        toast.success(res.data.message);
      }catch(err){
        setIsLoading(false);
        console.log(err);
        const errorMessage = err?.response?.data?.data?.message || "Server error"
        toast.error(errorMessage);

      }
      console.log(linkInput)
    }
  return (
 
    <div className='main-inner'>
      {console.log(statementLink)}
        <NameControl 
        name="Statements"
        desc="All statements collected by Flick"
        btntext="Quick check"
        btnFirst="Statement"
        btnSecond="Links"
        btnActive={btnActive}
        handleButtonClick ={handleButtonClick}
        />
        
        {
          renderContent()
        }
        {isLink && <CreakLinkForm  isLoading={isLoading}  addStatementLink={addStatementLink} linkInput={linkInput} setLinkInput={setLinkInput} setIsLink={setIsLink}/>}



    </div>
        
  )
}

export default DataStatements
