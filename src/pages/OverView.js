import React, { useEffect, useState } from 'react'
import NameControl from '../components/common/NameControl'
import OverViewPayment from '../components/overview/OverViewPayment';
import { useSelector } from 'react-redux';
import OverviewData from '../components/overview/OverviewData';
import SetLimit from '../components/modals/SetLimit';
import FundBalance from '../components/modals/FundBalance';
import EnterAmount from '../components/modals/EnterAmount';
import VirtualAccount from '../components/modals/VirtualAccount';
import CardDetails from '../components/modals/CardDetails';
import SelectPayment from '../components/modals/SelectPayment';
import TransactionOtp from '../components/modals/TransactionOtp';
import TransactionSuccessful from '../components/modals/TransactionSuccessful';
import Success from '../components/modals/Success';
import AvailableBalance from '../components/modals/AvailableBalance';
import axios from 'axios';
import BalanceModal from '../components/balance/modal/BalanceModal';
import ApiWallet from '../components/modals/ApiWallet';
import ApiWalletConfirm from '../components/modals/ApiWalletConfirm';
import Successful from '../components/modals/Successful';
import TransferOptions from '../components/customers/modals/TransferOptions';
import TransferPortfolio from '../components/customers/modals/TransferPortfolio';
import PortfolioCompanyAmount from '../components/customers/modals/PortfolioCompanyAmount';
import PortFolioConfirm from '../components/customers/modals/PortFolioConfirm';
import PortfoliioSucceess from '../components/customers/modals/PortfoliioSucceess';
import TransferToBank from '../components/customers/modals/TransferToBank';
import Beneficiary from '../components/customers/modals/Beneficiary';
import BeneficiaryValue from '../components/customers/modals/BeneficiaryValue';
import DollarAmount from '../components/customers/modals/DollarAmount';
import DollarVirtual from '../components/customers/modals/DollarVirtual';
import DollarSuccess from '../components/customers/modals/DollarSuccess';

function OverView({balanceData,setBalanceData,graphData,graphCurrency,setGraphCurrency,collectionData}) {
  useEffect(()=>{
    getBalance(); 
    // eslint-disable-next-line 
  },[])
    const {currentUser} = useSelector((state)=>state?.user)
    const [btnActive,setBtnActive] = useState(false);
    const [selectedButton, setSelectedButton] = useState("Payments");
    const [isSetLimit, setIsSetLimit] = useState(false);
    const [isPaymentMethod, setIsPaymentMethod] = useState(false);
    const [isVertual, setIsVertual] = useState(false);
    const [isCardDetails, setIsCardDetails] = useState(false);
    const [isCardMethod, setIsCardMethod] = useState(false);
    const [isOtp, setIsOtp] = useState(false);
    const [isTransactionSuccess, setIsTransactionSuccess] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false)
    const [isAmount,setIsAmount] = useState(false);
    const [isBalanceOpen, setIsBalanceOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPayout, setIsPayout] = useState(false);
    const [isPayoutInput, setIsPayoutInput] = useState({
      currency:"",
      amount:"",
    })
    const [isPortfolioInput, setIsPortfolioInput] = useState({
      currency:"",
      amount:"",
      amount2:"",
      desc:""
    })
    const [transferBankInput, setTransferBankInput] = useState({
      currency:"",
      amount:"",
      amount2:"",
      desc:"",
      acc_num:"",
    })
    const [isApiWalletConfirm,setIsApiWalletConfirm] = useState(false);
    const [balanceModal,setBalanceModal] = useState({})
    const [isSuccessful,setIsSuccessful] = useState(false)
    const [isTransferOption,setIsTransferOption] = useState(false)
    const [isTransferPortfolio,setIsTransferPortfolio] = useState(false)
    const [isTransferBank,setIsTransferBank] = useState(false)
    const [walletOverviewData, setWalletOveerViewData] = useState({})
    const [usdWalletBalance,setUsdWaalletBalance] = useState("")
    const [isTransferPortfolioAmount,setIsTransferPortfolioAmount] = useState(false)
    const [isConfirmPortfolio,setIsConfirmPortfolio] = useState(false)
    const [isPortfolioSuccess,setIsPortfolioSuccess] = useState(false)
    const [isNigerBankTransfer, setIsNigerBankTransfer] = useState(false)
    const [isSelectBeneficiary,setIsSelectBeneficiary] = useState(false);
    const [isBeneficiary,setIsBeneficiary] = useState(false)
    const [isDollarAmount,setIsDollarAmount] = useState(false);
    const [isDollarVirtual,setIsDollarVirtual] = useState(false);
    const [isDollarSuccess,setIsDollarSuccess] = useState(false);
    // const [balanceData,setBalanceData] = useState([])
    
    
    const data =[
      { name: "Jan", Total: 1200 },
      { name: "Feb", Total: 2100 },
      { name: "Mar", Total: 800 },
      { name: "Apr", Total: 1600 },
      { name: "May", Total: 900 },
      { name: "June", Total: 1700 },
      { name: "July", Total: 1700 },
      { name: "August", Total: 1700 },
    ];
    const getBalance = async ()=>{
      
      try{
        
        const headers = {  
          "api_key": currentUser.user.merchantKey, 
          "sweetapi": currentUser.user.merchantCode  
        }
        const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/balances';
        let res = await axios.get(url,{
          headers:headers
        })
  
        
        const newValue = res.data.data
       setBalanceData(newValue || []);
         
      }catch(err){
        console.log(err)
        const errorMessage = err?.message || "unable to fetch data"
       
      }
    }
    
    // const getGraph = async ()=>{
    //   try{
       
    //     const headers = {  
    //       "api_key": currentUser?.user?.merchantKey, 
    //       "sweetapi": currentUser?.user?.merchantCode  
    //     }

    //     const data ={
    //       currency: "NGN" 
    //     }
        
    //     const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transaction-graph';
    //     let res = await axios.post(url,{...data},{
    //       headers:headers
    //     })
    //     console.log(res.data.data);
    //     const newValue = res?.data?.data
    //     // setCollectionData(newValue);
     
        
    //     // toast.success(res.data.message);
    //   }catch(err){
        
    //     console.log(err);
    //     const errorMessage = err?.response?.data?.data?.message || "Server error"
       

    //   }
    // }

    
    const handleBtnActive = ()=>{
        setBtnActive(!btnActive)
    }
    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };
    const toggleSetLimitModal = () => {
      setIsModalOpen(!isModalOpen)
    };
    const balanceNav = ()=>{
      setIsBalanceOpen(!isBalanceOpen)
    }
    const confirmLimit =()=>{
      console.log("limit value : ")
    }
   
  return (
    
    <div className='main-inner'>
       
       <NameControl 
        btn
        image
        name="Nelson E!"
        desc="Here’s how Tx is performing"
        />
        <OverViewPayment 
        collectionData={collectionData}
        balanceNav={balanceNav} data={data} 
        balanceData={balanceData}
        setGraphCurrency={setGraphCurrency}
        setBalanceModal={setBalanceModal}
        walletOverviewData ={walletOverviewData}
        setWalletOveerViewData={setWalletOveerViewData}
        />;
        {isBalanceOpen && <AvailableBalance
          setIsBalanceOpen={setIsBalanceOpen} 
          setIsPaymentMethod={setIsPaymentMethod} 
          setIsTransferOption ={setIsTransferOption}
          setIsTransferBank = {setIsTransferBank}
          setIsModalOpen={setIsModalOpen}
          setIsDollarAmount ={setIsDollarAmount}
          title={balanceModal === "NGN"?"Nigerian Naira":balanceModal==="USD" ? "US Dollar":""}
          amount="$354,000"
          icon={balanceModal}
          balanceModal={balanceModal}
        />}
        {
          isDollarAmount && <DollarAmount 
          setIsDollarAmount ={setIsDollarAmount}
          setIsBalanceOpen={setIsBalanceOpen} 
          setIsDollarVirtual ={setIsDollarVirtual}
          />
        }
        {
          isDollarVirtual && <DollarVirtual 
          setIsDollarVirtual ={setIsDollarVirtual}
          setIsDollarAmount ={setIsDollarAmount}
          setIsBalanceOpen={setIsBalanceOpen}
          setIsDollarSuccess={setIsDollarSuccess}
          />
        }
        {
          isDollarSuccess && <DollarSuccess 
          setIsDollarSuccess={setIsDollarSuccess}
          setIsDollarVirtual ={setIsDollarVirtual}
          setIsDollarAmount ={setIsDollarAmount}
          setIsBalanceOpen={setIsBalanceOpen}
          />
        }
        {
          isTransferOption && <TransferOptions 
          setIsTransferOption ={setIsTransferOption}
          setIsTransferPortfolio ={setIsTransferPortfolio}
          setIsTransferBank = {setIsTransferBank}
          setIsTransferPortfolioAmount={setIsTransferPortfolioAmount}
          balanceModal={balanceModal}
          setIsNigerBankTransfer ={setIsNigerBankTransfer} 
          />
        }
        {
          isNigerBankTransfer && <TransferToBank
          setIsNigerBankTransfer ={setIsNigerBankTransfer} 
          setIsTransferOption ={setIsTransferOption}
          transferBankInput={transferBankInput}
          setTransferBankInput={setTransferBankInput}
          setIsSelectBeneficiary ={setIsSelectBeneficiary}
          setIsBeneficiary={setIsBeneficiary}
          setIsBalanceOpen={setIsBalanceOpen}
          />
        }
        {
          isSelectBeneficiary && <Beneficiary 
          setIsSelectBeneficiary ={setIsSelectBeneficiary}
          />
        }
        {
          isBeneficiary && <BeneficiaryValue 
          setIsBeneficiary={setIsBeneficiary}
          setIsTransferPortfolioAmount={setIsTransferPortfolioAmount}
          />
        }

        {
          isTransferPortfolio && <TransferPortfolio 
          setIsTransferPortfolio ={setIsTransferPortfolio}
          setIsTransferPortfolioAmount = {setIsTransferPortfolioAmount}
          
          />
        }
        
        {
          isTransferPortfolioAmount && <PortfolioCompanyAmount 
          setIsConfirmPortfolio={setIsConfirmPortfolio}
          setIsTransferPortfolioAmount={setIsTransferPortfolioAmount}
          setIsTransferPortfolio ={setIsTransferPortfolio}
          setIsTransferOption ={setIsTransferOption}
          setIsBalanceOpen={setIsBalanceOpen}
          setIsPortfolioInput={setIsPortfolioInput}
          setIsBeneficiary={setIsBeneficiary}
          setIsNigerBankTransfer ={setIsNigerBankTransfer} 
          
          isPortfolioInput={isPortfolioInput}
          />
        }
        {
          isConfirmPortfolio && <PortFolioConfirm 
          setIsPortfolioSuccess ={setIsPortfolioSuccess}
          setIsConfirmPortfolio={setIsConfirmPortfolio}
          setIsTransferPortfolioAmount={setIsTransferPortfolioAmount}
          setIsTransferPortfolio ={setIsTransferPortfolio}
          setIsTransferOption ={setIsTransferOption}
          setIsBalanceOpen={setIsBalanceOpen}
          />
        }
        {
          isPortfolioSuccess && <PortfoliioSucceess 
          setIsPortfolioSuccess={setIsPortfolioSuccess}
          setIsConfirmPortfolio={setIsConfirmPortfolio}
          setIsTransferPortfolioAmount={setIsTransferPortfolioAmount}
          setIsTransferPortfolio ={setIsTransferPortfolio}
          setIsTransferOption ={setIsTransferOption}
          setIsBalanceOpen={setIsBalanceOpen}
          />
        }

        {isModalOpen && <SetLimit 
          open={true} onClose={toggleSetLimitModal}
          setIsModalOpen ={setIsModalOpen}
          title="Set low limit"
          desc="Enter a minimum threshold to be notified"
          confirmLimit={confirmLimit}
          setIsSuccessful={setIsSuccessful}
        />}
        {isSuccessful && <Successful 
            setIsSuccessful = {setIsSuccessful}
            setIsModalOpen={setIsModalOpen}
        />}
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
           setIsCardMethod ={setIsCardMethod}
            setIsPaymentMethod={setIsPaymentMethod} 
            setIsAmount = {setIsAmount}
           setIsTransactionSuccess={setIsTransactionSuccess}
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

export default OverView
