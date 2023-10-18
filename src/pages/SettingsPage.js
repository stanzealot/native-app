import React from "react";
import '../components/common/Pages.scss'
import '../components/getStarted/GetStarted.scss'
import '../components/settings/Settings.scss'
import Settings from "../components/settings/Settings";
import NameControl from "../components/common/NameControl";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SettingsPage() {

  return (
    <div className='main-inner'>
    <NameControl
    btn
    name="Settings"
    desc="Manage your account settings and preferences"
    />
    <Settings />
    
    <ToastContainer />
</div>
  );
}

export default SettingsPage;
