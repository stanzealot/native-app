import React, { useState } from 'react'
import NameControl from '../components/common/NameControl'
import BalanceTable from '../components/balance/BalanceTable';
import BalanceHistoryTable from '../components/balance/BalanceHistoryTable';
import SetLimit from '../components/modals/SetLimit';
import BankAccountModal from '../components/balance/modal/BankAccountModal';
import BalanceModal from '../components/balance/modal/BalanceModal';
import CurrencyModal from '../components/balance/modal/CurrencyModal';
import EnterAmount from '../components/modals/EnterAmount';
import FundBalance from '../components/modals/FundBalance';
import VirtualAccount from '../components/modals/VirtualAccount';
import CardDetails from '../components/modals/CardDetails';
import SelectPayment from '../components/modals/SelectPayment';
import TransactionOtp from '../components/modals/TransactionOtp';
import TransactionSuccessful from '../components/modals/TransactionSuccessful';
import Success from '../components/modals/Success';
import Successful from '../components/modals/Successful';
import ApiWalletConfirm from '../components/modals/ApiWalletConfirm';
import ApiWallet from '../components/modals/ApiWallet';

function Balance() {
    const [btnActive,setBtnActive] = useState(false);
    let [selectedButton, setSelectedButton] = useState("All Balances");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(''); 
    const [selectedCurrency, setSelectedCurrency] = useState(''); 
    const [isAmount,setIsAmount] = useState(false);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [isPaymentMethod, setIsPaymentMethod] = useState(false);
    const [isVertual, setIsVertual] = useState(false);
    const [isCardDetails, setIsCardDetails] = useState(false);
    const [isCardMethod, setIsCardMethod] = useState(false);
    const [isOtp, setIsOtp] = useState(false);
    const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSuccessful,setIsSuccessful] = useState(false)
    const [isApiWalletConfirm,setIsApiWalletConfirm] = useState(false);
    const [isPayout, setIsPayout] = useState(false);
    const [balanceModal,setBalanceModal] = useState({})

    const [isPayoutInput, setIsPayoutInput] = useState({
      currency:"",
      amount:"",
    })
    const [formData, setFormData] = useState({
      selectedBalance: '',
      selectedCurrency: 'USD',
      amount: '',
      description: '',
  });
  const [newCurrency,setNewCurrency] = useState({
    currencyName: '',
    limitAmount:''
  })
  
  const [fundBalanceValues, setFundBalanceValues] = useState({
    amount:"",
    bank:"",
    card:"",
  })
  const [limitInputValue,setLimitInputValue] = useState("")
  const toggleModal = () => {
    setIsOpenPopup(!isOpenPopup);
  };
    
    

    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };
  
    const toggleSetLimitModal = () => {
      setIsModalOpen(!isModalOpen)
    };

   
   
  const Transferbetween = ()=>{
    console.log("from parent: ",formData)
  }
  const AddCurrency = ()=>{
    console.log("currency: ",newCurrency)
  }
  const confirmLimit =()=>{
    console.log("limit value : ",limitInputValue)
  }
  const renderContent = () => {
    if(selectedButton === 'All Balances') return <BalanceTable
     openSetLimitModal={toggleSetLimitModal} 
     setIsAmount = {setIsAmount}
     setIsModalOpen = {setIsModalOpen}
     setIsPaymentMethod={setIsPaymentMethod}
       
     />;
    if(selectedButton ==='Balance History') return <BalanceHistoryTable />;
  };

  const renderModal = () => {
    switch (selectedOption) {
      case 'Transfer to Bank Account':
        return <BankAccountModal setIsOpenPopup={setIsOpenPopup} />;
      case 'Transfer between Balances':
        return <BalanceModal 
        setIsOpenPopup={setIsOpenPopup}
        Transferbetween={Transferbetween} 
        formData={formData}
        setFormData={setFormData}
        />;
      case 'Add New Currency':
        return <CurrencyModal 
        setIsOpenPopup={setIsOpenPopup} 
        newCurrency={newCurrency}
        setNewCurrency={setNewCurrency}
        AddCurrency = {AddCurrency}
        />;
      default:
        return null; // No modal to display
    }
  };
  return (
    
      <div className='main-inner'>
          
          <NameControl 
          currency
          name={selectedButton}
          desc="The balance is shown here"
          btnFirst="All Balances"
          btnSecond="Balance History"
          btnActive={btnActive}
          handleButtonClick ={handleButtonClick}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedCurrency = {selectedCurrency}
          setSelectedCurrency = {setSelectedCurrency}
          toggleModal={toggleModal}
          />
          {renderContent()}


          {isModalOpen && <SetLimit 
          open={true} onClose={toggleSetLimitModal}
          title="Set low limit"
          desc="Enter a minimum threshold to be notified"
          setIsModalOpen ={setIsModalOpen}
          setLimitInputValue={setLimitInputValue}
          limitInputValue ={limitInputValue}
          confirmLimit={confirmLimit}
          setIsSuccessful={setIsSuccessful}
          />}
          {isSuccessful && <Successful 
            setIsSuccessful = {setIsSuccessful}
            setIsModalOpen={setIsModalOpen}
        />}
          {isOpenPopup && renderModal()}
          
          {isAmount && <EnterAmount 
          setIsAmount = {setIsAmount}
          setIsPaymentMethod ={setIsPaymentMethod}
          />}
          {isPaymentMethod && <FundBalance 
          setIsPaymentMethod={setIsPaymentMethod} 
          setIsAmount = {setIsAmount}
          setIsVertual ={setIsVertual}
          setIsCardMethod={setIsCardMethod}
          setIsPayout={setIsPayout}
          />}
          {isVertual && <VirtualAccount
           setIsAmount = {setIsAmount}
          setIsPaymentMethod={setIsPaymentMethod} 
          setIsVertual ={setIsVertual}
          setIsSuccess = {setIsSuccess}
          />}
          {isCardMethod && <SelectPayment 
           setIsPaymentMethod={setIsPaymentMethod} 
           setIsAmount = {setIsAmount}
           setIsCardMethod={setIsCardMethod}
           setIsOtp={setIsOtp}
           setIsCardDetails={setIsCardDetails}
           />}
           {
            isPayout && <ApiWallet
            setIsPayout= {setIsPayout}
            setIsPaymentMethod={setIsPaymentMethod}
            setIsPayoutInput={setIsPayoutInput} 
            setIsAmount={setIsAmount}
            isPayoutInput ={isPayoutInput}
            setIsApiWalletConfirm = {setIsApiWalletConfirm}
            />
          }
          {
            isApiWalletConfirm && <ApiWalletConfirm 
            setIsApiWalletConfirm={setIsApiWalletConfirm}
            setIsPaymentMethod={setIsPaymentMethod}
            setIsPayout={setIsPayout}
            setIsAmount ={setIsAmount}
            setIsSuccess= {setIsSuccess}
            />
          }
           {isCardDetails && <CardDetails 
             setIsCardDetails={setIsCardDetails}
             setIsCardMethod ={setIsCardMethod}
             setIsPaymentMethod={setIsPaymentMethod} 
            setIsAmount = {setIsAmount}
           />}
          {isOtp && <TransactionOtp 
           setIsOtp={setIsOtp}
           setIsTransactionSuccess={setIsTransactionSuccess}
           setIsCardMethod ={setIsCardMethod}
           setIsPaymentMethod={setIsPaymentMethod} 
           setIsAmount = {setIsAmount}
          
          setIsSuccess={setIsSuccess}
           
          />}
          {isTransactionSuccess && <TransactionSuccessful 
           setIsTransactionSuccess={setIsTransactionSuccess}
          />}
          {isSuccess && <Success 
          setIsAmount = {setIsAmount}
          setIsPaymentMethod={setIsPaymentMethod}
          setIsPayout= {setIsPayout} 
          setIsApiWalletConfirm={setIsApiWalletConfirm}
          setIsCardMethod={setIsCardMethod}
          setIsCardDetails={setIsCardDetails}
          setIsOtp={setIsOtp}
          setIsVertual ={setIsVertual}
           setIsTransactionSuccess={setIsTransactionSuccess}
           setIsSuccess= {setIsSuccess}
          />}
       </div>
       
  )
}

export default Balance
