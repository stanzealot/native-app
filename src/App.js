import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import FintechGetStarted from './pages/FintechGetStarted';
import OverView from './pages/OverView';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import SetNewPassword from './pages/SetNewPassword';
import PasswordReset from './pages/PasswordReset';
import Balance from './pages/Balance';
import PaymentTransaction from './pages/PaymentTransaction';
import PaymentSettlement from './pages/PaymentSettlement';
import PaymentCustomers from './pages/PaymentCustomers';
import PaymentCustomer from './pages/PaymentCustomer';
import DataIdentity from './pages/DataIdentity';
import DataAccountBalance from './pages/DataAccountBalance';
import DataTransactions from './pages/DataTransactions';
import DataTransaction from './pages/DataTransaction';
import DataIncome from './pages/DataIncome';
import DataIncomes from './pages/DataIncomes';
import DataStatements from './pages/DataStatements';
import DataCustomers from './pages/DataCustomers';
import DataIdentityDetail from './pages/DataIdentityDetail';
import GetStartedTest from './pages/GetStartedTest';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Layout from './components/layout/Layout';
import ContactUs from './pages/ContactUs';
import DisputesPage from './pages/DisputesPage';
import SettingsPage from './pages/SettingsPage';
import EmailVerification from './pages/EmailVerification';
import Landing from './pages/Landing';
import Recurring from './pages/Recurring';
import DataCustomerProfile from './pages/DataCustomerProfile';
import DataLinkPage from './pages/DataLinkPage';
import LinkRegister from './pages/dataExternalPage/LinkRegister';
import LinkAccount from './pages/dataExternalPage/LinkAccount';
import ChooseBank from './pages/dataExternalPage/ChooseBank';
import LoginMethod from './pages/dataExternalPage/LoginMethod';
import LoginPersonalDetails from './pages/dataExternalPage/LoginPersonalDetails';
import LoginChooseAccount from './pages/dataExternalPage/LoginChooseAccount';
import LoginSuccessful from './pages/dataExternalPage/LoginSuccessful';
import AccountShared from './pages/dataExternalPage/AccountShared';
import DataCustomer from './pages/DataCustomer';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import LoginDetails from './components/data/connectAccounts/LoginDetails';
import ApiWalletHistory from './pages/ApiWalletHistory';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CustomersPayment from './pages/CustomersPayment';
import Payment from './pages/Payment';



function App() {
  const {currentUser} = useSelector((state)=>state?.user)
  const [balanceData,setBalanceData] = useState([])
  const [collectionData,setCollectionData] = useState([]);
  const [settlementData,setSettlementData] = useState([]);
  const [graphData,setGraphData] = useState([])
  const [graphCurrency,setGraphCurrency] = useState('');
  const [walletApi, setWalletApi] = useState([]);
  useEffect(()=>{
    // getBalance();
    // getCollection(); 
    // getSettlement();
    // getGraph();
    // getWalletapi();
    // eslint-disable-next-line 
  },[])
  
 
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
      console.log("balance: ",newValue)
     setBalanceData(newValue || []);
       
    }catch(err){
      console.log(err)
      const errorMessage = err?.message || "unable to fetch data"
     
    }
  }
   //get collection
   const getCollection = async ()=>{
    try{
     
      const headers = {  
        "api_key": currentUser?.user?.merchantKey, 
        "sweetapi": currentUser?.user?.merchantCode  
      }

      const data = {
        category: "collection", //required  
        currency: "NGN", // required
        limit:5 // optional
      }
      
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transactions';
      let res = await axios.post(url,{...data},{
        headers:headers
      })
      console.log(res.data.data);
      const newValue = res?.data?.data
      setCollectionData(newValue);
   
      
      // toast.success(res.data.message);
    }catch(err){
      console.log(err);
      const errorMessage = err?.response?.data?.data?.message || "Server error"
    }
  }

  // get settlement
  const getSettlement = async ()=>{
    try{
      

      const headers = {  
        "api_key": currentUser?.user?.merchantKey, 
        "sweetapi": currentUser?.user?.merchantCode  
      }
      const data = {
        category: "settlement", //required  
        currency: "NGN", // required
        limit:5 // optional
      }
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transactions';
      let res = await axios.post(url,{...data},{
        headers:headers
      })
      console.log(res.data.data);
      const newValue = res?.data?.data
     
      setSettlementData(newValue)
      // toast.success(res.data.message);
    }catch(err){
      
      console.log(err);
      // const errorMessage = err?.response?.data?.data?.message || "Server error"
    }
  }


  const getWalletapi = async ()=>{
    try{
      

      const headers = {  
        "api_key": currentUser?.user?.merchantKey, 
        "sweetapi": currentUser?.user?.merchantCode  
      }
      const data = {
        category: "walletapi", //required  
        currency: "NGN" // required
        
      }
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transactions';
      let res = await axios.post(url,{...data},{
        headers:headers
      })
      console.log("wallet Api: ",res.data.data);
      const newValue = res?.data?.data
     
      setWalletApi(newValue)
      // toast.success(res.data.message);
    }catch(err){
      
      console.log(err);
      // const errorMessage = err?.response?.data?.data?.message || "Server error"
      

    }
  }

  // get graph

  const getGraph = async ()=>{
    try{
     
      const headers = {  
        "api_key": currentUser?.user?.merchantKey, 
        "sweetapi": currentUser?.user?.merchantCode  
      }

      const data ={
        currency: `${ graphCurrency ? graphCurrency: balanceData[0]?.currency}` 
      }
      
      const url = 'https://1esi7ghq4i.execute-api.us-east-2.amazonaws.com/production/transaction-graph';
      let res = await axios.post(url,{...data},{
        headers:headers
      })
      
      const newValue = res?.data?.data
     
     console.log("from here:",newValue);
      setGraphData(newValue)
      
    }catch(err){
      
      console.log(err);
      const errorMessage = err?.response?.data?.data?.message || "Server error"
     

    }
  }
  return (

    <Router>
      <Routes>
       <Route path='/' element={<Layout />}>
            <Route  path='/getstarted' element={<GetStartedTest />}/>
            <Route  path='/' element={<GetStartedTest />}/>
            <Route path='overview' element={<OverView collectionData = {collectionData}  balanceData={balanceData} graphData={graphData} graphCurrency={graphCurrency} setGraphCurrency={setGraphCurrency} setBalanceData={setBalanceData}/>} />
            <Route path='balance' element={<Balance/>} />
            <Route path='/settings' element={<SettingsPage /> } />
            <Route path='/data-customers' element={<DataCustomers /> } />
            <Route path='/data-customer' element={<DataCustomer /> } />
            <Route path='/wallet-history' element={<ApiWalletHistory  /> }/>
            <Route path='/customer-payment' element={<CustomersPayment  /> }/>      
            <Route path='/payment' element={<Payment/> }/>    
           
        </Route>
      </Routes>
    </Router>
  
  );
}

export default App;
