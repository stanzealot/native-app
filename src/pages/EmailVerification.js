import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function EmailVerification() {

    const navigate = useNavigate();

    const redirect = async ()=>{
        const fullUrl = window.location.href;
        const urlParts = fullUrl.split('/');
        const token = urlParts[urlParts.length - 1];
        const url =  `https://zunpla6tnl.execute-api.us-east-2.amazonaws.com/production/verify-email/${token}`
        
        try{
            const res = await axios.get(url)
            if(res.data.status==="success"){
                navigate('/login');
            }
        }catch(err){
            console.log(err)
        }

    }

    useEffect(() => { 
        redirect() 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div>
      redirecting to login........
    </div>
  )
}

export default EmailVerification
