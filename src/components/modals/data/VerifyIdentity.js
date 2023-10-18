import React,{useState} from 'react'
import './dataverify.scss'
import IdType from './IdType';
import BankVerificationNumber from '../../data/BankVerificationNumber';

function VerifyIdentity({ setIsOpenPopup,setVerificationResult }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({
        vnin: '',
        bvn: '',
        nuban: '',
        country: '',
        phone:'',
        license:"",
        cac:'',
        passport:'',
        bureau:''
    });

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
       
    };

    
    const getSelectInput = () => {
        switch (selectedOption) {
          case 'vnin':
            return 'Enter VNIN';
          case 'bvn':
            return 'Enter BVN';
          case 'nuban':
            return 'Enter NUBAN number';
          case 'phone':
            return 'Enter basic phone number';
          case 'license':
            return ["Enter driver's ID number","Enter date of birth"]
          case 'cac':
            return ["Enter RC number","Enter Companys name"]
          case 'passport':
            return ["Enter last-name","Enter passport number"]
          case 'bureau':
            return ["Enter firtsname","Enter phone number"]
          default:
            return '';
        }
      };


      const handleVerification = (e)=>{
        e.stopPropagation();
        let result = '';
        switch (selectedOption) {
          case 'vnin':
            result = 'vnin';
            break;
          case 'bvn':
            result = "bvn"
            break;
          case 'nuban':
            result = 'nuban';
            break;
          case 'phone':
            result = 'phone';
            break;
          case 'license':
            result ="license";
            break;
          case 'cac':
            result = "cac";
            break;
          case 'passport':
            result ="passport";
            break;
            
          default:
            result = '';
        }

        setVerificationResult(result);
      }
  return (
    <div onClick={setIsOpenPopup.bind(this, false)} className='verify_modal' >
    
      <div onClick={(e) => e.stopPropagation()} className='verify_modal_content'>
        <div className='verify_modal_wrapper' >
            <img 
            onClick={setIsOpenPopup.bind(this, false)}
            className='verify-close' src="/images/x-close.svg" alt='close' 
            />

            <div className='verify_identity_title'>
                <h3 className='verify_identity_h'>Verify Identity </h3>
                <p className='verify_identity_p'>Manually authenticate KYCs in real-time.</p>
            </div>

            <div className='verify_identity_form'>
              <div className='form-group'>
                <span>Select country</span>
                <select 
                name="country" 
                value={formData.country} 
                onChange={handleInputChange}
                className='input-control'
                >
                <option value="" disabled selected>Select an option...</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Kenya">Kenya</option>
                </select>
              </div>

              <div className='form-group'>
                <span>Choose ID for verification</span>
                <select 
                name="country" 
                value={selectedOption} 
                onChange={handleSelectChange}
                className='input-control'
                >
                <option value="">Select an option...</option>
                <option value="vnin">Virtual National Identification Number</option>
                <option value="bvn">Bank Verification Number</option>
                <option value="nuban">NUBAN</option>
                <option value="phone">Phone Number</option>
                <option value="license ">Driver’s License </option>
                <option value="cac">CAC Basic</option>
                <option value="passport">International Passport </option>
                <option value="bureau">Credit Bureau</option>
                </select>
              </div>
             {
                (selectedOption === "vnin" || selectedOption === "bvn") &&
                 
                <div className='input_selection'>
                        <div className='form-group'>
                        <span>{getSelectInput()}</span>
                        <input name={selectedOption}  className='input-control' type="number"  onChange={handleInputChange} />
                        </div>
                        <p className='input_selection_details'>Dial <spana>*346*3*NIN*1138183#</spana>  to generate your vNIN,Note, you can only use the vNIN generated once.</p>
                </div>
             }

             {
               (selectedOption === "nuban" || selectedOption === "phone") &&
                <div className='form-group'>
                    <span>{getSelectInput()}</span>
                    <input name={selectedOption}   className='input-control' type="number"  onChange={handleInputChange} />
                </div>
             }
             {
               (selectedOption === "license" || selectedOption === "cac" || selectedOption === "passport" || selectedOption === "bureau") &&
               <>
                <div className='form-group'>
                    <span>{getSelectInput()[0]}</span>
                    <input name={selectedOption}   className='input-control' type="number"  onChange={handleInputChange} />
                </div>

                <div className='form-group'>

                    <span>{getSelectInput()[1]}</span>
                    <input name={selectedOption}   className='input-control' type="number"  onChange={handleInputChange} />
                </div>
                
               </>
             }

              <button className='btn' style={{width: "203px"}} onClick={handleVerification}>
               Verify Identity
              </button>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyIdentity
