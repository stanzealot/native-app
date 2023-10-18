import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './connectAccount.scss';
import searchBanks from './SearchBanks.json';

function SelectBanks() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='connect-account-overlay'>
      <div className='connect-account-main'>
        <div className='connect-account-box'>
          <div className='choose-bank'>
            <img src={process.env.PUBLIC_URL + "/images/arrowBack.svg"} alt="back" style={{ width: "16px", height: "16px" }} />
            <p className='choose-your-bank'>Choose your bank</p>
            <img src={process.env.PUBLIC_URL + "/images/close.svg"} alt="close" />
          </div>
          <div className='select-banks'>
            <div className='search-banks'>
              <input
                className="search-field"
                type="text"
                placeholder="Search for your bank"
                name="search"
              />
              <img src={process.env.PUBLIC_URL + "/images/search-bank.svg"} alt="search" />
            </div>

            <div className='bank-list'>
              {searchBanks.map((bank, index) => (
                <div className='select-bank' key={index}>
                  <img src={process.env.PUBLIC_URL + bank.icon} alt="bank" />
                  <p className='bank-name'>{bank.name}</p>
                </div>
              ))}
            </div>

            <button className="btn" style={{ background: "#2EBDB6" }}>
              {isLoading ? (
                <BeatLoader
                  color="#FFF"
                  cssOverride={{}}
                />
              ) : (
                <>
                  Continue
                  <img src={process.env.PUBLIC_URL + "/images/arrow-forward.svg"} alt="arrow btn" style={{ display: "inline", marginLeft: "5px" }} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectBanks;
