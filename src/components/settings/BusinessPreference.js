import React, {useState} from 'react'
import ProfileInfo from './businessPreference/ProfileInfo';
import Security from './businessPreference/Security';
import EnableServices from './businessPreference/EnableServices';
import Notifications from './businessPreference/Notifications';

function BusinessPreference() {

    const [activeTab, setActiveTab] = useState("profileInfo");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

  return (
    <div className="header-form-upload">
    <div className="header-border">
      <div className="settings-header">
        <p
          className={activeTab === "profileInfo" ? "active" : ""}
          onClick={() => handleTabClick("profileInfo")}
        >
          Profile Info
        </p>
        <p
          className={activeTab === "security" ? "active" : ""}
          onClick={() => handleTabClick("security")}
        >
          Security
        </p>
        <p
          className={activeTab === "enableServices" ? "active" : ""}
          onClick={() => handleTabClick("enableServices")}
        >
          Enable Services
        </p>
        <p
          className={activeTab === "notifications" ? "active" : ""}
          onClick={() => handleTabClick("notifications")}
        >
          Notifications
        </p>
      </div>
    </div>
      <div className="form-upload">
        {activeTab === "profileInfo" && <ProfileInfo />}
        {activeTab === "security" && <Security /> }
        {activeTab === "enableServices" && <EnableServices /> }
        {activeTab === "notifications" && <Notifications /> }
      </div>
  </div>
  )
}

export default BusinessPreference