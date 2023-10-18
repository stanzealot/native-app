import React, { useState } from 'react'
import NameControl from '../components/common/NameControl'
import Identities from '../components/data/Identities'
import VerifyIdentity from '../components/modals/data/VerifyIdentity';
import BankVerificationNumber from '../components/data/BankVerificationNumber';
import VirtualNIN from '../components/data/VirtualNIN';
import NUBANVerification from '../components/data/NUBANVerification';
import PhoneNumber from '../components/data/PhoneNumber';
import DriversLicense from '../components/data/DriversLicense';
import CACVerification from '../components/data/CACVerification';
import PassportVerification from '../components/data/PassportVerification';

function DataIdentity() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const verifyIdentity = () =>{
    setIsOpenPopup(true);
  }
  
  const renderVerifyIdentityModal = () => {
    
    if (verificationResult === "bvn") return <BankVerificationNumber setVerificationResult={setVerificationResult} />
    if (verificationResult ==="vnin") return <VirtualNIN setVerificationResult={setVerificationResult}/>
    if (verificationResult ==="nuban") return <NUBANVerification setVerificationResult={setVerificationResult}/>
    if (verificationResult ==="phone") return <PhoneNumber setVerificationResult={setVerificationResult}/>
    if (verificationResult ==="license") return <DriversLicense setVerificationResult={setVerificationResult}/>
    if (verificationResult ==="cac") return <CACVerification setVerificationResult={setVerificationResult}/>
    if (verificationResult ==="passport") return <PassportVerification setVerificationResult={setVerificationResult}/>

  }
  return (
    
      <div className='main-inner'>
          <NameControl 
          identity
          data
          name="Identity"
          desc="Validate names, BVNs, phone numbers, addresses, and more to optimize your KYC process."
          btntext="Quick check"
          verifyIdentity = {verifyIdentity}
          />
          <Identities users="users" btnFirst numUsers="100"/>
          {isOpenPopup && <VerifyIdentity setVerificationResult={setVerificationResult} setIsOpenPopup={setIsOpenPopup} />}
          {verificationResult && renderVerifyIdentityModal()}
      </div>
        
  )
}

export default DataIdentity
