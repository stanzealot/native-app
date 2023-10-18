import React, { useState } from "react";
import SettingsSideMenu from "./SettingsSideMenu";
import SettingsSideData from "./SettingsSideData.json";
import "./Settings.scss";
import BusinessPreference from "./BusinessPreference";
import SettlementAccounts from "./settlementAccounts/SettlementAccounts";
import Whitelisted from "./whitelisted/Whitelisted";
import Developers from "./Developers";

function Settings() {
  const allSettingsSideData = SettingsSideData;

  const [selectedMenuItem, setSelectedMenuItem] = useState("Business preference");

  const renderSelectedComponent = () => {
    switch (selectedMenuItem) {
      case "Business preference":
        return <BusinessPreference />;
      case "Settlement accounts":
        return <SettlementAccounts />;
      case "Whitelisted IP addresses":
        return <Whitelisted />;
      case "Developers":
        return <Developers />;
      default:
        return <BusinessPreference />;
    }
  };

  return (
    <div className="settings">
      <div className="settings-inner">
        <div className="side-header">
          <div className="settings-side">
            {allSettingsSideData.map((menu, index) => (
              <SettingsSideMenu menu={menu} key={index} setSelectedMenuItem={setSelectedMenuItem}     selectedMenuItem={selectedMenuItem}/>
            ))}
          </div>
          {renderSelectedComponent()}
        </div>
      </div>
    </div>
  );
}

export default Settings;
