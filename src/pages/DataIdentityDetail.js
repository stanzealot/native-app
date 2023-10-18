import React from 'react'
import '../components/data/data.scss'
import Status from '../components/common/Status'
import { useNavigate } from 'react-router-dom'




function DataIdentityDetail() {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate("/data-identity")
  }
  return (
    <div className='main-inner'>

      <div onClick={handleNavigate} className='btnData' >
        <img src={process.env.PUBLIC_URL+"/images/arrowBack.svg"} alt='arrow' />
        <p>Go Back</p>
      </div>

      <div className='identityVerify'>
          <div className='verify-top'>
              <h3>Ayomide Ajibade</h3>
              <div style={{display:'flex',gap:"5px"}}>
                <p>Verification Status:</p>
                <Status 
                icon="/images/success.svg"
                mgs="Successful"
                />
              </div>
          </div>

          <div className='verify-img'>
              <img src={process.env.PUBLIC_URL+"/images/tope.svg"} alt="tope" />
          </div>
          <div className='verify-content'>
              <table className='tbl'>
                <tr>
                  <td className='verify-text-sm'>BVN</td>
                  <td className='verify-text-sm left-mg'>NIN</td>
                </tr>
                <tr>
                  <td className='verify-text-md'>453356435634</td>
                  <td className='verify-text-md left-mg'>Not Available</td>
                </tr>
                <tr>
                  <td className='verify-text-sm mg-top'>Full name</td>
                  <td className='verify-text-sm left-mg mg-top'>Gender</td>
                </tr>
                <tr>
                  <td className='verify-text-md'>MIDE AJIBADE</td>
                  <td className='verify-text-md left-mg'>Male</td>
                </tr>
                <tr>
                  <td className='verify-text-sm mg-top'>Date of birth</td>
                  <td className='verify-text-sm left-mg mg-top'>Email</td>
                </tr>
                <tr>
                  <td className='verify-text-md'>04-Feb-2023</td>
                  <td className='verify-text-md left-mg'>Sample@mail.com</td>
                </tr>
                <tr>
                  <td className='verify-text-sm mg-top'>Residential address</td>
                  <td className='verify-text-sm left-mg mg-top'>Marital status</td>
                </tr>
                <tr>
                  <td className='verify-text-md'>Isale Eko, Lagos</td>
                  <td className='verify-text-md left-mg'>Single</td>
                </tr>
                <tr>
                  <td className='verify-text-sm mg-top'>Phone number</td>
                  <td className='verify-text-sm left-mg mg-top'>Origin location</td>
                </tr>
                <tr>
                  <td className='verify-text-md'>08136232327</td>
                  <td className='verify-text-md left-mg'>Ibadan South-West CA</td>
                </tr>
                <tr>
                  <td className='verify-text-sm mg-top'>Registered on</td>
                  <td className='verify-text-sm left-mg mg-top'>Name on card</td>
                </tr>
                <tr>
                  <td className='verify-text-md'>13-Sep-2017</td>
                  <td className='verify-text-md left-mg'>MIDE AJIBADE</td>
                </tr>
                <tr>
                  <td className='verify-text-sm mg-top'>Nationality</td>
                  <td className='verify-text-sm left-mg mg-top'>Watchlisted</td>
                </tr>
                <tr>
                  <td className='verify-text-md'>Nigeria</td>
                  <td className='verify-text-md left-mg'>NO</td>
                </tr>
              </table>
          </div>
      </div>
      
    </div>
  )
}

export default DataIdentityDetail
