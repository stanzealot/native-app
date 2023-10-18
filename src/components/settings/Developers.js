import React, {useState} from 'react'
import ApiKeys from './developers/ApiKeys';
import Webhooks from './developers/Webhooks';


function Developers() {
    
    const [activeTab, setActiveTab] = useState("apiKeys");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

   

  return (
    <div className="header-form-upload">
    <div className="header-border">
      <div className="settings-header">
        <p
          className={activeTab === "apiKeys" ? "active" : ""}
          onClick={() => handleTabClick("apiKeys")}
        >
          API Keys
        </p>
        <p
          className={activeTab === "webhooks" ? "active" : ""}
          onClick={() => handleTabClick("webhooks")}
        >
          Webhooks
        </p>
        <p
          className={activeTab === "developerDocs" ? "active" : ""}
          onClick={() => handleTabClick("developerDocs")}
        >
          Developer docs
        </p>
      </div>
    </div>
      <div className="form-upload">
        {activeTab === "apiKeys" && <ApiKeys />}
        {activeTab === "webhooks" && <Webhooks /> }
        {/* {activeTab === "developerDocs" && <EnableServices /> } */}
      </div>
  </div>
  )
}

export default Developers