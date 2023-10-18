import React, { useState } from 'react'
import './dropDownStyle.scss'
import DropDownItem from './DropDownItem';


function DropDownContainer({setSelectedOption,toggleModal}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState(""); // State to hold the selected bank
  const openModal = () => {
     
      setIsModalOpen(!isModalOpen);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBankSelection = (bankName) => {
     
    setSelectedBank(bankName);
    setSelectedOption(bankName);
    toggleModal();
    closeModal();
  };
  return (
    <div>
      <div className="input_container_dropdown" onClick={openModal}>
          {selectedBank ? (
              <>
            
              <h3 className="bank-name current_text">{selectedBank}</h3>
              </>
          ) : (
              <span className='current_text'>Transfer</span>
          )}
          <img
              src={process.env.PUBLIC_URL + "./images/arrow-down.svg"}
              alt="arrow"
              style={{marginLeft:"auto"}}
          />
      </div>

      {isModalOpen && (
        <DropDownItem
            handleBankSelection={handleBankSelection}
            closeModal={closeModal}
            selectedBank={selectedBank}
        />
      )}
    </div>
  )
}

export default DropDownContainer
